import {derived, get, writable} from 'svelte/store';
import {BUILDING_COST_MULTIPLIER} from '../constants';
import {ACHIEVEMENTS} from '../data/achievements';
import {BUILDINGS, type BuildingType} from '../data/buildings';
import {UPGRADES} from '../data/upgrades';
import type {Building, GameState, PowerUp} from '../types';
import {info} from './toasts';

export const SAVE_KEY = 'atomic-clicker-save';

// Individual stores
export const achievements = writable<string[]>([]);
export const activePowerUps = writable<PowerUp[]>([]);
export const atoms = writable<number>(0);
export const buildings = writable<Record<string, Building>>({});
export const lastSave = writable<number>(Date.now());
export const totalClicks = writable<number>(0);
export const upgrades = writable<string[]>([]);

// Derived stores
export const currentUpgradesBought = derived(upgrades, $upgrades => {
	return Object.keys(UPGRADES)
	             .filter(id => $upgrades.includes(id))
	             .map(id => UPGRADES[id]);
});

export const bonusMultiplier = derived(activePowerUps, $activePowerUps => {
	return $activePowerUps.reduce((acc, powerUp) => acc * powerUp.multiplier, 1);
});

export const globalMultiplier = derived(currentUpgradesBought, $currentUpgradesBought => {
	const globalUpgrades = $currentUpgradesBought.filter(u => u.type === 'global');
	return globalUpgrades.reduce((acc, upgrade) => acc * upgrade.value, 1);
});

export const hasBonus = derived(activePowerUps, $activePowerUps => {
	return $activePowerUps.length > 0;
});

export const atomsPerSecond = derived(
	[
		buildings,
		currentUpgradesBought,
		globalMultiplier,
		bonusMultiplier
	],
	([$buildings, $currentUpgradesBought, $globalMultiplier, $bonusMultiplier]) => {
		const baseProduction = Object.entries($buildings).reduce((total, [type, building]) => {
			const buildingMultiplier = $currentUpgradesBought
				.filter(u => u.type === 'building' && u.target === type)
				.reduce((acc, upgrade) => acc * upgrade.value, 1);

			return total + (building.count * building.rate * buildingMultiplier);
		}, 0);

		return baseProduction * $globalMultiplier * $bonusMultiplier;
	}
);

export const clickPower = derived(
	[
		currentUpgradesBought,
		atomsPerSecond,
		globalMultiplier,
		bonusMultiplier
	],
	([$currentUpgradesBought, $atomsPerSecond, $globalMultiplier, $bonusMultiplier]) => {
		const clickPowerMulUpgrades = $currentUpgradesBought.filter(u => u.type === 'click_mul');
		const clickPowerMultiplier = clickPowerMulUpgrades.reduce((acc, upgrade) => acc * upgrade.value, 1);

		const clickPowerAPSUpgrades = $currentUpgradesBought.filter(u => u.type === 'click_aps');
		const clickPowerAPS = clickPowerAPSUpgrades.reduce((acc, upgrade) => acc + upgrade.value, 0);
		const clickPowerAPSMultiplier = ($atomsPerSecond * clickPowerAPS);

		const clickPowerValUpgrades = $currentUpgradesBought.filter(u => u.type === 'click_val');
		const clickPowerValue = clickPowerValUpgrades.reduce((acc, upgrade) => acc + upgrade.value, 1);

		return (clickPowerValue * clickPowerMultiplier + clickPowerAPSMultiplier) * $globalMultiplier * $bonusMultiplier;
	}
);

export const buildingProductions = derived(
	[
		buildings,
		currentUpgradesBought,
		globalMultiplier,
		bonusMultiplier
	],
	([$buildings, $currentUpgradesBought, $globalMultiplier, $bonusMultiplier]) => {
		return Object.entries($buildings).reduce((acc, [type, building]) => {
			let production = 0;
			if (building) {
				const upgrades = $currentUpgradesBought.filter(u => u.type === 'building' && u.target === type);
				const multiplier = upgrades.reduce((acc, upgrade) => acc * upgrade.value, 1);
				production = building.count * building.rate * multiplier;
			}
			production *= $globalMultiplier * $bonusMultiplier;
			return {
				...acc,
				[type]: production,
			};
		}, {} as Record<BuildingType, number>);
	}
);

// Helper functions for state management
function loadSavedState(): GameState | null {
	try {
		const saved = localStorage.getItem(SAVE_KEY);
		if (saved) {
			const savedState = JSON.parse(saved);
			if (isValidGameState(savedState)) {
				return savedState;
			}
		}
	} catch (e) {
		console.error('Failed to load saved game:', e);
	}
	return null;
}

function isValidGameState(state: any): state is GameState {
	if (!state) return false;

	const checks = [
		[
			'achievements',
			Array.isArray
		],
		[
			'activePowerUps',
			Array.isArray
		],
		[
			'atoms',
			(v: any) => typeof v === 'number'
		],
		[
			'buildings',
			(v: any) => typeof v === 'object'
		],
		[
			'lastSave',
			(v: any) => typeof v === 'number'
		],
		[
			'totalClicks',
			(v: any) => typeof v === 'number'
		],
		[
			'upgrades',
			Array.isArray
		],
	] as const;

	return checks.every(([key, validator]) => key in state && validator(state[key]));
}

// Game store manager
export const gameManager = {
	initialize() {
		const savedState = loadSavedState();
		if (savedState) {
			achievements.set(savedState.achievements.filter(a => a in ACHIEVEMENTS));
			activePowerUps.set(savedState.activePowerUps);
			atoms.set(savedState.atoms);
			buildings.set(savedState.buildings);
			lastSave.set(savedState.lastSave);
			totalClicks.set(savedState.totalClicks);
			upgrades.set(savedState.upgrades.filter(u => u in UPGRADES));
		}

		// Check achievements periodically
		setInterval(() => {
			const state = this.getCurrentState();

			Object.entries(ACHIEVEMENTS).forEach(([name, achievement]) => {
				if (!state.achievements.includes(name) && achievement.condition(state)) {
					achievements.update(current => [
						...current,
						name
					]);
					info("Achievement unlocked", achievement.name);
				}
			});
		}, 1000);
	},

	getCurrentState(): GameState {
		return {
			achievements: get(achievements),
			activePowerUps: get(activePowerUps),
			atoms: get(atoms),
			buildings: get(buildings),
			lastSave: get(lastSave),
			totalClicks: get(totalClicks),
			upgrades: get(upgrades),
		};
	},

	addAtoms(amount: number) {
		atoms.update(current => current + amount);
	},

	purchaseBuilding(type: BuildingType) {
		const currentState = this.getCurrentState();
		const building = BUILDINGS[type];
		const currentBuilding = currentState.buildings[type] ?? {
			cost: building.cost,
			rate: building.rate,
			count: 0
		};

		if (currentState.atoms < currentBuilding.cost) return;

		atoms.update(current => current - currentBuilding.cost);
		buildings.update(current => ({
			...current,
			[type]: {
				...currentBuilding,
				cost: Math.round(currentBuilding.cost * BUILDING_COST_MULTIPLIER),
				rate: currentBuilding.rate,
				count: currentBuilding.count + 1,
			},
		}));
	},

	purchaseUpgrade(id: string) {
		const currentState = this.getCurrentState();
		const upgrade = UPGRADES[id];
		const purchased = currentState.upgrades.includes(id);

		if (!purchased && currentState.atoms >= upgrade.cost) {
			atoms.update(current => current - upgrade.cost);
			upgrades.update(current => [
				...current,
				id
			]);
		}
	},

	addPowerUp(powerUp: PowerUp) {
		activePowerUps.update(current => [
			...current,
			powerUp
		]);
	},

	removePowerUp(id: string) {
		activePowerUps.update(current => current.filter(p => p.id !== id));
	},

	reset() {
		achievements.set([]);
		activePowerUps.set([]);
		atoms.set(0);
		buildings.set({});
		lastSave.set(Date.now());
		totalClicks.set(0);
		upgrades.set([]);
	},

	save() {
		const currentState = this.getCurrentState();
		localStorage.setItem(SAVE_KEY, JSON.stringify(currentState));
	}
};

import {derived, writable} from 'svelte/store';
import {type BuildingType} from '../data/buildings';
import {POWER_UP_DEFAULT_INTERVAL} from '../data/powerUp';
import {UPGRADES} from '../data/upgrades';
import type {Building, PowerUp, Range} from '../types';

// Individual stores
export const achievements = writable<string[]>([]);
export const activePowerUps = writable<PowerUp[]>([]);
export const atoms = writable<number>(0);
export const buildings = writable<Partial<Record<BuildingType, Building>>>({});
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

export const hasBonus = derived(activePowerUps, $activePowerUps => $activePowerUps.length > 0);

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

			return total + building.count * building.rate * buildingMultiplier;
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
		const clickPowerAPSValue = $atomsPerSecond * clickPowerAPS;

		const clickPowerValUpgrades = $currentUpgradesBought.filter(u => u.type === 'click_val');
		const clickPowerValue = clickPowerValUpgrades.reduce((acc, upgrade) => acc + upgrade.value, 1);

		return (clickPowerValue * clickPowerMultiplier + clickPowerAPSValue) * $globalMultiplier * $bonusMultiplier;
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

export const powerUpInterval = derived(currentUpgradesBought, ($upgrades) => {
	const powerUpIntervalUpgradesMul = $upgrades.filter(u => u.type === 'power_up_interval_mul');
	const powerUpInterval = powerUpIntervalUpgradesMul.reduce((acc, upgrade) => acc * upgrade.value, 1);
	return POWER_UP_DEFAULT_INTERVAL.map(interval => interval * powerUpInterval) as Range;
});

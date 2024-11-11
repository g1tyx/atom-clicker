import {derived, get, writable} from 'svelte/store';
import {type BuildingType} from '../data/buildings';
import {POWER_UP_DEFAULT_INTERVAL} from '../data/powerUp';
import {UPGRADES} from '../data/upgrades';
import type {Building, Effect, PowerUp, Range, Upgrade} from '../types';

// Individual stores
export const achievements = writable<string[]>([]);
export const activePowerUps = writable<PowerUp[]>([]);
export const atoms = writable<number>(0);
export const buildings = writable<Partial<Record<BuildingType, Building>>>({});
export const lastSave = writable<number>(Date.now());
export const totalClicks = writable<number>(0);
export const upgrades = writable<string[]>([]);

interface SearchEffectsOptions {
	target?: Effect['target'];
	type?: Effect['type'];
	value_type?: Effect['value_type'];
}

function getUpgradesWithEffects(upgrades: Upgrade[], options: SearchEffectsOptions) {
	return upgrades.filter(upgrade => {
		const effects = upgrade.effects;
		let isType = true;
		let isValueType = true;
		let isTarget = true;

		if (options.type) {
			isType = effects.some(effect => effect.type === options.type);
		}
		if (options.value_type) {
			isValueType = effects.some(effect => effect.value_type === options.value_type);
		}
		if (options.target) {
			isTarget = effects.some(effect => effect.target === options.target);
		}
		return isType && isValueType && isTarget;
	});
}

function calculateEffects(upgrades: Upgrade[], defaultValue: number = 0, atomsPerSecond?: number): number {
	const addEffects = upgrades.flatMap(upgrade => upgrade.effects.filter(effect => effect.value_type === 'add'));
	const addEffectsResult = addEffects.reduce(
		(accEffects, effect) => accEffects + effect.value, defaultValue
	);

	const addAPSEffects = upgrades.flatMap(upgrade => upgrade.effects.filter(effect => effect.value_type === 'add_aps'));
	const addAPSEffectsMultiplier = addAPSEffects.reduce(
		(accEffects, effect) => accEffects + effect.value, 0
	);
	const addAPSEffectsResult = atomsPerSecond ? atomsPerSecond * addAPSEffectsMultiplier : 0;

	const multiplyEffects = upgrades.flatMap(upgrade => upgrade.effects.filter(effect => effect.value_type === 'multiply'));
	const multiplyEffectsMultiplier = multiplyEffects.reduce(
		(accEffects, effect) => accEffects * effect.value, 1
	);

	return addEffectsResult * multiplyEffectsMultiplier + addAPSEffectsResult;
}

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
	const globalUpgrades = getUpgradesWithEffects($currentUpgradesBought, { type: 'global'});
	return calculateEffects(globalUpgrades, 1);
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
			const buildingMultiplier = getUpgradesWithEffects($currentUpgradesBought, { target: type, type: 'building' });

			return total + building.count * calculateEffects(buildingMultiplier, building.rate);
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
		const clickUpgrades = getUpgradesWithEffects($currentUpgradesBought, { type: 'click' });

		return calculateEffects(clickUpgrades, 1, $atomsPerSecond) * $globalMultiplier * $bonusMultiplier;
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
				const upgrades = getUpgradesWithEffects($currentUpgradesBought, { target: type, type: 'building' });
				const multiplier = calculateEffects(upgrades, building.rate);
				production = building.count * multiplier * $globalMultiplier * $bonusMultiplier;
			}
			return {
				...acc,
				[type]: production,
			};
		}, {} as Record<BuildingType, number>);
	}
);

export const powerUpInterval = derived(currentUpgradesBought, $currentUpgradeBought => {
	const powerUpIntervalUpgrades = getUpgradesWithEffects($currentUpgradeBought, { type: 'power_up' });
	return POWER_UP_DEFAULT_INTERVAL.map(interval => calculateEffects(powerUpIntervalUpgrades, interval)) as Range;
});

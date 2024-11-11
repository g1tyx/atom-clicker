import type {Upgrade} from '../types';
import {capitalize, formatNumber, shortNumberText} from '../utils';
import {BUILDING_TYPES, BUILDINGS, type BuildingType} from './buildings';

export const SPECIAL_UPGRADES: Upgrade[] = [];

function createBuildingUpgrades(buildingType: BuildingType) {
	const building = BUILDINGS[buildingType];
	const upgrades:  Upgrade[] = [];
	for (let i = 1; i <= 12; i++) {
		const id = `${buildingType.toLowerCase()}_${i}`;
		const value = 1 + Math.ceil(i / 5);
		upgrades.push({
			id,
			name: `${building.name} Boost ${i}`,
			description: `${capitalize(shortNumberText(value))} ${building.name} production`,
			cost: building.cost * 2 ** (i * 2),
			type: 'building',
			target: buildingType,
			value,
		});
	}
	return upgrades;

}

function createClickPowerUpgrades() {
	const upgrades: Upgrade[] = [];
	for (let i = 1; i <= 12; i++) {
		const id = `click_power_mul_${i}`;
		upgrades.push({
			id,
			name: `Click Power ${i}`,
			description: `Double click power`,
			cost: 10 * 2 ** (i * 4),
			type: 'click_mul',
			target: 'click',
			value: 2,
		});
	}

	for (let i = 1; i <= 5; i++) {
		const id = `click_power_val_${i}`;
		const value = Math.ceil(10 ** i / 10);
		upgrades.push({
			id,
			name: `Click Value ${i}`,
			description: `Add ${formatNumber(value)} atoms per click`,
			cost: 10 ** (i * 2) / 2,
			type: 'click_val',
			value,
		});
	}

	for (let i = 1; i <= 5; i++) {
		const id = `click_power_aps_${i}`;
		upgrades.push({
			id,
			name: `Global Click Power ${i}`,
			description: `Gain ${i}% of your Atoms per second per click`,
			cost: 1000 * 2 ** (i * 7),
			type: 'click_aps',
			value: i / 100,
		});
	}
	return upgrades;
}

function createGlobalUpgrades() {
	const upgrades: Upgrade[] = [];
	for (let i = 1; i <= 50; i++) {
		const percentage = Math.ceil(i / 5) * 5;
		const id = `global_boost_${i}`;
		upgrades.push({
			id,
			name: `Global Boost ${i}`,
			description: `Increase all production by ${percentage}%`,
			cost: 10 ** (i * 2) * (i / 8),
			type: 'global',
			value: 1 + percentage / 100,
		});
	}
	return upgrades;
}

function createPowerUpIntervalUpgrades() {
	const upgrades: Upgrade[] = [];
	for (let i = 1; i <= 9; i++) {
		const id = `power_up_interval_${i}`;
		const value = i > 5 ? 0.9 : 0.8;
		upgrades.push({
			id,
			name: `Power Up Interval ${i}`,
			description: `Reduce power up interval by ${Math.round((1 - value) * 100)}%`,
			cost: 10000 * 2 ** (i * 7),
			type: 'power_up_interval_mul',
			value,
		});
	}
	return upgrades;
}

const upgrades= [
	...SPECIAL_UPGRADES,
	...BUILDING_TYPES.map(createBuildingUpgrades).flat(),
	...createClickPowerUpgrades(),
	...createGlobalUpgrades(),
	...createPowerUpIntervalUpgrades(),
];

export const UPGRADES = Object.fromEntries(upgrades.map(upgrade => [upgrade.id, upgrade]));

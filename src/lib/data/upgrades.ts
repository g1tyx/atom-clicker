import type {Effect, GameState, Upgrade} from '../types';
import {capitalize, formatNumber, shortNumberText} from '../utils';
import {BUILDING_TYPES, BUILDINGS, type BuildingType} from './buildings';

export const SPECIAL_UPGRADES: Upgrade[] = [];

interface CreateUpgradesOptions {
	condition?: (state: GameState) => boolean;
	cost: (index: number) => number;
	count: number;
	description: (index: number, effects: Effect[]) => string;
	effects: (index: number) => Effect[];
	id: string;
	name: (index: number) => string;
}

function createUpgrades(options: CreateUpgradesOptions): Upgrade[] {
	const upgrades: Upgrade[] = [];
	for (let i = 1; i <= options.count; i++) {
		const effects = options.effects(i);
		upgrades.push({
			condition: options.condition,
			cost: options.cost(i),
			description: options.description(i, effects),
			effects,
			id: `${options.id}_${i}`,
			name: options.name(i),
		});
	}
	return upgrades;
}

function createBuildingUpgrades(buildingType: BuildingType) {
	const building = BUILDINGS[buildingType];
	return createUpgrades(
		{
			condition: state => state.buildings[buildingType]?.unlocked === true,
			count: 12,
			id: buildingType.toLowerCase(),
			name: i => `${building.name} Boost ${i}`,
			description: (_, effects) => `${capitalize(shortNumberText(effects[0]!.value))} ${building.name} production`,
			cost: i => building.cost * 2 ** (i * 2),
			effects: i => [
				{
					type: 'building',
					value_type: 'multiply',
					target: buildingType,
					value: 1 + Math.ceil(i / 5)
				}
			],
		}
	);

}

function createClickPowerUpgrades() {
	const upgrades: Upgrade[] = [];
	upgrades.push(...createUpgrades(
		{
			count: 12,
			id: 'click_power_mul',
			name: i => `Click Power ${i}`,
			description: () => 'Double click power',
			cost: i => 10 * 2 ** (i * 4),
			effects: () => [
				{
					type: 'click',
					value: 2,
					value_type: 'multiply',
				}
			]
		}
	));

	upgrades.push(...createUpgrades({
		count: 5,
		id: 'click_power_val',
		name: i => `Click Value ${i}`,
		description: i => `Add ${formatNumber(Math.ceil(10 ** i / 10))} atoms per click`,
		cost: i => 10 ** (i * 2) / 2,
		effects: i => [
			{
				type: 'click',
				value_type: 'add',
				value: Math.ceil(10 ** i / 10),
			}
		]
	}));

	upgrades.push(...createUpgrades({
		count: 5,
		id: 'click_power_aps',
		name: i => `Global Click Power ${i}`,
		description: i => `Gain ${i}% of your Atoms per second per click`,
		cost: i => 1000 * 2 ** (i * 7),
		effects: i => [
			{
				type: 'click',
				value_type: 'add_aps',
				value: i / 100,
			}
		]
	}));

	return upgrades;
}

function createGlobalUpgrades() {
	return createUpgrades(
		{
			id: 'global_boost',
			name: i => `Global Boost ${i}`,
			description: i => `Increase all production by ${i}%`,
			cost: i => 10 ** (i * 2),
			count: 20,
			effects: i => [
				{
					type: 'global',
					value_type: 'multiply',
					value: 1 + i / 100,
				}
			]
		}
	);
}

function createPowerUpIntervalUpgrades() {
	return createUpgrades(
		{
			id: 'power_up_interval',
			count: 9,
			name: i => `Power Up Interval ${i + 1}`,
			description: (i, effects) => `Reduce power up interval by ${Math.round((1 - effects[0]!.value) * 100)}%`,
			cost: i => 10_000 * 2 ** (i * 7),
			effects: i => [{
				type: 'power_up',
				value_type: 'multiply',
				value: i > 5 ? 0.9 : 0.8,
			}]
		}
	);
}

const upgrades= [
	...SPECIAL_UPGRADES,
	...BUILDING_TYPES.map(createBuildingUpgrades).flat(),
	...createClickPowerUpgrades(),
	...createGlobalUpgrades(),
	...createPowerUpIntervalUpgrades(),
];

export const UPGRADES = Object.fromEntries(upgrades.map(upgrade => [upgrade.id, upgrade]));

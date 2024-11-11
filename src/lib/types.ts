import type {BuildingType} from './data/buildings';
import type {SAVE_VERSION} from './helpers/saves';

export interface Building {
	count: number;
	cost: number;
	level: number;
	rate: number;
	unlocked: boolean;
}

export interface Upgrade {
	condition?: (state: GameState) => boolean;
	cost: number;
	description: string;
	effects: Effect[];
	id: string;
	name: string;
}

export interface Effect {
	target?: string;
	type: 'building' | 'click' | 'global' | 'power_up';
	value: number;
	value_type: 'add' | 'add_aps' | 'add_ach' | 'multiply';
}

export interface Achievement {
	condition: (state: GameState) => boolean;
	description: string;
	hidden: boolean;
	id: string;
	name: string;
}

export interface PowerUp {
	description: string;
	duration: number;
	id: string;
	multiplier: number;
	name: string;
	startTime: number;
}

export interface GameState {
	achievements: string[];
	activePowerUps: PowerUp[];
	atoms: number;
	buildings: {
		[key in BuildingType]?: Building;
	}
	lastSave: number;
	totalClicks: number;
	upgrades: string[];
	version: typeof SAVE_VERSION;
}

export type Range = [number, number];

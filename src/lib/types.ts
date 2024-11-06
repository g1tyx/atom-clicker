import type {BuildingType} from './data/buildings';

export interface Building {
	count: number;
	cost: number;
	rate: number;
}

export interface Upgrade {
	cost: number;
	description: string;
	id: string;
	name: string;
	target?: string;
	type: 'click_aps' | 'click_mul' | 'click_val' | 'building' | 'global';
	value: number;
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
}

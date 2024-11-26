import {BUILDING_LEVEL_UP_COST, type BuildingType} from '../data/buildings';
import type {Building, GameState} from '../types';

export const SAVE_KEY = 'atomic-clicker-save';
export const SAVE_VERSION = 3;

// Helper functions for state management
export function loadSavedState(): GameState | null {
	try {
		const saved = localStorage.getItem(SAVE_KEY);
		if (saved) {
			const savedState = migrateSavedState(JSON.parse(saved));
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
			Array.isArray,
		],
		[
			'activePowerUps',
			Array.isArray,
		],
		[
			'atoms',
			(v: any) => typeof v === 'number',
		],
		[
			'buildings',
			(v: any) => typeof v === 'object',
		],
		[
			'lastSave',
			(v: any) => typeof v === 'number',
		],
		[
			'totalClicks',
			(v: any) => typeof v === 'number',
		],
		[
			'upgrades',
			Array.isArray,
		],
		[
			'version',
			(v: any) => v === SAVE_VERSION,
		]
	] as const;

	return checks.every(([key, validator]) => key in state && validator(state[key]));
}

function migrateSavedState(savedState: any): GameState | undefined {
	if (!('buildings' in savedState)) return savedState;

	if (!('version' in savedState)) {
		// Migrate from old format
		savedState.buildings = Object.entries(savedState.buildings as Partial<GameState['buildings']>).reduce((acc, [key, value]) => {
			acc[key as BuildingType] = {
				...value,
				unlocked: true,
			};
			return acc;
		}, {} as GameState['buildings']);
	}

	if (savedState.version === 1) {
		// Hard reset due to balancing
		return undefined;
	}

	if (savedState.version === 2) {
		Object.entries<Partial<Building>>(savedState.buildings)?.forEach(([key, building]) => {
			building.level = Math.floor((building.count ?? 0) / BUILDING_LEVEL_UP_COST);
			savedState[key] = building;
		});
		savedState.version = 3;
	}

	return savedState;
}

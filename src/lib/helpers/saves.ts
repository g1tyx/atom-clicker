import type {BuildingType} from '../data/buildings';
import type {GameState} from '../types';

export const SAVE_KEY = 'atomic-clicker-save';

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
	] as const;

	return checks.every(([key, validator]) => key in state && validator(state[key]));
}

function migrateSavedState(savedState: any): GameState {
	if (!('buildings' in savedState)) return savedState;

	// Migrate from old format
	const buildings = Object.entries(savedState.buildings as Partial<GameState['buildings']>).reduce((acc, [key, value]) => {
		acc[key as BuildingType] = {
			...value,
			unlocked: true,
		};
		return acc;
	}, {} as GameState['buildings']);

	return {
		...savedState,
		buildings,
	};
}

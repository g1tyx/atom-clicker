/// <reference types="svelte" />
import type {get} from 'svelte/store';
import type {ACHIEVEMENTS} from './lib/data/achievements';
import type {BUILDINGS} from './lib/data/buildings';
import type {UPGRADES} from './lib/data/upgrades';
import {gameManager} from './lib/stores/gameStore';
/// <reference types="vite/client" />

declare global {
	interface Window {
		gameManager: typeof gameManager;
		ACHIEVEMENTS: typeof ACHIEVEMENTS;
		BUILDINGS: typeof BUILDINGS;
		UPGRADES: typeof UPGRADES;
	}
}

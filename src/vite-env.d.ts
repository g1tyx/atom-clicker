/// <reference types="svelte" />
import {gameManager} from './helpers/gameManager';
import type {ACHIEVEMENTS} from './lib/data/achievements';
import type {BUILDINGS} from './lib/data/buildings';
import type {UPGRADES} from './lib/data/upgrades';
/// <reference types="vite/client" />

declare global {
	interface Window {
		gameManager: typeof gameManager;
		ACHIEVEMENTS: typeof ACHIEVEMENTS;
		BUILDINGS: typeof BUILDINGS;
		UPGRADES: typeof UPGRADES;
	}
}

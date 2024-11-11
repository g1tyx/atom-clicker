import {ACHIEVEMENTS} from './data/achievements';
import {BUILDINGS} from './data/buildings';
import {UPGRADES} from './data/upgrades';
import {gameManager} from './stores/gameStore';

export function setGlobals() {
	window.ACHIEVEMENTS = ACHIEVEMENTS;
	window.BUILDINGS = BUILDINGS;
	window.UPGRADES = UPGRADES;
	window.gameManager = gameManager;
}

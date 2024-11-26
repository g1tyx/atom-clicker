import {gameManager} from './helpers/gameManager';
import {ACHIEVEMENTS} from './data/achievements';
import {BUILDINGS} from './data/buildings';
import {UPGRADES} from './data/upgrades';
import {formatNumber} from './utils';

export function setGlobals() {
	window.ACHIEVEMENTS = ACHIEVEMENTS;
	window.BUILDINGS = BUILDINGS;
	window.UPGRADES = UPGRADES;
	window.gameManager = gameManager;
	window.formatNumber = formatNumber;
}

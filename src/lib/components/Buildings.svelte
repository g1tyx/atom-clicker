<script lang="ts">
	import {gameManager} from '../helpers/gameManager';
	import {type BuildingData, BUILDINGS, type BuildingType} from '../data/buildings';
	import {buildingProductions, atoms, buildings} from '../stores/gameStore';
	import type {Building} from '../types';
	import {formatNumber} from '../utils';
	import {fade} from 'svelte/transition';

	const buildingsEntries = Object.entries(BUILDINGS) as [BuildingType, BuildingData][];

	$: unaffordableBuildings = buildingsEntries.filter(([type, building]) => $atoms < ($buildings[type]?.cost ?? building.cost));
	$: unlockedBuildings = Object.entries($buildings).filter(([,{unlocked}]) => unlocked) as [BuildingType, Building][];
	$: hiddenBuildings = buildingsEntries.filter(([type]) => unlockedBuildings.map(u => u[0]).indexOf(type) === -1 && unaffordableBuildings.map(u => u[0]).indexOf(type) !== -1);

	$: buildingsEntries.filter(([type]) => unlockedBuildings.map(u => u[0]).indexOf(type) === -1 && unaffordableBuildings.map(u => u[0]).indexOf(type) === -1).forEach(([type]) => {
		gameManager.unlockBuilding(type);
	});
</script>

<div class="buildings">
	<h2>Buildings</h2>
	{#each buildingsEntries as [type, building], i}
		{@const saveData = $buildings[type]}
		{@const unaffordable = $atoms < (saveData?.cost ?? building.cost)}
		{@const obfuscated = hiddenBuildings.some(([t]) => t === type)}
		{@const hidden = hiddenBuildings.slice(1).some(([t]) => t === type)}

		<div
			class="building"
			class:disabled={unaffordable}
			on:click={() => {if (!unaffordable) gameManager.purchaseBuilding(type)}}
			transition:fade
			{hidden}
		>
			<div class="info">
				<h3>{obfuscated ? '???' : building.name} {saveData?.count ? `(${saveData.count})` : ''}</h3>
				<p>{saveData && saveData.count > 0 ? 'Producing' : 'Will produce'}: {formatNumber($buildingProductions[type] ?? building.rate)} atoms/s</p>
			</div>
			<div class="cost">
				Cost: {formatNumber(saveData?.cost ?? building.cost)} atoms
			</div>
		</div>
	{/each}
</div>

<style>
	.buildings {
		background: rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(3px);
		border-radius: 8px;
		padding: 1rem;
		grid-area: buildings;
	}

	.building {
		background: rgba(255, 255, 255, 0.05);
		border-radius: 8px;
		cursor: pointer;
		margin-top: 0.5rem;
		padding: 0.75rem;
		transition: all 0.2s;

		&.disabled {
			cursor: not-allowed;
			opacity: 0.5;
		}

		&:hover:not(.disabled) {
			background: rgba(255, 255, 255, 0.1);
		}
	}

	.info h3 {
		color: #4a90e2;
		font-size: 1rem;
		margin: 0;
	}

	.info p {
		font-size: 0.8rem;
		margin: 0.25rem 0;
	}

	.cost {
		color: #4a90e2;
		font-size: 0.9rem;
		margin-top: 0.5rem;
	}
</style>

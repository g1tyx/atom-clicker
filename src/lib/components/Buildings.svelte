<script lang="ts">
	import {type BuildingData, BUILDINGS, type BuildingType} from '../data/buildings';
	import {buildingProductions, atoms, buildings, gameManager} from '../stores/gameStore';
	import {formatNumber} from '../utils';

	const buildingsEntries = Object.entries(BUILDINGS) as [BuildingType, BuildingData][];
</script>

<div class="buildings">
	<h2>Buildings</h2>
	{#each buildingsEntries as [type, building]}
		{@const saveData = $buildings[type]}
		{@const unaffordable = $atoms < (saveData?.cost ?? building.cost)}
		<div
			class="building"
			class:disabled={unaffordable}
			on:click={() => {if (!unaffordable) gameManager.purchaseBuilding(type)}}
		>
			<div class="info">
				<h3>{building.name} {saveData?.count ? `(${saveData.count})` : ''}</h3>
				<p>Producing: {formatNumber($buildingProductions[type] ?? building.rate)} atoms/s</p>
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
		border-radius: 8px;
		padding: 1rem;
	}

	.building {
		background: rgba(255, 255, 255, 0.05);
		border-radius: 8px;
		cursor: pointer;
		margin-top: 0.5rem;
		padding: 0.75rem;
		transition: all 0.2s;
		user-select: none;

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

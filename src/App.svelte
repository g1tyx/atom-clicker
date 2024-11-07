<script lang="ts">
	import {Ticker} from 'pixi.js';
	import Canvas from './lib/components/Canvas.svelte';
	import Toaster from './lib/components/Toaster.svelte';
	import BonusAtom from './lib/components/BonusAtom.svelte';
	import {onDestroy, onMount} from 'svelte';
	import Achievements from './lib/components/Achievements.svelte';
	import Atom from './lib/components/Atom.svelte';
	import Buildings from './lib/components/Buildings.svelte';
	import Counter from './lib/components/Counter.svelte';
	import Upgrades from './lib/components/Upgrades.svelte';
	import {setGlobals} from './lib/globals';
	import {SAVE_KEY} from './lib/helpers/saves';
	import {atomsPerSecond, gameManager} from './lib/stores/gameStore';
	import {app} from './lib/stores/pixi';

	const SAVE_INTERVAL = 1000;
	let activeTab: 'achievements' | 'buildings' | 'upgrades' = 'upgrades';
	let saveLoop: number;
	let mobile = false;

	function update(ticker: Ticker) {
		gameManager.addAtoms($atomsPerSecond * ticker.deltaMS / 1000);
	}

	onMount(async () => {
		mobile = window.innerWidth <= 900;
		gameManager.initialize();

		while (!$app || !$app?.ticker) {
			await new Promise(resolve => setTimeout(resolve, 100));
		}

		$app.ticker.add(update);

		setGlobals();

		// Save game state periodically
		saveLoop = setInterval(() => {
			try {
				localStorage.setItem(SAVE_KEY, JSON.stringify(gameManager.getCurrentState()));
			} catch (e) {
				console.error('Failed to save game:', e);
			}
		}, SAVE_INTERVAL);
	});

	onDestroy(() => {
		if (saveLoop) clearInterval(saveLoop);
	});

	$: mobile && activeTab && $app?.stage && $app?.queueResize();
</script>

<svelte:window on:resize={() => {
	mobile = window.innerWidth <= 900;
}}/>

<main>
	<Canvas/>
	{#if $app === null}
		<h1 class="loading">Loading...</h1>
	{:else}
		<Toaster/>
		<BonusAtom/>
		<div class="game-container">
			<div class="left-panel">
				<div class="tabs">
					<button
						class:active={activeTab === 'upgrades'}
						on:click={() => activeTab = 'upgrades'}
					>
						Upgrades
					</button>
					<button
						class:active={activeTab === 'achievements'}
						on:click={() => activeTab = 'achievements'}
					>
						Achievements
					</button>
					{#if mobile}
						<button
							class:active={activeTab === 'buildings'}
							on:click={() => activeTab = 'buildings'}
						>
							Buildings
						</button>
					{/if}
				</div>
				<div class="tab-content">
					{#if activeTab === 'upgrades'}
						<Upgrades/>
					{:else if activeTab === 'achievements'}
						<Achievements/>
					{:else if activeTab === 'buildings'}
						<Buildings/>
					{/if}
				</div>
			</div>
			<div class="central-area">
				<Counter/>
				<Atom/>
			</div>
			{#if !mobile}
				<Buildings/>
			{/if}
		</div>
	{/if}
</main>

<style>
	main {
		margin: 3rem auto;

		@media screen and (width <= 900px) {
			margin: 0;
		}
	}

	.loading {
		color: white;
		font-size: 3rem;
		text-align: center;
		margin-top: 20vh;
	}

	.game-container {
		display: grid;
		gap: 2rem;
		grid-template-columns: 250px 1fr 250px;
		grid-template-areas: 'upgrades atom buildings';
		margin: 0 auto;
		max-width: 1500px;
		padding: 1rem;

		@media screen and (width <= 900px) {
			grid-template-columns: 1fr 1fr;
			grid-template-areas:
					'upgrades atom'
					'buildings atom';
			max-width: 100%;
		}

		@media screen and (width <= 700px) {
			gap: 1rem;
			grid-template-columns: 1fr;
			grid-template-areas: 'atom' 'upgrades' 'buildings';
		}
	}

	.left-panel {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		grid-area: upgrades;
	}

	.tabs {
		display: flex;
		gap: 0.5rem;
	}

	.tabs button {
		background: rgba(255, 255, 255, 0.05);
		border: none;
		border-radius: 8px;
		color: inherit;
		cursor: pointer;
		flex: 1;
		padding: 0.5rem;
		transition: all 0.2s;
	}

	.tabs button:hover {
		background: rgba(255, 255, 255, 0.1);
	}

	.tabs button.active {
		background: #4a90e2;
		color: white;
	}

	.central-area {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: start;
		position: relative;
		grid-area: atom;
	}

	.tab-content {
		flex: 1;
		overflow-y: auto;
	}
</style>

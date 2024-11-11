<script lang="ts">
	import {onDestroy, onMount} from 'svelte';
	import {fade} from 'svelte/transition';
	import {gameManager} from '../helpers/gameManager';
	import {powerUpInterval} from '../stores/gameStore';
	import type {PowerUp} from '../types';
	import {randomBetween} from '../utils';

	let powerUp = {
		description: 'Double atoms per second for 10 seconds',
		duration: 10000,
		id: Date.now().toString(),
		multiplier: 2,
		name: 'Double Atoms',
		startTime: Date.now(),
	} satisfies PowerUp;

	let x = 0;
	let y = 0;
	let visible = false;
	let messageShown = false;

	function spawnBonusAtom() {
		const margin = 100;

		x = Math.random() * (window.innerWidth - margin * 2) + margin;
		y = Math.random() * (window.innerHeight - margin * 2) + margin;
		visible = true;

		setTimeout(() => visible = false, 30_000);
	}

	function onClick() {
		visible = false;
		messageShown = true;
		gameManager.addPowerUp(powerUp);
		setTimeout(() => gameManager.removePowerUp(powerUp.id), powerUp.duration);
		setTimeout(() => messageShown = false, 3_000);
	}

	function setRandomInterval() {
		timeout = setTimeout(() => {
			spawnBonusAtom();
			setRandomInterval();
		}, randomBetween($powerUpInterval[0], $powerUpInterval[1]));
	}

	let timeout: number;
	onMount(setRandomInterval);

	onDestroy(() => clearTimeout(timeout));
</script>


{#if visible}
	<div class="power-up bonus-atom" on:click|once={onClick} transition:fade={{duration: 1000}} style="left: {x}px; top: {y}px;"/>
{/if}

{#if messageShown}
	<p class="bonus-message" in:fade={{duration: 100}} out:fade={{duration: 400}} style="left: {x}px; top: {y}px;">
		{powerUp.description}
	</p>
{/if}

<style>
	.bonus-atom {
		animation: pulse 1s ease-in-out infinite;
		background: radial-gradient(circle at 30% 30%, #ffd700, #ff6b6b);
		border-radius: 50%;
		cursor: pointer;
		height: 40px;
		position: absolute;
		width: 40px;
		transition: filter 0.2s;
		z-index: 10;

		&:hover {
			animation: none;
			filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.75));
		}
	}

	.bonus-message {
		border-radius: 5px;
		color: white;
		filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
		font-size: 1.1rem;
		font-weight: bold;
		position: absolute;
		text-align: center;
		pointer-events: none;
		transform: translate(-50%, -50%);
		width: 300px;
		z-index: 10;
	}

	@keyframes pulse {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1);
		}
		100% {
			transform: scale(1);
		}
	}
</style>

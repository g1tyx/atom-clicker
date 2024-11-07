<script lang="ts">
	import {BUILDING_TYPES} from '../data/buildings';
	import {onDestroy} from 'svelte';
	import {createClickParticle, createClickTextParticle, type Particle} from '../helpers/particles';
	import {buildings, gameManager, clickPower, hasBonus, totalClicks} from '../stores/gameStore';
	import {formatNumber} from '../utils';
	import {particles} from '../stores/canvas';
	import {fade} from 'svelte/transition';

	let spawnInterval: number;

	async function handleClick(event: MouseEvent) {
		gameManager.addAtoms($clickPower);
		$totalClicks++;

		// TODO: Re-add main atom animation

		const newParticles: Particle[]  = [];
		newParticles.push(createClickTextParticle(event.clientX + Math.random() * 10, event.clientY + Math.random() * 10, `+${formatNumber($clickPower)}`));

		for (let i = 0; i < 5; i++) {
			newParticles.push(await createClickParticle(event.clientX + Math.random() * 10, event.clientY + Math.random() * 10));
		}
		particles.update(current => [...current,...newParticles]);
	}

	onDestroy(() => clearInterval(spawnInterval));
</script>

<div
	class="atom"
	class:bonus={$hasBonus}
	on:click={async (e) => await handleClick(e)}
>
	{#each BUILDING_TYPES.filter(name => name in $buildings) as name, i}
		{@const data = $buildings[name]}

		{#if data && data.count > 0}
			<div class="electron-shell" style="--line: {i}; --count: {data.count};">
				{#each new Array(data.count) as _, j}
					<div class="electron" style="--i: {j};"></div>
				{/each}
			</div>
		{/if}
	{/each}
	<div class="nucleus"></div>
</div>

<style>
	.atom {
		--electron-line-spacing: 50px;
		--initial-electrons-spacing: 130px;
		--nucleus-size: 60px;
		--speed: 1;
		align-items: center;
		background: transparent;
		border: none;
		cursor: pointer;
		display: flex;
		margin-top: 5rem;
		justify-content: center;
		overflow: hidden;
		position: relative;
		transition: transform 0.1s;
		width: 300px;
		height: 300px;
		user-select: none;

		&.bonus {
			--speed: 2;
		}

		@media screen and (width <= 600px) {
			--electron-line-spacing: 30px;
			--initial-electrons-spacing: 100px;
			--nucleus-size: 50px;
			margin-top: 0;
		}
	}

	.nucleus {
		background: radial-gradient(circle at 30% 30%, #4a90e2, #2c3e50);
		border-radius: 50%;
		box-shadow: 0 0 20px rgba(74, 144, 226, 0.5);
		height: var(--nucleus-size);
		width: var(--nucleus-size);
	}

	.electron-shell {
		--radius: calc(var(--initial-electrons-spacing) + var(--line) * var(--electron-line-spacing));
		animation: rotate calc((4s + var(--line) * 2s) / var(--speed)) linear infinite;
		border: 2px solid #4a90e210;
		border-radius: 50%;
		height: var(--radius);
		position: absolute;
		transform: translate(-50%, -50%);
		width: var(--radius);
	}

	.electron {
		--size: max(5px, calc(5px + var(--line) * 1px));
		--offset: calc(var(--line) * 20deg);
		--angle: calc(var(--offset) + (var(--i) / var(--count)) * 360deg);

		/* use angle to calculate position with cosinus and sinus */
		left: calc(50% + var(--radius) / 2 * cos(var(--angle)) - var(--size) / 2);
		top: calc(50% + var(--radius) / 2 * sin(var(--angle)) - var(--size) / 2);

		background: #4a90e2;
		border-radius: 50%;
		box-shadow: 0 0 10px rgba(74, 144, 226, 0.5);
		height: var(--size);
		transition: all 0.5s;
		position: absolute;
		width: var(--size);
	}

	:global(.particle) {
		background: #4a90e2;
		border-radius: 50%;
		height: 8px;
		pointer-events: none;
		position: fixed;
		width: 8px;
	}

	:global(.click) {
		color: white;
		font-size: 0.85rem;
		font-weight: bold;
		pointer-events: none;
		position: fixed;
		transform: translate(-50%, -50%);
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	:global(.bounce) {
		animation: bounce 0.6s ease-in-out;
	}

	@keyframes bounce {
		0% {
			transform: scale(1);
		}
		25% {
			transform: scale(1.025);
		}
		50% {
			transform: scale(0.99);
		}
		75% {
			transform: scale(1.005);
		}
		100% {
			transform: scale(1);
		}
	}
</style>

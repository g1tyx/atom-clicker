<script lang="ts">
	import {gsap} from 'gsap';
	import {onDestroy} from 'svelte';
	import {buildings, gameManager, clickPower, hasBonus, totalClicks} from '../stores/gameStore';
	import {formatNumber} from '../utils';

	let atomElement: HTMLDivElement;
	let spawnInterval: number;

	function createParticle(x: number, y: number) {
		const particle = document.createElement('div');
		particle.className = 'particle';
		particle.style.left = `${x}px`;
		particle.style.top = `${y}px`;
		document.body.appendChild(particle);

		gsap.to(particle, {
			duration: 1,
			x: (Math.random() - 0.5) * 100,
			y: (Math.random() - 0.5) * 100,
			opacity: 0,
			onComplete: () => particle.remove(),
		});
	}

	function createClick(x: number, y: number) {
		const click = document.createElement('p');
		click.className = 'click';
		click.style.left = `${x}px`;
		click.style.top = `${y}px`;
		click.textContent = `+${formatNumber($clickPower)}`;
		document.body.appendChild(click);

		gsap.to(click, {
			duration: 1,
			scale: 1.5,
			y: '-=50',
			opacity: 0,
			onComplete: () => click.remove(),
		});
	}

	let timeout: number;

	function handleClick(event: MouseEvent) {
		gameManager.addAtoms($clickPower);
		$totalClicks++;

		clearTimeout(timeout);
		atomElement.classList.remove('bounce');
		setTimeout(() => atomElement.classList.add('bounce'));
		timeout = setTimeout(() => atomElement.classList.remove('bounce'), 600);

		createClick(event.clientX, event.clientY);
		for (let i = 0; i < 5; i++) {
			createParticle(event.clientX, event.clientY);
		}
	}

	onDestroy(() => clearInterval(spawnInterval));
</script>

<div
	bind:this={atomElement}
	class="atom"
	class:bonus={$hasBonus}
	on:click={handleClick}
>
	{#each Object.entries($buildings) as [name, data], i}
		<div class="electron-shell" style="--line: {i}; --count: {data.count};">
			{#each new Array(data.count) as _, j}
				<div class="electron" style="--i: {j};"></div>
			{/each}
		</div>
	{/each}
	<div class="nucleus"></div>
</div>

<style>
	.atom {
		--speed: 1;
		align-items: center;
		background: transparent;
		border: none;
		cursor: pointer;
		display: flex;
		margin-top: 5rem;
		justify-content: center;
		position: relative;
		transition: transform 0.1s;
		width: 300px;
		height: 300px;
		user-select: none;

		&.bonus {
			--speed: 2;
		}
	}

	.nucleus {
		background: radial-gradient(circle at 30% 30%, #4a90e2, #2c3e50);
		border-radius: 50%;
		box-shadow: 0 0 20px rgba(74, 144, 226, 0.5);
		height: 60px;
		width: 60px;
	}

	.electron-shell {
		--radius: calc(130px + var(--line) * 50px);
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

<script lang="ts">
	import { onMount } from 'svelte';
	import { Swipe, SwipeItem } from 'svelte-swipe';
	import type { AnnouncementModel } from '../../model/announcement-model';

	let swipeConfig: any;

	let section;

	let imgCon;

	export let announcements: AnnouncementModel[];
	export let duration: number;
	let carousel; // for calling methods of the carousel instance
	let imageWidth;
	let imageHeight;

	onMount(() => {
		swipeConfig = {
			autoplay: true,
			delay: 4000,
			showIndicators: false,
			transitionDuration: 500,
			defaultIndex: 0
		};
		swipeConfig.delay = duration ? duration * 1000 : 4000;
		// const height = section.clientHeight;
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section
	bind:this={section}
	class="flex flex-row justify-center align-middle items-center h-screen w-full"
>
	{#if announcements && announcements.length > 0 && swipeConfig}
		<Swipe {...swipeConfig}>
			{#each announcements as slide}
				<SwipeItem classes="flex flex-row justify-center items-center w-full">
					<div class="slide flex flex-row justify-start items-start h-3/4 p-10 w-full">
						<div class="img-con w-4/6 min-w-4/6 rounded-3xl" bind:this={imgCon}>
							<img
								src={slide.image_url}
								alt={slide.title}
								class="img rounded-3xl w-full h-full object-cover"
							/>
						</div>
						<div class="slide-text p-10 flex flex-col justify-start h-full items-start w-2/5">
							<h1 class="p-0 m-0 text-8xl text-left text-white mb-10">
								{slide.title}
							</h1>
							<p class="text-white mt-4 text-left">
								{slide.description}
							</p>
						</div>
					</div>
				</SwipeItem>
			{/each}
		</Swipe>
	{/if}
</section>

<style>
	.swipeable-item-inner {
		width: 100%;
	}
	.img-con::before,
	.img::before {
		content: '';
		position: absolute;
		top: -50%;
		left: -50%;
		right: -50%;
		bottom: -50%;
		background: inherit;
		border-radius: 25%;
		z-index: -1;
		filter: blur(20px);
	}

	.img-con::before,
	.img::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: inherit;
		clip-path: polygon(15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%, 0% 50%);
	}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100vh;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.img-con {
		box-shadow: 1px 1px 20px 10px rgba(0, 0, 0, 0.565);
	}

	.slide-text {
		bottom: 0;
		left: 0;
		display: block;
		z-index: 10;
		color: white;
	}

	.slide {
		width: 100%;
		margin: auto;
	}
</style>

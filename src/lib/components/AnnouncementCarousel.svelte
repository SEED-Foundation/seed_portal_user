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
			autoplay: false,
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
				<SwipeItem classes="flex flex-row justify-center items-center w-full h-screen">
					<div class="slide flex flex-row justify-start items-start w-full h-5/6">
						<div class="  p-10 flex justify-center items-center h-full" bind:this={imgCon}>
							<div class="img-con rounded-3xl w-full h-full">
								<img
									src={slide.image_url}
									alt={slide.title}
									class="img rounded-3xl w-full h-full object-cover"
								/>
							</div>
						</div>
						<div
							class="slide-text text-con flex py-10 flex-col justify-center items-center overflow-hidden"
						>
							<div class="title text-left text-white">
								{slide.title}
							</div>

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
	.text-con {
		display: inline-block;
		padding-left: 1vw;
		padding-right: 1vw;
	}
	.title {
		font-size: 4.2vw;
		display: block;
		line-height: normal;
	}
	.swipeable-item-inner {
		width: 100%;
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

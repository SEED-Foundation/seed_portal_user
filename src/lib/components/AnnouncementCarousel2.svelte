<!-- <script lang="ts">
	import Reveal from 'reveal.js';
	import Markdown from 'reveal.js/plugin/markdown/markdown';
	import Highlight from 'reveal.js/plugin/highlight/highlight';
	import Note from 'reveal.js/plugin/notes/notes';
	import 'reveal.js/dist/reveal.css';
	import 'reveal.js/dist/theme/white.css';
	import 'reveal.js/dist/theme/black.css';
	import 'reveal.js/plugin/highlight/monokai.css';
	import { onMount } from 'svelte';
	import { Swipe, SwipeItem } from 'svelte-swipe';
	import type { AnnouncementModel } from '../model/announcement-model';
	import { CarouselSetting } from '../model/carousel_setting';
	import { fade, fly } from 'svelte/transition';
	import Slides from '$lib/deck/slides.svelte';
	let section;

	let imgCon;

	export let announcements: AnnouncementModel[];
	export let duration: number;
	export let carouselSetting: CarouselSetting;

	onMount(() => {
		const deck = new Reveal({
			autoAnimateEasing: 'ease',
			autoAnimateDuration: 1,
			hash: true,
			controls: true,
			progress: true
		});
		deck.initialize({
			plugins: [Markdown, Highlight, Note],
			markdown: {
				smartypants: true
			}
		});
	});

	let animate = false;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section
	bind:this={section}
	class="flex flex-row justify-center align-middle items-center h-screen w-full relative"
>
	<div class=" absolute top-10 left-10 w-32">
		<img src="/images/seed_logo_white.png" class=" w-full h-full object-cover" />
	</div>
	{#if announcements && announcements.length > 0 && swipeConfig}
		<Swipe {...swipeConfig}>
			{#each announcements as slide}
				<SwipeItem classes="flex flex-row justify-center items-center w-screen h-screen relative">
					<div class="slide flex flex-row justify-start items-start w-screen z-10 relative">
						<div
							style={`width: ${carouselSetting.image_width}; height: ${carouselSetting.image_height}`}
							class={` img-con rounded-3xl  `}
						>
							<img
								src={slide.image_url}
								alt={slide.title}
								class="img rounded-3xl w-full h-full object-cover"
							/>
						</div>
						<div
							style={`width:${carouselSetting.text_width}; height ${carouselSetting.text_height}`}
							class={`slide-text text-con flex py-10 flex-col justify-center items-center overflow-hidden `}
						>
							{#if animate}
								<div
									transition:fly={{
										y: 200,
										delay: 100,
										duration: 500
									}}
									class="title text-left text-white"
								>
									{slide.title}
								</div>
							{/if}
							{#if slide.description_html}
								<p class="text-white mt-4 description text-justify">
									{@html slide.description_html}
								</p>
							{/if}
						</div>
					</div>
					<div class="absolute top-0 right-0 w-screen h-screen cover z-1 background-con">
						<img src={slide.image_url} />
					</div>
				</SwipeItem>
			{/each}
		</Swipe>
	{/if}
</section>

<style>
	.background-con {
		opacity: 0.4;
		filter: blur(30px);
	}
	.text-con {
		display: inline-block;
		padding-left: 1vw;
		padding-right: 1vw;
		margin-bottom: 0.01vw;
	}
	.title {
		font-size: 3vw;
		margin-bottom: 0.6vw;
		display: block;
		line-height: normal;
	}

	.description {
		font-size: 1vw;
		display: block;
		line-height: normal;
		font-weight: 200;
		line-height: 1.5;
		font-family: sans-serif;
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
		box-shadow: 1px 1px 20px 10px rgba(0, 0, 0, 0.565);
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.img-con {
		padding: 0.5vw;
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
		z-index: 100;
	}
</style> -->

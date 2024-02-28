<script lang="ts">
	import type { AnnouncementModel } from '$lib/model/announcement-model';
	import type { CarouselSetting } from '$lib/model/carousel_setting';
	import { fade, fly } from 'svelte/transition';
	import Slide from './slide.svelte';

	export let announcements: AnnouncementModel[];
	export let duration: number;
	export let carouselSetting: CarouselSetting;
	let animate = false;
	console.log(announcements);
</script>

<!-- 
<Slide>Horizontal Slide</Slide>

<Slide>
	<Slide>Vertical Slide 1</Slide>
	<Slide>Vertical Slide 2</Slide>
</Slide> -->
{#each announcements as slide (slide)}
	<Slide animate={true} restart={true}>
		<div class="flex flex-row justify-center items-center h-full">
			<div class="w-1/2 pl-10 pr-10" data-id="box-1">
				<div class="p-0 aspect-4/3">
					<img
						src={slide.image_url}
						class="w-full h-full object-cove max-w-full max-h-full"
						alt="slide image"
					/>
				</div>
			</div>
			<div class="w-1/2 pr-44 box-1" data-id="box-2">
				<div class=" text-justify pb-40">
					<div class="r-fit-text fragment" data-autoslide="1000">{slide.title}</div>
					<div class="r-fit-text fragment" data-autoslide="7000">
						{@html slide.description_html}
					</div>
				</div>
			</div>
		</div>
	</Slide>
{/each}

<!-- <Slide animate={true} restart={true}>
	<ul>
		<li>Svelte ❤️</li>
		<li>React</li>
		<li>Solid</li>
		<li>Vue</li>
	</ul>
</Slide> -->
<style>
	img {
		width: 100% !important;
		height: 100% !important;
		object-fit: cover;
	}
	.title-con {
		font-size: 30vw;
		height: 50%;
		line-height: 0.7;
	}
</style>

<script lang="ts">
	import { onMount } from 'svelte';

	import Reveal from 'reveal.js';
	import Highlight from 'reveal.js/plugin/highlight/highlight';
	import Markdown from 'reveal.js/plugin/markdown/markdown';
	import Notes from 'reveal.js/plugin/notes/notes';

	import 'reveal.js/dist/reveal.css';
	import 'reveal.js/dist/theme/black.css';
	import 'reveal.js/plugin/highlight/monokai.css';

	import Presentation from './presentation.svelte';
	import type { AnnouncementModel } from '$lib/model/announcement-model';
	import { CarouselSetting } from '$lib/model/carousel_setting';
	export let announcements: AnnouncementModel[];
	export let duration: number;
	export let carouselSetting: CarouselSetting;

	onMount(async () => {
		const deck = new Reveal({
			autoAnimateEasing: 'ease',
			autoAnimateDuration: 1,
			hash: false,
			controls: true,
			progress: true,
			autoPlayMedia: true,
			loop: true,
			transition: 'slide',
			autoAnimate: true,

			autoSlide: 5000,
			touch: true
		});

		await deck.initialize({
			embedded: false,
			disableLayout: true,
			plugins: [Markdown, Highlight, Notes]
		});
		// var doc = document.querySelector('.slides')! as HTMLElement;
		// doc.style.width = '100%';
		// Reveal.layout();
	});
</script>

<div class="reveal" style="height:100vh;w-full">
	<div class="slides" style="height:100vh">
		<Presentation {announcements} {duration} {carouselSetting} />
	</div>
</div>

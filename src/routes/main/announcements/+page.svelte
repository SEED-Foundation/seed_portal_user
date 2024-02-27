<script lang="ts">
	import { onMount } from 'svelte';
	import { announcementState } from '../../../stores/announcement';
	import AnnouncementCarousel from '$lib/components/AnnouncementCarousel.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import Error from '$lib/components/Error.svelte';
	import Slides from '$lib/decks/slides.svelte';
	import { CarouselSetting } from '$lib/model/carousel_setting';
	let carouselSetting = new CarouselSetting({
		duration: 10,
		image_width: '55vw',
		image_height: '40vw',
		text_width: '45vw',
		text_height: '45vw'
	});
	onMount(() => {
		announcementState.get();
	});
</script>

{#if $announcementState.loading}
	<Loading />
{:else if $announcementState.error}
	<Error />
{:else if $announcementState.announcements && $announcementState.duration}
	<Slides
		announcements={$announcementState.announcements}
		{carouselSetting}
		duration={$announcementState.duration}
	></Slides>
{:else}
	<div>Nothing to show</div>
{/if}

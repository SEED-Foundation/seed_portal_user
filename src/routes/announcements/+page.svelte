<script lang="ts">
	import { onMount } from 'svelte';
	import { announcementState } from '../../stores/announcement';
	import AnnouncementCarousel from '$lib/components/AnnouncementCarousel.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import Error from '$lib/components/Error.svelte';
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

<main>
	{#if $announcementState.loading}
		<Loading />
	{:else if $announcementState.error}
		<div>{$announcementState.error.message}</div>
		<Error />
	{:else if $announcementState.announcements && $announcementState.duration}
		<AnnouncementCarousel
			{carouselSetting}
			announcements={$announcementState.announcements}
			duration={$announcementState.duration}
		></AnnouncementCarousel>
	{:else}
		<div>Nothing to show</div>
	{/if}
</main>

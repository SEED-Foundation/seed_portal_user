<script lang="ts">
	import { onMount } from 'svelte';
	import AnnouncementCarousel from '$lib/components/AnnouncementCarousel.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import Error from '$lib/components/Error.svelte';
	import { CarouselSetting } from '$lib/model/carousel_setting';
	import { announcementTVState } from '../../stores/announcement_tv';
	import Slides from '$lib/decks/slides.svelte';

	let carouselSetting = new CarouselSetting({
		duration: 10,
		image_width: '55vw',
		image_height: '40vw',
		text_width: '45vw',
		text_height: '45vw'
	});

	onMount(() => {
		announcementTVState.get();
	});
</script>

<main>
	{#if $announcementTVState.loading}
		<Loading />
	{:else if $announcementTVState.error}
		<div>{$announcementTVState.error.message}</div>
		<Error />
	{:else if $announcementTVState.announcementsTV}
		<Slides announcements={$announcementTVState.announcementsTV} {carouselSetting} duration={20}
		></Slides>
	{:else}
		<div>Nothing to show</div>
	{/if}
</main>
<div class="absolute top-10 left-10">
	<img src="/images/seed_logo_white.png" class="p-0 w-[10%]" />
</div>

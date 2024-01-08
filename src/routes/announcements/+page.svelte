<script lang="ts">
	import { onMount } from 'svelte';
	import { announcementState } from '../../stores/announcement';
	import AnnouncementCarousel from '$lib/components/AnnouncementCarousel.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import Error from '$lib/components/Error.svelte';

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
			announcements={$announcementState.announcements}
			duration={$announcementState.duration}
		></AnnouncementCarousel>
	{:else}
		<div>Nothing to show</div>
	{/if}
</main>

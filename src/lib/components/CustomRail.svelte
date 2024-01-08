<script lang="ts">
	import { seed_white_logo } from '$lib/images';
	import { AppRail, AppRailAnchor, AppRailTile } from '@skeletonlabs/skeleton';
	let currentTile: number = 0;
</script>

<AppRail width="w-48">
	<svelte:fragment slot="lead">
		<AppRailAnchor href="/main/announcements"
			><img src={seed_white_logo} class="p-4" /></AppRailAnchor
		>
	</svelte:fragment>
	<!-- --- -->
	<AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>Tile 1</span>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>Tile 2</span>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>Tile 3</span>
	</AppRailTile>
	<!-- --- -->
	<svelte:fragment slot="trail">
		<AppRailAnchor href="/" target="_blank" title="Account">(icon)</AppRailAnchor>
	</svelte:fragment>
</AppRail>

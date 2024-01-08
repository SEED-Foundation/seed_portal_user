<script lang="ts">
	import CustomAppbar from '$lib/components/CustomAppbar.svelte';
	import CustomRail from '$lib/components/CustomRail.svelte';
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<!-- <svelte:fragment slot="header">
		<CustomAppbar></CustomAppbar>
	</svelte:fragment> -->
	<svelte:fragment slot="sidebarLeft">
		<CustomRail></CustomRail>
	</svelte:fragment>
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<!-- (footer) -->
</AppShell>

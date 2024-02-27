<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { seed_white_logo } from '$lib/images';
	import {
		AppRail,
		AppRailAnchor,
		AppRailTile,
		TreeView,
		TreeViewItem
	} from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	let currentTile: number = 0;
	let selectedTab: string | undefined | null;

	onMount(() => {});
	$: {
		selectedTab = $page.url.pathname;
		console.log('selectedTab', $page);
	}

	function goToPage(page: string) {
		goto(page);
	}

	const rountes = [
		{
			path: '/main/announcements',
			title: 'Announcements'
		},
		{
			path: '/main/operations',
			title: 'Operations',
			children: [
				{
					path: '/main/operations/it',
					title: 'IT'
				},
				{
					path: '/main/operations/hr',
					title: 'HR'
				}
			]
		}
	];
</script>

<AppRail width="w-[13vw]" background=" bg-transparent relative  left-0 z-20  " height="h-screen">
	<svelte:fragment slot="lead">
		<AppRailAnchor><img src={seed_white_logo} class="p-4" /></AppRailAnchor>
	</svelte:fragment>

	<div class="px-4">
		<TreeView>
			{#each rountes as route}
				{#if route.children}
					<TreeViewItem checked={true}>
						{route.title}
						<svelte:fragment slot="children">
							{#each route.children as child}
								<TreeViewItem
									class="{selectedTab == child.path ? 'bg-primary-600' : ''}  rounded-xl "
									on:click={() => goto(child.path)}>{child.title}</TreeViewItem
								>
							{/each}
						</svelte:fragment>
					</TreeViewItem>
				{:else}
					<TreeViewItem
						class="{selectedTab == route.path ? 'bg-primary-600' : ''}  rounded-xl "
						on:click={() => goto(route.path)}>{route.title}</TreeViewItem
					>
				{/if}
			{/each}
			<!-- <TreeViewItem
				class="{selectedTab == '/main/announcements' ? 'bg-primary-600' : ''}  rounded-xl "
				hideLead={true}
				on:click={() => goto('/main/announcements')}>Announcements</TreeViewItem
			>
			<TreeViewItem checked={true}>
				Operations
				<svelte:fragment slot="children">
					<TreeViewItem
						class="{selectedTab == '/main/operations/it' ? 'bg-primary-600' : ''}  rounded-xl "
						on:click={() => goto('/main/operations/it')}>IT</TreeViewItem
					>
					<TreeViewItem
						class="{selectedTab == '/main/operations/hr' ? 'bg-primary-600' : ''}  rounded-xl "
						on:click={() => goto('/main/operations/hr')}>HR</TreeViewItem
					>
				</svelte:fragment>
			</TreeViewItem>
			<TreeViewItem>(item 2)</TreeViewItem> -->
		</TreeView>
	</div>
	<!-- --- -->
</AppRail>
<div class="w-[13vw] z-0 bg-con left-0 absolute top-0 h-screen"></div>

<style>
	.bg-con {
		background: var(--glass-background);
		backdrop-filter: var(--glass-blur);
		-webkit-backdrop-filter: var(--glass-blur);
		border-right: 1px solid var(--glass-border-color);
	}
</style>

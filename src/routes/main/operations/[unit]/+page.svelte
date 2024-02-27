<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	let pageTitle = '';
	onMount(() => {});
	$: {
		pageTitle = $page.params.unit;
	}
</script>

<section class="px-4 py-6 flex flex-col items-center m-auto">
	<h1 class="text-4xl font-bold">{pageTitle.toUpperCase()}</h1>
	<div class="p-0 w-1/3 fixed top-20 flex flex-row justify-between border rounded-xl h-14 bg-con">
		<div class=" flex flex-row justify-between w-full px-8 items-center align-middle h-full">
			<div class="cursor-pointer">Home</div>
			<div class="cursor-pointer">Home</div>
			<div class="cursor-pointer">Home</div>
		</div>
	</div>
</section>

<style>
	.bg-con {
		background: rgba(255, 255, 255, 0.228);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		border: 1px solid rgba(255, 255, 255, 0.3);
	}
	section {
		background: transparent;
	}
</style>

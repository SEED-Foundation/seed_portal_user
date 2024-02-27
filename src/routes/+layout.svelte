<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.postcss';
	import '../app.css';
	import { appwriteAccount } from '$lib/appwrite-config';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { updateState } from '../stores/update-store';
	import Loading from '$lib/components/Loading.svelte';
	import { authStore } from '../stores/auth-store';
	onMount(async () => {
		updateState.listentToUpdate();
		try {
			const user = await appwriteAccount.get();
			console.log('user', user);
			if (user) {
				// navigate to the intended page

				// if there is route error
				if ($page.error) {
					goto('/main');
					return;
				}

				const currentUrl = $page.url;
				if (currentUrl.pathname === '/auth') {
					goto('/main/announcements');
					return;
				}
				goto(currentUrl);
				return;
			} else {
				goto('/auth');
			}
		} catch (error) {
			goto('/auth');
		}
	});
</script>

{#if $updateState.loading}
	<Loading></Loading>
{:else}
	<slot />
{/if}

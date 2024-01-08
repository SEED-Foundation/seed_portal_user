<script>
	import { authStore } from '../../stores/auth-store';

	async function onLogin() {
		const result = await authStore.login();
	}
</script>

<section class="flex flex-col justify-center items-center h-screen">
	<button on:click={onLogin} type="button" class="btn variant-filled">
		<span class="google-icon" />
		<span>Login with Google</span>
	</button>
</section>

<style>
	.google-icon {
		width: 20px;
		height: 20px;
		background-image: url($lib/icons/google.svg);
		background-size: contain;
		background-repeat: no-repeat;
	}
</style>

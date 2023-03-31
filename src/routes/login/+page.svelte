<script>
	export let form;
</script>

<form method="POST" action="?/login">
	<input type="email" name="email">
	<input type="password" name="password">
	<button>Login</button>
</form>

{#if form?.notVerified}
	Please verify your email.
{/if}

<style>
</style>

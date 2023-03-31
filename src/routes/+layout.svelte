<script>
	export let data;
</script>

<nav>
	<a href="/">Home</a>
	{ #if !data.user}
		<a href="/login">Login</a>
		<a href="/register">Register</a>
	{:else}
		{data.user.username}
		<form action="/logout" method="POST">
			<button type="submit">Logout</button>
		</form>
	{/if}
</nav>

<slot></slot>

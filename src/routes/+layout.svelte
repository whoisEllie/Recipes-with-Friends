<script>
	import { getImageURL } from '$lib/utils'
	import dotenv from 'dotenv'

	dotenv.config()
	let { URL } = process.env

	export let data;
</script>

<nav class="navBar">
	<a href="/">Recipes with Friends</a>
	<div class="rightNavBar">
		{#if !data.user}
			<form action="/login">
				<button type="submit">Login</button>
			</form>
			<form action="/register">
				<button type="submit">Register</button>
			</form>
		{:else}
			<form action="/logout" method="POST">
				<button type="submit">Logout</button>
			</form>
			<img class="pfp" src={data.user?.avatar ? getImageURL(data.user?.collectionId, data.user?.id, data.user?.avatar) : `${URL}/_/images/avatars/avatar0.svg`} alt="profile" width="48px" height="48px">
		{/if}
	</div>
</nav>

<slot></slot>

<style>

	:global(body) { /* this will apply to <body> */ margin: 0; padding: 0; }

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	@font-face {
		font-family: 'Chillax-Variable';
		src: url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Variable.woff2') format('woff2'),
				 url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Variable.woff') format('woff'),
				 url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Variable.ttf') format('truetype');
				 font-weight: 200 700;
				 font-display: swap;
				 font-style: normal;
	}
	@font-face {
		font-family: 'Chillax-Extralight';
		src: url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Extralight.woff2') format('woff2'),
				 url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Extralight.woff') format('woff'),
				 url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Extralight.ttf') format('truetype');
				 font-weight: 200;
				 font-display: swap;
				 font-style: normal;
	}
	@font-face {
		font-family: 'Chillax-Light';
		src: url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Light.woff2') format('woff2'),
				 url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Light.woff') format('woff'),
				 url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Light.ttf') format('truetype');
				 font-weight: 300;
				 font-display: swap;
				 font-style: normal;
	}
	@font-face {
		font-family: 'Chillax-Regular';
		src: url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Regular.woff2') format('woff2'),
				 url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Regular.woff') format('woff'),
				 url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Regular.ttf') format('truetype');
				 font-weight: 400;
				 font-display: swap;
				 font-style: normal;
	}
	@font-face {
		font-family: 'Chillax-Medium';
		src: url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Medium.woff2') format('woff2'),
				 url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Medium.woff') format('woff'),
				 url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Medium.ttf') format('truetype');
				 font-weight: 500;
				 font-display: swap;
				 font-style: normal;
	}
	@font-face {
		font-family: 'Chillax-Semibold';
		src: url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Semibold.woff2') format('woff2'),
				 url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Semibold.woff') format('woff'),
				 url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Semibold.ttf') format('truetype');
				 font-weight: 600;
				 font-display: swap;
				 font-style: normal;
	}
	@font-face {
		font-family: 'Chillax-Bold';
		src: url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Bold.woff2') format('woff2'),
				 url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Bold.woff') format('woff'),
				 url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Bold.ttf') format('truetype');
				 font-weight: 700;
				 font-display: swap;
				 font-style: normal;
	}

	.navBar {
		height: 64px;
		display: flex;
		background-color: #FFFCF7;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.navBar form {
		padding: 5px;
	}

	.navBar button {
		padding: 5px 15px;
		border-radius: 15px;
		border: 3px black solid;
		font-family: Chillax;
		font-weight: 450;
		font-size: 1.25rem;
		cursor: pointer;
		background-color: #FFC694;
		-webkit-transition: box-shadow 200ms ease-in-out, -webkit-transform 200ms ease-in-out;
  	transition: box-shadow 200ms ease-in-out, -webkit-transform 200ms ease-in-out;
  	transition: box-shadow 200ms ease-in-out, transform 200ms ease-in-out;
  	transition: box-shadow 200ms ease-in-out, transform 200ms ease-in-out, -webkit-transform 200ms ease-in-out;
	}

	.navBar a {
		padding: 8px 15px;
		font-family: Chillax;
		font-weight: 450;
		font-size: 2rem;
		cursor: pointer;
		border: none;
		color: black;
		text-decoration: none;
	}

	.navBar button:hover {
		box-shadow: 4px 4px 0 0 #000;
		-webkit-transform: translate(-4px, -4px);
  	-ms-transform: translate(-4px, -4px);
  	transform: translate(-4px, -4px);
	}

	.rightNavBar {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.pfp {
		margin: 15px;
		border-radius: 100%;
		border: 3px black solid;
	}

</style>

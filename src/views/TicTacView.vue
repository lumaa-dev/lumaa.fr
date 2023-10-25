<template>
	<meta
		style="display: none"
		name="apple-itunes-app"
		content="app-id=6468402716"
	/>
	<div class="ios">
		<div class="app">
			<img src="../assets/tictac/icon.png" alt="TicTac App icon" />
			<h1>TicTac</h1>
			<p class="caption">
				{{ $t("content.tictac.caption") }}
			</p>
		</div>
		<div class="h-gallery">
			<img src="../assets/tictac/welcome.png" />
			<img src="../assets/tictac/reminders.png" />
			<img src="../assets/tictac/countdowns.png" />
			<img src="../assets/tictac/tasks.png" />
			<img src="../assets/tictac/dynamic_island.png" />
		</div>
		<p>
			{{ $t("content.tictac.description.one") }}
			<a href="https://support.apple.com/fr-fr/guide/iphone/iph28f50d10d/ios">{{
				$t("content.tictac.description.dynamicIsland")
			}}</a
			>{{ $t("content.tictac.description.two") }}
			<a href="https://support.apple.com/fr-fr/guide/iphone/iph28f50d10d/ios">{{
				$t("content.tictac.description.dynamicIsland")
			}}</a>
			{{ $t("content.tictac.description.three") }}
		</p>
		<a
			class="appstore"
			href="https://apps.apple.com/fr/app/tictac-g%C3%A9rez-votre-temps/id6468402716"
		>
			<img
				:src="$t('content.tictac.badgeAsset')"
				:alt="$t('content.tictac.download')"
			/>
		</a>
	</div>
</template>

<style scoped>
	.ios {
		font-family: "SF Pro Text", -apple-system, BlinkMacSystemFont, Roboto,
			"Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
			"Segoe UI Emoji", "Segoe UI Symbol";
	}

	.app {
		margin: 0 0 5em 0;
	}

	a {
		text-decoration: none;
		color: rgb(32, 148, 250);
	}

	.appicon,
	.app img {
		border-radius: 17.544%;
		width: 20vw;
		margin: 2vh;
	}

	.app h1,
	.ios .title {
		font-size: 4.5em;
		margin: 10px;
	}

	.ios p {
		font-size: 16px;
		text-align: justify;
		padding: 0 8em;
	}

	.ios .caption {
		text-align: center;
	}

	.h-gallery {
		/* Horizontal Gallery */
		overflow: scroll hidden;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: left;
		margin: 0 0 7em 0;
	}

	.h-gallery img {
		height: 60vh;
		padding: 20px 1em;
	}

	.ios p.appstore {
		font-size: 3em;
		text-align: center;
		padding: 1em 0;
		font-weight: 700;
	}

	.ios .appstore img {
		height: 4em;
		margin: 2em;
	}

	@media screen and (max-width: 900px) {
		.ios p {
			font-size: 16px;
			text-align: justify;
			padding: 0 4vh;
		}

		.appicon,
		.app img {
			width: 40vw;
		}
	}
</style>

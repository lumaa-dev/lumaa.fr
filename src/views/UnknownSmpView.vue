<template>
	<div class="unknownsmp">
		<img src="../assets/usmp_blue.png" />
	</div>
	<div class="centerize">
		<p class="sep body">{{ $t("content.usmp.body") }}</p>
	</div>
	<h2>{{ $t("content.usmp.socials") }}</h2>
	<div class="links">
		<a href="https://youtube.com/@unknownsmp">YouTube</a>
		<a href="https://instagram.com/unknown_smp_">Instagram</a>
		<a href="https://tiktok.com/@_unknownsmp_">TikTok</a>
		<a href="https://soundcloud.com/unknownsmp">SoundCloud</a>
		<a href="https://modrinth.com/modpack/unknownsmp">Modpack</a>
		<a href="/branding#usmp">Logo</a>
		<a href="https://teaser.lumaa.fr/">Teaser</a>
	</div>
	<h2>Grand Opening</h2>
	<p class="sep">
		The Grand Opening is a one-time in-game event that starts the Unknown SMP
		that happens on November 1st 2023 at 7:30 GMT
    <br />
    This event is exclusively streamed on Twitch at <router-link class="discret" to="/twitch">twitch.tv/lumaa_dev</router-link>.
	</p>
</template>

<script>
	export default {
		head: {
			meta: [
				{
					name: "og:title",
					content:
						"The Unknown SMP is a private Minecraft server half-scripted half-survival, created by Lumaa and Patate Givrée.",
				},
				{ name: "og:type", content: "website" },
				{ name: "og:url", content: "https://lumaa.fr/unknownsmp" },
			],
		},
	};
</script>

<style scoped>
	.unknownsmp {
		background: url(../assets/usmp_bg.png);
		background-position: center;
		padding: 10vh;
	}

	.unknownsmp img {
		border-radius: 50%;
		width: 10em;
		height: 10em;
	}

	.centerize {
		display: flex;
		flex-direction: column;
		width: 100vw;
		align-items: center;
	}

	.body {
		width: 70vw;
	}

	iframe {
		border: none !important;
		outline: none !important;
		pointer-events: none !important;
	}

	/* --- MOBILE --- */

	@media screen and (max-width: 850px) {
		.body {
			width: 95vw;
			padding: 2.5em;
		}

		.unknownsmp img {
			width: 7em;
			height: 7em;
		}
	}
</style>

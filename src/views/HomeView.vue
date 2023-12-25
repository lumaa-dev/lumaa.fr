<template>
	<WarningHeroView
		warning="Testing website"
		v-if="link.includes('localhost')"
	></WarningHeroView>
	<div class="home">
		<h1 class="name"><span class="string">"Lumaa"</span></h1>
		<h2 class="sub">
			<span class="keyword">Text</span>(<span class="string"
				>"Développeur avec la tête vide."</span
			>)
		</h2>
		<div class="sep"></div>
    <img src="../assets/char.png" alt="Lumaa character" />
    <p><span class="keyword">Image</span>(<span class="string"
				>"char.png"</span
			>)</p>
		<div class="sep"></div>
		<p>SwiftUI indie developer since 2022<br />Developer since 2021</p>
    <div class="sep"></div>
    <a href="https://apps.lumaa.fr/">My apps</a>
    <router-link to="/mastodon">Mastodon</router-link>
    <router-link to="/threads">Threads</router-link>
    <router-link to="/github">GitHub</router-link>
    <router-link to="/youtube">YouTube</router-link>
    <router-link to="/twitch">Twitch</router-link>
    <a href="mailto:lumaa@lumaa.fr">lumaa@lumaa.fr</a>
	</div>
</template>

<script>
	import WarningHeroView from "@/components/WarningHeroView.vue";

	export default {
		data() {
			return {
				link: null,
			};
		},
		beforeMount() {
			this.$data.link = window.location.href;
		},
		head: {
			meta: [
				{
					name: "og:title",
					content: "Développeur avec la tête vide.\nLearn more about Lumaa",
				},
				{ name: "og:type", content: "website" },
				{ name: "og:url", content: "https://lumaa.fr/" },
			],
		},
		components: { WarningHeroView },
	};
</script>

<style scoped>
	.name {
		font-size: 2em;
	}

  img {
    width: 70vw;
  }

	.home {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex-wrap: wrap;
		gap: 1vh;
		padding-top: 5vh;
	}
</style>

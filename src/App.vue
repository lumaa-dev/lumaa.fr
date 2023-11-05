<script>
	import ErrorModalView from "@/components/ErrorModalView.vue";

	export default {
		data() {
			return {
				links: [
					{ url: "/", name: "pages.home" },
					{ url: "/tictac", name: "TicTac" },
					{ url: "/unknownsmp", name: "usmp" },
					{ url: "/mods", name: "pages.mods" },
					{ url: "/branding", name: "pages.branding" },
				],
				lang: "",
				langs: [
					{ id: "en", name: "languages.en" },
					{ id: "fr", name: "languages.fr" },
				],
			};
		},
		methods: {
			changeLang(lang) {
				this.lang = lang;
				this.$i18n.locale = lang;
				this.$store.commit("setLang", lang);
				localStorage.setItem("lang", lang);
			},
			loadLang() {
				setTimeout(() => {
					let lang = this.urlLang() || localStorage.getItem("lang") || "en";
					console.log("sel lang " + lang);
					this.lang = lang;
					this.$i18n.locale = lang;
				}, 100);
			},
			urlLang() {
				let l =
					this.$route.query.lang == undefined ? "" : this.$route.query.lang;
				console.log(this.$route.query.lang);
				return l == "fr" || l == "en" ? l : null;
			},
		},
		beforeMount() {
			this.loadLang();
		},
		components: { ErrorModalView },
	};
</script>

<template>
	<ErrorModalView></ErrorModalView>
	<nav>
		<router-link
			v-for="(link, index) in links"
			:key="index"
			v-bind:to="link.url"
			>{{ $t(link.name) }}</router-link
		>
	</nav>
	<div class="content">
		<router-view />
	</div>
	<div class="footer">
		<p>
			{{ $t("footer.copyright").replace("[now]", new Date().getFullYear()) }}
		</p>
		<select @input="(event) => changeLang(event.target.value)">
			<option
				:selected="this.lang == lang.id"
				v-for="(lang, index) in langs"
				:key="index"
				v-bind:value="lang.id"
			>
				{{ $t(lang.name) }}
			</option>
		</select>
	</div>
</template>

<style>
	@font-face {
		font-family: "SourceSans";
		src: url("https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,700;0,800;0,900;1,300;1,400;1,500&display=swap");
	}

	@font-face {
		font-family: "VCR";
		src: url("./assets/VCR_OSD_MONO.ttf");
	}

	:root {
		--background: #000;
		--outline: #1e1e1e;
		--brand: #f8bd4a;
		--bkrm: #222fd5;
		--warn: #ffcc00;

		--font: "SourceSans", sans-serif;
		--vcr: "VCR", monospace;

		--btn-transition: background 150ms ease-out;
	}

	p,
	pre {
		font-size: 1.3em;
		font-family: var(--font);
		max-width: 100vw;
		white-space: pre-wrap;
		word-wrap: break-word;
	}

	p.apd,
	pre.apd {
		padding: 1em;
	}

	select {
		background: none;
		outline: none;
		border: none;
		font-family: var(--font);
		font-size: 16px;
		appearance: unset !important;
		cursor: pointer;
	}

	.sep {
		padding: 5vh;
	}

	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	a[data-styled],
	button[data-styled] {
		border: none;
		font: var(--font);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 5px 20px;
		gap: 10px;
		width: fit-content;
		height: fit-content;
		position: relative;
		background: rgba(30, 30, 30, 0.35);
		border-radius: 20px;
		color: #fff;
		text-decoration: none;
		font-size: 3vh;
		transition: var(--btn-transition);
		cursor: pointer;
	}

	a[data-styled]:hover,
	button[data-styled]:hover,
	a[data-styled]:focus-visible,
	button[data-styled]:focus-visible {
		background: rgba(30, 30, 30, 0.85);
		outline: none !important;
	}

	a.discret,
	b.discret {
		color: var(--brand);
		text-decoration: none;
	}

	.links {
		display: flex;
		height: fit-content;
		width: 100vw;
		justify-content: center;
		padding: 0.75em;
		flex-wrap: wrap;
	}

	.links a {
		padding: 0.5em 1em;
		margin: 2vh 1em 2vh 1em;
		border-radius: 10px;
		background: rgba(130, 130, 130, 0.35);
		height: fit-content;
		color: #fff;
		text-decoration: none;
		font-size: 1.2em;
		font-weight: 700;
		transition: var(--btn-transition);
	}

	.links a:hover,
	.links a:focus-visible {
		background: rgba(130, 130, 130, 0.7);
		outline: none;
	}

	.links[data-titled] {
		flex-direction: column;
		justify-content: initial;
	}

	.links[data-titled] > div {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	:focus-visible {
		transform: scale(1.2);
		outline: var(--outline) solid 1px;
	}

	/* --------------- */

	#app {
		font-family: var(--font);
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #fff;
	}

	body {
		background: var(--background);
	}

	nav {
		padding: 30px;
		margin: 10px;
		height: 81.5px;
		display: flex;
		justify-content: left;
		background: rgba(0, 0, 0, 0.3);
		border: #ffffff5c 1px solid;
		border-radius: 20px;
		position: fixed;
		width: calc(100vw - 20px);
		left: 0;
		z-index: 100;
	}

	nav a {
		font-weight: bold;
		color: #fff;
		padding: 0 2.5vw;
		text-decoration: none;
	}

	nav a.router-link-exact-active {
		color: var(--brand);
	}

	.content {
		padding-top: 13.5vh;
	}

	.footer {
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		background: rgba(0, 0, 0, 0.3);
		color: #ffffff4d;
		padding: 5vh;
		/* margin-top: 5vh; */
	}

	.footer > p {
		text-align: right;
		font-size: 0.8em;
	}

	.footer select {
		color: #ffffff4d;
	}

	/* --- MOBILE --- */

	@media screen and (max-width: 850px) {
		.links {
			flex-direction: column;
		}

		nav {
			position: initial;
			font-size: 0.75em;
			justify-content: space-around;
		}

		.footer {
			flex-direction: column-reverse;
		}

		.footer > p {
			text-align: center;
		}

		.footer select {
			text-align-last: center;
		}

		/* .content {
    padding-top: 0;
  } */

		.sep {
			padding: 0;
		}
	}
</style>

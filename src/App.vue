<script>
	import ErrorModalView from "@/components/ErrorModalView.vue";

	export default {
		data() {
			return {
				links: [
					{ url: "/", name: "pages.home" },
					{ url: "/apps", name: "pages.apps" },
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
		computed: {
			buildDate() {
				return this.$buildDate;
			}
		},
		components: { ErrorModalView },
	};
</script>

<template>
	<ErrorModalView></ErrorModalView>
	<div class="content">
		<router-view />
	</div>
	<div class="footer">
		<p>
			{{
				"/* © Lumaa 2022—[now] | Built on [build] */".replace("[now]", new Date().getFullYear()).replace("[build]", buildDate)
			}}
		</p>
	</div>
</template>

<style>
	@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap");

	@font-face {
		font-family: "SF Mono";
		src: url("./assets/SFMonoRegular.otf");
	}

	:root {
		--background: #000;
		--outline: #1e1e1e;
		--brand: #f8bd4a;
		--bkrm: #222fd5;
		--warn: #ffcc00;

		--x-keyword: #dabaff;
		--x-string: #ff8170;
		--x-view: #acf2e4;
		--x-var: #78c2b3;
		--x-int: #d0bf69;

		--font: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
			Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
		--font-mono: "SF Mono", "Consolas", "JetBrains Mono", monospace;

		--btn-transition: background 150ms ease-out;
	}

	p,
	a:not(p > a),
	pre {
		font-size: 1.3em;
		font-family: var(--font);
		max-width: 100vw;
		white-space: pre-wrap;
		word-wrap: break-word;
	}

	p > a {
		font-family: var(--font);
		max-width: 100vw;
		white-space: pre-wrap;
		word-wrap: break-word;
	}

	a.br,
	button.br {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		background: var(--background);
		color: #fff;
		aspect-ratio: 250 / 52.3;
		width: 360px;
		max-width: 360px;
		max-height: 75px;
		outline: none;
		border-radius: 15px;
		border: solid 3px #fff;
		text-decoration: none !important;
		text-align: left;
		cursor: pointer;
		transition: 0.25s all;
	}

	a.br > .labels,
	button.br > .labels {
		margin: 0 1em;
		max-width: 250px;
		text-align: left;
	}

	a.br .label,
	button.br .label {
		font-size: 2vh;
		font-weight: 700;
		max-width: 250px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}

	a.br .sublabel,
	button.br .sublabel {
		font-size: 1.3vh;
		font-weight: 400;
		max-width: 250px;
		opacity: 0.7;
	}

	a.br > .label, a.br > .sublabel {
		margin: 0 1em;
	}

	a.br::after,
	button.br::after {
		content: "";
		background-image: url("./assets/hero/uni_play_white.svg");
		background-size: 33px;
		aspect-ratio: 10 / 11.33;
		display: block;
		height: 37px;
		max-width: 33px;
		max-height: 37px;
		margin: 0 1.25em 0 0;
		filter: invert(0);
		transition: 0.25s all;
	}

	a.br:hover,
	button.br:hover {
		color: var(--background);
		background: #fff;
		border: solid 3px #fff;
	}

	a.br:hover::after,
	button.br:hover::after {
		filter: invert(1);
	}

	p.apd,
	a.apd,
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
		font-weight: 700;
	}

	a,
	button {
		color: #5482ff;
		cursor: pointer;
		text-decoration: none;
	}

	a:hover,
	button:hover {
		text-decoration: underline;
	}

	.keyword {
		color: var(--x-keyword);
	}

	.string {
		color: var(--x-string);
	}

	.int {
		color: var(--x-int);
	}

	.footer {
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		color: #6c7986;
		padding: 5vh;
	}

	.footer > p {
		text-align: right;
		font-size: 0.8em;
		font-family: var(--font-mono);
	}

	img.brand {
		width: 5vw;
	}

	/* --- MOBILE --- */

	@media screen and (max-width: 850px) {
		.mob-hide {
			display: none !important;
		}

		.footer {
			flex-direction: column-reverse;
		}

		.footer > p {
			text-align: center;
		}

		.sep {
			padding: 2.5vh;
		}

		img.brand {
			width: 15vw;
		}
	}
</style>

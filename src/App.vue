<script>
import ErrorModalView from "@/components/ErrorModalView.vue";

export default {
	components: { ErrorModalView },
};
</script>

<template>
	<ErrorModalView></ErrorModalView>
	<div class="content">
		<router-view />
	</div>
	<div class="footer">
		<p
			>/* <router-link to="/copyright#">©</router-link> Lumaa 2022—{{
				new Date().getFullYear()
			}}
			*/
		</p>
	</div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap");

@font-face {
	font-family: "Moderniz";
	src: url("./assets/fonts/Moderniz.otf");
}

@font-face {
	font-family: "Salma";
	src: url("./assets/fonts/SalmaAlfasans-Light.otf");
}

:root {
	--background: #000;
	--outline: #1e1e1e;
	--brand: #f8bd4a;
	--warn: #ffcc00;

	--x-keyword: #dabaff;
	--x-string: #ff8170;
	--x-view: #acf2e4;
	--x-var: #78c2b3;
	--x-int: #d0bf69;

	--font-expanded: "Moderniz", "Salma", system-ui, -apple-system,
		BlinkMacSystemFont, "SF Pro", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
		"Open Sans", "Helvetica Neue", sans-serif;

	--font: "Salma", system-ui, -apple-system, BlinkMacSystemFont, "SF Pro",
		"Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
		sans-serif;

	--font-mono: "JetBrains Mono", "Consolas", monospace;

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
	text-indent: 0;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
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
	background: #00000000;
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
	transition: background 0.25s, filter 0.25s, color 0.25s;
}

a.br > .labels,
button.br > .labels {
	margin: 0 1em;
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

a.br .label img {
	width: 50px;
	margin: 0 18px 0 0;
	border-radius: 22%;
}

a.br .sublabel,
button.br .sublabel {
	font-size: 1.3vh;
	font-weight: 400;
	max-width: 250px;
	opacity: 0.7;
}

a.br > .label,
a.br > .sublabel {
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
	max-width: 100vw;
	overflow: hidden scroll;
}

a:not(:has(*)),
button {
	color: #5482ff;
	cursor: pointer;
	text-decoration: none;
}

a:not(:has(*)):hover,
button:hover {
	text-decoration: underline;
}

a:has(*) {
	color: inherit;
	text-decoration: inherit;
}

.title {
	font-size: 4em;
	font-weight: 900;
	font-family: var(--font-expanded);
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

/* --- MOBILE --- */

@media screen and (max-width: 850px) {
	.title {
		font-size: 9vw;
	}

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

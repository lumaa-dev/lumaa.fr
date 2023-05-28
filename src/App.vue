<script>
import ErrorModalView from '@/components/ErrorModalView.vue'

  export default {
    data() {
        return {
            links: [{ url: "/", name: "pages.home" }, { url: "/unknownsmp", name: "usmp" }, { url: "/mods", name: "pages.mods" }, { url: "/branding", name: "pages.branding" }],
            lang: "",
            langs: [{ id: "en", name: "languages.en" }, { id: "fr", name: "languages.fr" }]
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
            let lang = localStorage.getItem("lang") || "en";
            this.lang = lang;
            this.$i18n.locale = lang;
        }
    },
    beforeMount() {
        this.loadLang();
    },
    components: { ErrorModalView }
}
</script>

<template>
  <ErrorModalView></ErrorModalView>
  <nav>
    <router-link v-for="(link, index) in links" :key="index" v-bind:to=link.url>{{ $t(link.name) }}</router-link>
  </nav>
  <div class="content">
    <router-view/>
  </div>
  <div class="footer">
    <p>{{ $t("footer.copyright").replace("[now]", new Date().getFullYear()) }}</p>
    <select @input="event => changeLang(event.target.value)">
      <option :selected="this.lang == lang.id" v-for="(lang, index) in langs" :key="index" v-bind:value="lang.id">{{ $t(lang.name) }}</option>
    </select>
  </div>
</template>

<style>
@font-face {
  font-family: "Nunito";
  src: url("./assets/Nunito-VariableFont_wght.ttf");
}

@font-face {
  font-family: "VCR";
  src: url("./assets/VCR_OSD_MONO.ttf");
}

:root {
  --background: #353535;
  --outline: #ffffff59;
  --brand: #f8bd4a;
  --bkrm: #222fd5;
  --warn: #ffcc00;

  --font: "Nunito", sans-serif;
  --vcr: "VCR", monospace;

  --btn-transition: background 150ms ease-out;
}

select {
  background: none;
  outline: none;
  border: none;
  font-family: var(--font);
  font-size: 16px;
}

.sep {
  padding: 5vh;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a[data-styled], button[data-styled] {
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

a[data-styled]:hover, button[data-styled]:hover, a[data-styled]:focus-visible, button[data-styled]:focus-visible {
  background: rgba(30, 30, 30, 0.85);
  outline: none !important;
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

.links a:hover, .links a:focus-visible {
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
  margin-top: 5vh;
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

  .content {
    padding-top: 0;
  }

  .sep {
    padding: 0;
  }
}
</style>

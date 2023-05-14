<script>
  export default {
    data() {
      return {
        links: [{ url: "/", name: "pages.home" }, { url: "/unknownsmp", name: "usmp" }, { url: "/mods", name: "pages.mods" }],
        lang: "",
        langs: [{ id: "en", name: "languages.en" }, { id: "fr", name: "languages.fr" }]
      }
    },
    methods: {
      changeLang(lang) {
        this.lang = lang
        this.$i18n.locale = lang
        this.$store.commit("setLang", lang)
        localStorage.setItem("lang", lang)
      },
      loadLang() {
        let lang = localStorage.getItem("lang") || "en"
        this.lang = lang
        this.$i18n.locale = lang
      }
    },
    beforeMount() {
      this.loadLang()
    }
  }
</script>

<template>
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

:root {
  --brand: #f8bd4a;
  --font: "Nunito", sans-serif;
  --background: #353535;
  --outline: rgba(255, 255, 255, 0.35);
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
  transition: background 150ms ease-out;
  cursor: pointer;
}

a[data-styled]:hover, button[data-styled]:hover, a[data-styled]:focus-visible, button[data-styled]:focus-visible {
  background: rgba(30, 30, 30, 0.85);
}

:focus-visible {
  outline: none !important;
  border: 1px solid var(--outline) !important;
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
  display: flex;
  justify-content: left;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  position: fixed;
  width: 100vw;
  left: 0;
  z-index: 999;
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

.footer select {
  color: #ffffff4d;
}
</style>

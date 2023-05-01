<script>
  export default {
    data() {
      return {
        links: [{ url: "/", name: "pages.home" }, { url: "/unknownsmp", name: "usmp" }],
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
:root {
  --brand: #f8bd4a;
  --font: "Nunito", sans-serif;
  --background: #353535;
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

/* --------------- */

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

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

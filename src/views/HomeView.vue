<template>
  <WarningHeroView warning="Testing website" v-if="link.includes('lumaa-dev.github.io') || link.includes('localhost')"></WarningHeroView>
  <div class="home">
    <h1>Lumaa</h1>
    <p class="sub">{{ $t("motto") }}</p>
    <div class="sep"></div>
    <pre class="apd">{{ $t("content.home.description") }}</pre>
    <div class="sep"></div>
    <h2>{{ $t("content.home.socials") }}</h2>
    <div class="links">
      <a href="https://youtube.com/@lumaa_dev">YouTube</a>
      <a href="https://twitch.com/lumaa_dev">Twitch</a>
      <a href="https://instagram.com/lumaa_dev">Instagram</a>
      <a href="https://tiktok.com/@lumaa_dev">TikTok</a>
      <a href="https://github.com/lumaa-dev">GitHub</a>
      <a href="https://modrinth.com/user/Lumaa">Modrinth</a>
      <router-link to="/support">{{ $t("content.home.support") }}</router-link>
      <router-link to="/community">{{ $t("content.home.community") }}</router-link>
    </div>
  </div>
</template>

<script>
import WarningHeroView from '@/components/WarningHeroView.vue';

export default {
  data() {
    return {
      link: null
    }
  },
  beforeMount() {
    this.$data.link = window.location.href;
  },
  head: {
      meta: [
        { name: "og:title", content: "Développeur avec la tête vide.\nLearn more about Lumaa" },
        { name: "og:type", content: "website" },
        { name: "og:image", content: "https://brebond.com/lumaa/assets/pfp.png" },
        { name: "og:url", content: "https://lumaa-dev.github.io/#/home" }
    ]
  },
  components: { WarningHeroView }
}
</script>

<style scoped>
h1 {
  font-size: 3.5em;
}

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
}
</style>
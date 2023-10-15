<template>
  <WarningHeroView warning="Testing website" v-if="link.includes('localhost')"></WarningHeroView>
  <div class="home">
    <h1>Lumaa is rebranding...</h1>
    <p class="sub">{{ $t("motto") }}</p>
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
        { name: "og:url", content: "https://lumaa.fr/" }
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
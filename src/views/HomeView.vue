<template>
  <div class="home">
    <h1>Lumaa</h1>
    <p class="sub">{{ $t("motto") }}</p>
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
<template>
  <div class="unknownsmp">
    <img src="https://brebond.com/lumaa/assets/unknown.png">
  </div>
  <div class="centerize">
    <p class="sep body">{{ $t("content.usmp.body") }}</p>
  </div>
  <h2>{{ $t("content.usmp.socials") }}</h2>
  <div class="links">
    <a href="https://youtube.com/@unknownsmp">YouTube</a>
    <a href="https://instagram.com/unknown_smp_">Instagram</a>
    <a href="https://tiktok.com/@_unknownsmp_">TikTok</a>
    <a href="https://soundcloud.com/unknownsmp">SoundCloud</a>
    <a href="https://modrinth.com/modpack/unknownsmp">Modpack</a>
  </div>
</template>

<style scoped>
.unknownsmp {
  background: url(../assets/usmp_bg.png);
  background-position: center;
  padding: 10vh;
}

.unknownsmp img {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}

.centerize {
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
}

.body {
  width: 70vw;
}

/* --- MOBILE --- */

@media screen and (max-width: 850px) {
  .body {
    width: 95vw;
    padding: 2.5em;
  }

  .unknownsmp img {
    width: 7em;
    height: 7em;
  }
}
</style>

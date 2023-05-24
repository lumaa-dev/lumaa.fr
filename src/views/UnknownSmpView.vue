<template>
  <div class="unknownsmp">
    <img src="https://brebond.com/lumaa/assets/unknown.png">
  </div>
  <div class="centerize">
    <p class="sep body">{{ $t("content.usmp.body") }}</p>
  </div>
  <h1>{{ $t("content.usmp.socials") }}</h1>
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
  width: 10vw;
  height: 10vw;
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

h1 {
  font-size: 1.5vw;
}
</style>

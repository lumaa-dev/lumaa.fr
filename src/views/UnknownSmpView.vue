<template>
  <div class="unknownsmp">
    <img src="https://brebond.com/lumaa/assets/unknown.png">
  </div>
  <p class="sep">{{ $t("content.usmp.body") }}</p>
  <h1>{{ $t("content.usmp.socials") }}</h1>
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

h1 {
  font-size: 1.5vw;
}
</style>

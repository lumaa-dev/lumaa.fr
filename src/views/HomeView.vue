<template>
  <div class="home">
    <h1>Lumaa</h1>
    <p class="sub">{{ $t("motto") }}</p>
    <div class="sep"></div>
    <p>{{  $t("content.home.description") }}</p>
    <router-link v-bind:to="'/redirect?url=https://lumaa.brebond.com/'" data-styled>Site actuel</router-link>
  </div>
</template>

<style scoped>
h1 {
  font-size: 3.5vw;
}

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
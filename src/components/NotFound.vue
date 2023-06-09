<template>
    <div class="notfound">
        <h1>{{ $t("error.notfound.title") }}</h1>
        <h2>{{ $t("error.notfound.subtitle") }}</h2>
        <div class="sep"></div>
        <router-link to="/" data-styled>{{ $t("error.notfound.button") }}</router-link>
    </div>
</template>

<style scoped>
.notfound {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: calc(100vh - 81.5px);
}

a[data-styled] {
    margin-top: 5vh
}
</style>

<script>
export default {
    
}
</script>
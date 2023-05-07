<template>
    <div class="main">
            <img :src="mod.icon_url">
            <div class="v">
                <p class="title">{{ mod.title }}</p>
                <p>{{ mod.downloads }} {{ $t("stats.downloads") }}</p>
                <p>{{ mod.followers }} {{ $t("stats.followers") }}</p>
            </div>
        </div>
</template>

<style scoped>
.main {
    font-family: var(--font);
    box-sizing: border-box;
    background: #1E1E1E;
    border: 1px solid rgba(255, 255, 255, 0.35);
    border-radius: 25px;
    width: 25vw;
    height: fit-content;
    display: flex;
    text-align: right;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin: 10px;
}

.main .v {
    padding: 5px;
    display: flex;
    flex-direction: column;
}

.main img {
    border-radius: 25px;
    width: 150px;
    height: 150px;
}

.main .title {
    font-weight: 800;
    font-size: 3vh;
}
</style>

<script>
    export default {
        props: {
            mod: String
        }
    }
</script>
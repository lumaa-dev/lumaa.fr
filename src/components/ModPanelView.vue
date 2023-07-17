<template>
    <router-link v-bind:to="'/redirect?url=https://modrinth.com/mod/' + mod.id" tabindex="-1">
        <div class="main" tabindex="0">
                <img :src="mod.icon_url != null ? mod.icon_url : 'https://raw.githubusercontent.com/lumaa-dev/LumaaTemplate/master/src/main/resources/assets/template/icon.png'" draggable="false">
                <div class="v">
                    <p class="title">{{ mod.title }}</p>
                    <p>{{ mod.downloads }} {{ $t("stats.downloads") }}</p>
                    <p>{{ mod.followers }} {{ $t("stats.followers") }}</p>
                </div>
        </div>
    </router-link>
</template>

<style scoped>
a {
    color: #fff;
    text-decoration: none !important;
    margin: 10px;
}

.main {
    font-family: var(--font);
    box-sizing: border-box;
    background: #1E1E1E;
    border: 1px solid var(--outline);
    border-radius: 25px;
    width: 35vw;
    height: fit-content;
    display: flex;
    text-align: right;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    position: relative;
    bottom: 0;
    left: 0;
    transition: bottom 0.15s ease-out, background 0.15s ease-out;
    z-index: 1;
}

.main:hover, .main:focus-visible {
    position: relative;
    bottom: 10px;
    left: 0;
    background: #2e2e2e;
    outline: none !important;
}

.main:focus-visible {
    border: 1px solid rgba(255, 255, 255, 0.7) !important;
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
    background: #ffffff1a;
}

.main .title {
    font-weight: 800;
    font-size: 3vh;
}

@media screen and (max-width: 850px) {
    .main {
        width: 90vw;
    }

    .main img {
        width: 5em;
        height: 5em;
        border-radius: 15px;
    }
}
</style>

<script>
    export default {
        props: {
            mod: Object
        }
    }
</script>
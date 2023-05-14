<template>
    <div>
        <h1>{{ $t("content.redirect.redirecting") }}</h1>
        <button data-styled @click="this.goBack">{{ $t("content.redirect.back") }}</button>
    </div>
</template>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 31.4vh);
}

button {
    margin: 5vh;
}
</style>

<script>
    export default {
        data() {
            return {
                timeout: null
            }
        },
        methods: {
            getUrl() {
                return this.$route.query.url;
            },
            safeUrl(url) {
                return url.startsWith("https");
            },
            addSpecialParam(url) {
                if (!url.includes("?")) {
                    return url + "?source=lumaa"
                } else {
                    return url + "&source=lumaa"
                }
            },
            goBack() {
                this.$router.back();
                clearTimeout(this.$data.timeout);
            }
        },
        beforeMount() {
            let url = this.getUrl()
            url = this.addSpecialParam(url)
            if (!this.safeUrl(url) || url.length < 1) url = "/?error=unknown_unsafe_link";

            this.$data.timeout = setTimeout(() => {
                window.location.href = url
            }, 3*1000);
        }
    }
</script>
<template>
    <div>
        <!-- <h1>{{ $t("content.redirect.redirecting") }}</h1>
        <button data-styled @click="this.goBack" v-if="this.lastRoute != ''">{{ $t("content.redirect.back") }}</button> -->
    </div>
</template>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 81.5px);
}

button {
    margin: 5vh;
}
</style>

<script>
    export default {
        data() {
            return {
                timeout: null,
                lastRoute: ""
            }
        },
        methods: {
            getUrl() {
                return this.$route.query.url == undefined ? "" : this.$route.query.url;
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
                this.$router.push(this.lastRoute)
                clearTimeout(this.$data.timeout);
            }
        },
        beforeMount() {
            let url = this.getUrl()
            console.log(url)
            if (url.length < 1 || url == null) this.goBack();
            url = this.addSpecialParam(url)
            if (!this.safeUrl(url) || url.length < 1) url = "/?error=unknown_unsafe_link";

            // this.$data.timeout = setTimeout(() => {
            //     window.location.href = url
            // }, 1.5*1000);
            window.location.href = url
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.lastRoute = from.path;
            })
        }
    }
</script>
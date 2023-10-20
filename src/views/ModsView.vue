<template>
    <div>
        <h1>{{ $t("pages.mods") }}</h1>
    </div>
    <div class="mods">
        <div class="links"><router-link class="x" data-styled :to="'/support'">{{ $t("content.mods.support") }}</router-link></div>
        <ModPanelView v-for="(mod, index) in mods" :key="index" :mod="mod"></ModPanelView>
    </div>
</template>

<style scoped>
.x {
    margin: 5vh;
}

.mods {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>

<script>
import ModPanelView from '@/components/ModPanelView.vue';

export default {
    data() {
        return {
            mods: []
        };
    },
    methods: {
        addMod(mod) {
            this.mods.push(mod);
            this.mods = this.mods.sort((a, b) => b.downloads - a.downloads)
        },
        getMods() {
            const api = "https://api.modrinth.com/v2/user/N7V42jr4/projects";
            var requestOptions = {
                method: "GET",
                redirect: "follow"
            };
            fetch(api, requestOptions)
                .then(response => response.text())
                .then(result => {
                result = JSON.parse(result);
                result.forEach(mod => {
                    if (mod.project_type == "mod") {
                        this.addMod(mod);
                    }
                });
            })
                .catch(error => {
                    console.log("error", error)
                    this.$router.push("/?error=fail_fetch_mods")
                    window.location.reload()
                });
        }
    },
    beforeMount() {
        this.getMods();
    },
    head: {
      meta: [
        { name: "og:title", content: "Look at all the mods published on Modrinth made by Lumaa" },
        { name: "og:type", content: "website" },
        { name: "og:url", content: "https://lumaa.fr/mods" }
    ]
  },
    components: { ModPanelView }
}
</script>
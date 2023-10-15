<template>
    <WarningHeroView warning="Français en cours" v-if="$i18n.locale == 'fr'"></WarningHeroView>
    <div class="middle">
        <h1>Rebranding...</h1>
        <p>{{ $t("content.branding.subtitle") }}</p>
    </div>
    <div class="section">
        <h2>{{ $t("content.branding.sections.colorsFonts") }}</h2>
        <div class="colors" id="colors">
            <div class="color main">
                <p>#f8bd4a</p>
                <p>Nunito</p>
            </div>
            <div class="color bkrm">
                <p>{{ $t("usmp") }}</p>
                <p>#222fd5</p>
                <p>VCR Mono</p>
            </div>
            <div class="color warn">
                <p>Warn</p>
                <p>#ffcc00</p>
            </div>
        </div>
    </div>
    <div class="section">
        <h2>{{ $t("content.branding.sections.logosIcons") }}</h2>
        <div class="images" id="images">
            <p id="lumaa">PNG Lumaa</p>
            <img class="png lumaa" src="../assets/char.png" />
            <br />
            <span class="notice">This logo is free to use, can be altered, scaled, rotated, etc... with no limitations.</span>
            <p id="usmp">{{ $t("usmp") }}</p>
            <div>
                <img src="../assets/usmp_blue.png" draggable="false" />
                <img src="../assets/usmp_transparent.png" draggable="false" />
            </div>
            <p class="notice">The Unknown SMP logo is under copyright of Lumaa 2022-2023.</p>
            <span class="notice">These logos should conform to the following rules: The logo using a blue background should not be altered or rotated in any shape of form. The transparent logo can be tilted, scaled, but it can either have a small white border or no border at all.</span>
            <p id="mods">{{ $t("pages.mods") }}</p>
            <span>All mods icons and logos can be found down below</span>
            <div class="center"><router-link data-styled to="/mods">{{ $t("pages.mods") }}</router-link></div>
            <span class="notice">Legal info will be written later.</span>
        </div>
    </div>
</template>

<script>
import WarningHeroView from '@/components/WarningHeroView.vue';

export default {
  head: {
    meta: [
        { name: "og:title", content: "Développeur avec la tête vide.\nSee all the colors, fonts and images" },
        { name: "og:type", content: "website" },
        { name: "og:url", content: "https://lumaa.fr/branding" }
    ]
  },
  components: { WarningHeroView }
}
</script>

<style scoped>
.middle {
    width: 100vw;
    height: calc(75vh - 13.5vh);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.middle h1 {
    color: var(--brand);
    font-size: 5em;
}

.middle p {
    font-size: 1.5em;
}

.section {
    border-top: rgba(255, 255, 255, 0.15) solid 1px;
}

.section.unbordered {
    border: none;
}

.section h2 {
    margin-top: 5vh;
    font-size: 2em;
    font-weight: 700;
}

.colors {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
}

.color {
    width: 10em;
    height: 10em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 15px;
    margin: 1vw 2.5vw 1vw 2.5vw;
}

.color p {
    font-size: 1.5em;
    font-weight: 800;
}

.color.main {
    background: #f8bd4a;
    color: #fff;
}

.color.bkrm {
    background: var(--bkrm);
    color: #000;
}

.color.bkrm p {
    font-family: var(--vcr);
}

.color.warn {
    background: var(--warn);
}

.images p, .images span {
    margin: 2vw;
}

.images p:not(p.notice) {
    padding-top: 5vh;
}

.images p.notice {
    opacity: 0.5;
}

.images a {
    margin: 2vw;
}

.images span.notice {
    opacity: 0.5;
    font-size: 14px;
}

.images img {
    padding: 1em;
    background: none !important;
    width: 30vw;
}

.images div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100vw;
}
</style>
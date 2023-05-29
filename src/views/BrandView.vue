<template>
    <div class="middle">
        <h1>Lumaa</h1>
        <p>{{ $t("content.branding.subtitle") }}</p>
    </div>
    <div class="section">
        <h2>{{ $t("content.branding.sections.colorsFonts") }}</h2>
        <div class="colors">
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
        <h2>{{ $t("content.branding.sections.soon") }}</h2>
    </div>
</template>

<script>
export default {
    head: {
      meta: [
        { name: "og:title", content: "Développeur avec la tête vide.\nSee all the colors, fonts and images" },
        { name: "og:type", content: "website" },
        { name: "og:image", content: "https://brebond.com/lumaa/assets/pfp.png" },
        { name: "og:url", content: "https://lumaa-dev.github.io/#/home" }
    ]
  },
}
</script>

<style scoped>
.middle {
    width: 100vw;
    height: calc(100vh - 13.5vh);
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
</style>
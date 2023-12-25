<template>
    <div class="notfound">
        <h1><span class="keyword">Error</span>(<span class="int">404</span>)</h1>
        <h2><span class="keyword">fatalError</span>(<span class="string">"Seems like you lost yourself... How?"</span>)</h2>
        <div class="sep"></div>
        <router-link to="/" data-styled></router-link>
    </div>
</template>

<style scoped>
.notfound {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 70vh;
}

a[data-styled] {
    margin-top: 5vh
}
</style>

<script>
export default {
    
}
</script>
<template>
    <div class="warn">
        <div class="scroller">
            <p>{{ warning }}</p>
            <p>{{ warning }}</p>
            <p>{{ warning }}</p>
            <p>{{ warning }}</p>
        </div>
        <div class="scroller two">
            <p>{{ warning }}</p>
            <p>{{ warning }}</p>
            <p>{{ warning }}</p>
            <p>{{ warning }}</p>
        </div>
    </div>
</template>

<style scoped>
.warn {
    padding: 2em;
    background: var(--warn);
    display: flex;
    overflow: hidden;
}

.scroller {
    display: flex;
    gap: 3em;
    animation: scroll 40s linear infinite;
    transform: translateX(100%);
    min-width: 100vw;
    margin: 0 1.5em;
}

.scroller p {
    font-weight: bold;
    font-size: 2em;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* number of lines to show */
            line-clamp: 1; 
    -webkit-box-orient: vertical;
}

@keyframes scroll {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
}


/* --- MOBILE --- */

@media screen and (max-width: 850px) {
    .scroller p {
        overflow: visible;
        font-size: 3vw;
        -webkit-line-clamp: unset; /* number of lines to show */
        line-clamp: unset; 
        -webkit-box-orient: vertical;
    }

    .scroller {
        gap: 1em;
        animation: none;
        transform: translateX(0);
        min-width: 0;
    }

    .scroller.two {
        display: none !important;
    }

    .warn {
        padding: 0.5em;
    }
}
</style>

<script>
    export default {
        props: {
            warning: String
        }
    }
</script>
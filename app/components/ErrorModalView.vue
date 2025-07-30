<template>
    <div v-if="string != ''" :data-closed="closed" class="modal error" @click="closeModal()">
        <div class="content">
            <p><span class="keyword">Error</span>(<span class="string">"{{ $data.string }}"</span>)</p>
            <p class="dismiss">Tap/Click to dismiss</p>
        </div>
    </div>
</template>

<style>

.modal {
  position: fixed;
  background: rgba(60, 60, 60, 0.5);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal.error > .content p {
    font-family: var(--font-mono) !important;
}

.modal > .content {
  background: var(--background);
  padding: 5vh;
  max-width: 60vh;
  border-radius: 15px;
  pointer-events: none;
  transform: scale(1);
}

.modal .dismiss {
    padding-top: 10px;
    color: #aaa;
}

.modal[data-closed="true"] {
  background: transparent;
  transition: 0.15s linear background 0.35s;
  pointer-events: none !important;
}

.modal[data-closed="true"] > .content {
  transition: 0.25s linear transform;
  transform: scale(0);
}
</style>

<script>
    export default {
        data() {
            return {
                string: "",
                closed: false
            }
        },
        methods: {
            getError() {
                let e = this.$route.query.error;
                if (e == null && e == undefined && e == "") {
                    this.$router.push("/");
                    return null
                } else {
                    return e;
                }
            },
            closeModal() {
                this.$data.closed = true;
            }
        },
        beforeMount() {
            setTimeout(() => {
                let e = this.getError();
                if (e != null && e != undefined) {
                    this.$data.string = e;
                }
            }, 50);
        }
    }
</script>
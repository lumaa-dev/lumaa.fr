<template>
    <div v-if="string != ''" :data-closed="closed" class="modal" @click="closeModal()">
        <div class="content">
            <p>{{ $t("error." + $data.string) }}</p>
            <p class="dismiss">{{ $t("components.modal.close") }}</p>
        </div>
    </div>
</template>

<style>
.modal {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal > .content {
  background: var(--background);
  padding: 5vh;
  max-width: 40vh;
  border-radius: 15px;
  pointer-events: none;
  transform: scale(1);
}

.modal .dismiss {
    padding-top: 10px;
    color: #aaa;
}

.modal[data-closed="true"] {
  background: rgba(0, 0, 0, 0);
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
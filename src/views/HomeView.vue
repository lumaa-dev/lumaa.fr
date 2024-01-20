<template>
	<span class="m" v-if="time > 0">
		<span class="title">A new direction</span>
		<vue-countdown :time="time" v-slot="{ days, hours, minutes, seconds }" class="c">
			{{ days }}d, {{ hours }}hrs, {{ minutes }}mins, {{ seconds }}secs
		</vue-countdown>
	</span>
	<img src="../assets/hero/dark_pro-rebrand.jpg" v-if="time <= 0" class="br" draggable="false">
</template>

<script>
	export default {
		data() {
			const now = new Date()
			const count = new Date("February 1, 2023, GMT+0200 14:00:00")
			let rem = count.getTime() - now.getTime()

			if (rem <= 0) {
				setTimeout(() => {
					window.location.href = "https://youtu.be/KV2ytOy7cGU"
				}, 1.5*1000);
			}

			return {
				time: rem,
			};
		},
	};
</script>

<style scoped>
	span {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	span.m {
		height: 85vh;
	}

	.title {
		font-size: 2em;
		padding: 1em;
	}

	.c {
		font-size: 1.75em;
		font-weight: 500;
	}

	.br {
		height: 80vh;
	}
</style>

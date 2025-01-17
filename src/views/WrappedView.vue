<template>
	<div class="sep"></div>
	<span class="flex">
		<img
			src="../assets/hero/icon_white.svg"
			alt="Lumaa icon"
			class="brand"
			draggable="false"
		/>
		<p class="title">Lumaa Wrapped 2025</p>
		<div class="sep"></div>
		<span style="gap: 1em" class="flex">
			<p>
                You might wanna check out later... You know... December 2025...
            </p>
		</span>
	</span>
</template>

<style scoped>
	span.flex {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

    span.flex.row {
        flex-direction: row;
    }

    .newb {
        gap: 35px;
    }

    .newb img {
        height: 250px;
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

	.br:not(a.br, button.br) {
		height: 80vh;
	}
</style>

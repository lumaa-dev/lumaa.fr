<template>
	<div class="sep"></div>
	<span class="flex">
		<img
			src="/assets/lumaa/icon_white.svg"
			alt="Lumaa icon"
			class="worker"
			draggable="false"
		/>
		<p class="special title">© Lumaa 2022-{{ new Date().getFullYear() }}</p>
		<div class="sep"></div>
		<span style="gap: 1em" class="flex">
			<p>Copyrights owned by "Lumaa"</p>
		</span>
		<div class="sep"></div>
		<span style="gap: 1em" class="flex">
			<p class="title">Groups:</p>
			<router-link to="https://github.com/V-Fast" class="br">
				<div class="labels">
					<span class="label">V-Fast</span>
					<span class="sublabel">© V-Fast 2023-{{ new Date().getFullYear() }}</span>
				</div>
			</router-link>
		</span>
		<div class="sep"></div>
        <span style="gap: 1em" class="flex">
			<p class="title">Projects:</p>
			<a href="https://github.com/lumaa-dev/ProboscisKit" class="br">
				<div class="labels">
					<span class="label">ProboscisKit</span>
					<span class="sublabel">© Lumaa 2024</span>
				</div>
			</a>
            <a href="https://github.com/lumaa-dev/DesirePath" class="br">
				<div class="labels">
					<span class="label">Desire Path</span>
					<span class="sublabel">© Lumaa 2024</span>
				</div>
			</a>
			<a href="https://files.lumaa.fr/" class="br">
				<div class="labels">
					<span class="label">Files</span>
					<span class="sublabel">© Lumaa 2025</span>
				</div>
			</a>
            <a href="https://apps.lumaa.fr/legal/copyrights" class="br">
				<div class="labels">
					<span class="label">App Copyrights</span>
				</div>
			</a>
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

span.m {
	height: 85vh;
}

.c {
	font-size: 1.75em;
	font-weight: 500;
}

.special {
	font-size: 2em;
	padding: 2em 0;
}

.worker {
	width: 10%;
}

.br:not(a.br, button.br) {
	height: 80vh;
}
</style>

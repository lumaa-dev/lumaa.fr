<template>
	<div class="sep"></div>
	<span class="flex">
		<img
			src="../assets/hero/icon_white.svg"
			alt="Lumaa icon"
			class="brand"
			draggable="false"
		/>
		<p class="title">© Lumaa 2022-{{ new Date().getFullYear() }}</p>
		<div class="sep"></div>
		<span style="gap: 1em" class="flex">
			<p>Copyrights owned by "Lumaa"</p>
		</span>
		<div class="sep"></div>
		<span style="gap: 1em" class="flex">
			<p class="title">Groups:</p>
			<router-link to="/vfast" class="br">
				<div class="labels">
					<span class="label">
                        © V-Fast 2023-{{ new Date().getFullYear() }}
                    </span>
				</div>
			</router-link>
		</span>
        <span style="gap: 1em" class="flex">
			<p class="title">Projects:</p>
			<router-link to="/vfast" class="br">
				<div class="labels">
					<span class="label">
                        © ProboscisKit 2024-{{ new Date().getFullYear() }}
                    </span>
				</div>
			</router-link>
            <a href="https://github.com/lumaa-dev/DesirePath" class="br">
				<div class="labels">
					<span class="label">© Desire Path 2024</span>
				</div>
			</a>
            <router-link to="/apps" class="br">
				<div class="labels">
					<span class="label">App Copyrights</span>
				</div>
			</router-link>
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

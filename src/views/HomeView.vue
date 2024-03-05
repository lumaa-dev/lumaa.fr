<template>
	<div class="sep"></div>
	<span class="flex">
		<img
			src="../assets/hero/icon_white.svg"
			alt="Lumaa icon"
			class="brand"
			draggable="false"
		/>
		<p class="title">Lumaa</p>
		<div class="sep"></div>
		<span style="gap: 1em" class="flex">
			<p>Indie developer:<br />Swift, Vue, Java, and others</p>
			<p>
				Projects:<br /><a href="https://apps.lumaa.fr/app/threaded">Threaded</a
				>, <a href="https://apps.lumaa.fr/app/byheart">ByHeart</a>...
			</p>
		</span>
		<div class="sep"></div>
		<span style="gap: 1em" class="flex">
			<p class="title">Follow me:</p>
			<a href="https://read.cv/lumaa" class="br"><span class="label">read.cv</span></a>
			<router-link to="/mastodon" class="br"
				><span class="label">Mastodon</span></router-link
			>
			<a href="https://lemmy.world/u/lumaa" class="br"><span class="label">Lemmy</span></a>
			<router-link to="/threads" class="br"
				><span class="label">Threads</span></router-link
			>
			<router-link to="/github" class="br"
				><span class="label">GitHub</span></router-link
			>
			<router-link to="/apps" class="br"
				><span class="label">Apps</span></router-link
			>
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

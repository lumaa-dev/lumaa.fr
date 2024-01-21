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
				Indie projects:<br /><a href="https://apps.lumaa.fr/app/threaded"
					>Threaded</a
				>, <a href="https://apps.lumaa.fr/app/byheart">ByHeart</a>...
			</p>
		</span>
		<div class="sep"></div>
		<iframe
			width="560"
			height="315"
			src="https://www.youtube.com/embed/uE666dV33Vc?si=43AJbRcLuVeAUYK4&amp;controls=0"
			class="mob-hide"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		></iframe>
		<div class="sep"></div>
		<span style="gap: 1em" class="flex">
			<p class="title">Follow me:</p>
			<router-link to="/mastodon" class="br"
				><span class="label">Mastodon</span></router-link
			>
			<router-link to="/threads" class="br"
				><span class="label">Threads</span></router-link
			>
			<router-link to="/github" class="br"
				><span class="label">GitHub</span></router-link
			>
			<router-link to="/youtube" class="br"
				><span class="label">YouTube</span></router-link
			>
			<router-link to="/twitch" class="br"
				><span class="label">Twitch</span></router-link
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

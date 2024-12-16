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
			<p>
				Indie developer since 2021:<br />Swift, JavaScript / Node.JS, Java, and
				others
			</p>
			<p>Proudly French</p>
		</span>
		<div class="sep"></div>
		<router-link to="/wrapped" class="br">
			<div class="labels">
				<span class="label">Wrapped 2024</span>
			</div>
		</router-link>
		<div class="sep"></div>
		<span style="gap: 1em" class="flex">
			<p class="title">My primary projects:</p>
			<a href="https://apps.lumaa.fr/app/bubble" class="br">
				<div class="labels">
					<span class="label">Bubble App</span>
					<span class="sublabel">2023-2024</span>
				</div>
			</a>
			<a href="https://github.com/lumaa-dev/ProboscisKit" class="br">
				<div class="labels">
					<span class="label">ProboscisKit</span>
					<span class="sublabel">2024</span>
				</div>
			</a>
			<a href="https://modrinth.com/mod/backrooms" class="br">
				<div class="labels">
					<span class="label">Backrooms Mod</span>
					<span class="sublabel">2022-2024</span>
				</div>
			</a>
			<a href="https://lumaa.fr/tictac" class="br">
				<div class="labels">
					<span class="label">TicTac App</span>
					<span class="sublabel">2022-2024</span>
				</div>
			</a>
		</span>
		<div class="sep"></div>
		<span style="gap: 1em" class="flex">
			<p class="title">Follow me:</p>
			<router-link to="/mastodon" class="br">
				<div class="labels">
					<span class="label">Mastodon</span>
					<span class="sublabel">@lumaa@techhub.social</span>
				</div>
			</router-link>
			<router-link to="/bluesky" class="br">
				<div class="labels">
					<span class="label">Bluesky</span>
					<span class="sublabel">@lumaa.fr</span>
				</div>
			</router-link>
			<router-link to="/lemmy" class="br">
				<div class="labels">
					<span class="label">Lemmy</span>
					<span class="sublabel">@Lumaa@lemmy.world</span>
				</div>
			</router-link>
			<router-link to="/threads" class="br">
				<div class="labels">
					<span class="label">Threads</span>
					<span class="sublabel">@lumaa_dev</span>
				</div>
			</router-link>
			<router-link to="/github" class="br">
				<div class="labels">
					<span class="label">GitHub</span>
					<span class="sublabel">lumaa_dev</span>
				</div>
			</router-link>
			<router-link to="/apps" class="br">
				<div class="labels">
					<span class="label">Apple Apps</span>
					<span class="sublabel">apps.lumaa.fr</span>
				</div>
			</router-link>
			<router-link to="/youtube" class="br">
				<div class="labels">
					<span class="label">YouTube</span>
					<span class="sublabel">@Lumaa_PRO</span>
				</div>
			</router-link>
			<router-link to="/readcv" class="br">
				<div class="labels">
					<span class="label">read.cv</span>
					<span class="sublabel">read.cv/lumaa</span>
				</div>
			</router-link>
			<router-link to="/substack" class="br">
				<div class="labels">
					<span class="label">Newsletter</span>
					<span class="sublabel">lumaa.substack.com</span>
				</div>
			</router-link>
		</span>
		<div class="sep"></div>
		<span style="gap: 1em" class="flex">
			<p class="title">Other projects:</p>
			<a href="https://github.com/lumaa-dev/NumMemory" class="br">
				<div class="labels">
					<span class="label">NumMemory App</span>
					<span class="sublabel">2024</span>
				</div>
			</a>
			<a href="https://github.com/lumaa-dev/ModrinthApp" class="br">
				<div class="labels">
					<span class="label">Modrinth App</span>
					<span class="sublabel">2023</span>
				</div>
			</a>
			<a href="https://github.com/lumaa-dev/Lockwords" class="br">
				<div class="labels">
					<span class="label">Passwords App</span>
					<span class="sublabel">2023</span>
				</div>
			</a>
			<a href="https://github.com/lumaa-dev/Utils" class="br">
				<div class="labels">
					<span class="label">Utils Bot</span>
					<span class="sublabel">2022-2023</span>
				</div>
			</a>
			<a href="https://github.com/lumaa-dev/Keymey" class="br">
				<div class="labels">
					<span class="label">Keymey Bot</span>
					<span class="sublabel">2021-2023</span>
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

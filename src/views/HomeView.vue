<template>
	<span class="flex">
		<div class="sectionized leftright fill directed">
			<img
				src="../assets/hero/hero_wwdc24.jpg"
				alt="Lumaa icon"
				class="brand"
				draggable="false"
			/>
			<div class="text">
				<p class="title">Lumaa</p>
				<p>Indie developer since 2021<br /><br />iOS Dev, node.js, Swift, Java, TypeScript, CSS, HTML, JavaScript... and hopefully more!</p>
			</div>
		</div>
		<div class="cta sectionized app">
			<div class="rightleft fill directed" id="projects">
				<img src="../assets/projects/rl_filled.png" alt="Record Link app icon" />
				<div class="text">
					<p class="title">Record Link</p>
					<p>Record Link is an upcoming service to link your friends' and family's music streaming services all together in one singular service.<br /><br />Currently in Alpha testing, planned released in 2025 with <a href="https://spotify.com">Spotify</a>® or <a href="https://apple.com/music">Apple Music</a>® integrations</p>
				</div>
			</div>
			<a href="https://apps.lumaa.fr/app/recordlink" class="br">
				<span class="label">Learn more</span>
			</a>
		</div>
		<div class="cta sectionized bubble">
			<div class="leftright fill directed" id="projects">
				<img src="../assets/projects/bubble_heroicon.png" alt="Bubble app icon" />
				<div class="text">
					<p class="title">Bubble</p>
					<p>Bubble is a <a href="https://joinmastodon.org/">Mastodon</a> client that is simple and easy-to-use.<br /><br />It has all the primary Mastodon features for free, and includes Bubble+ for additional features like a Content Filter, Account Metrics, and much more...</p>
				</div>
			</div>
			<a href="https://lumaa.fr/bubble" class="br">
				<span class="label">Learn more</span>
			</a>
		</div>
		
		<div class="cta sectionized app">
			<div class="rightleft fill directed" id="projects">
				<img src="../assets/projects/fraca_herodark.png" alt="Fraca app icon" />
				<div class="text">
					<p class="title">Fraca</p>
					<p>Fraca is a handy app available on all Apple devices, made for Canadians going to France or French people going to Canada.<br /><br />It includes an exchange rate from Euro to Canadian dollars, a tax calculator, and all imperial - metrics conversions.</p>
				</div>
			</div>
			<a href="https://d.lumaa.fr/fraca" class="br">
				<span class="label">View in the App Store</span>
			</a>
		</div>
		<div class="cta sectionized bkrm">
			<div class="leftright fill directed" id="projects">
				<img src="../assets/projects/bkrm_autotransp.png" alt="BackroomsMod app icon" />
				<div class="text">
					<p class="title">Backrooms</p>
					<p>The Backrooms Mod is a Minecraft Fabric mod in 1.21.1, made to add the legendary world of The Backrooms in your Minecraft world.<br /><br />Experience the Level 0's monochromatic yellow wallpaper and buzzing light in an original cubic style...</p>
				</div>
			</div>
			<a href="https://modrinth.com/mod/backrooms" class="br">
				<span class="label">Modrinth</span>
			</a>
		</div>
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
			<router-link to="/substack" class="br">
				<div class="labels">
					<span class="label">Newsletter</span>
					<span class="sublabel">lumaa.substack.com</span>
				</div>
			</router-link>
		</span>
		<div class="sep"></div>
		<span style="gap: 1em" class="flex">
			<p class="title">Older stuff:</p>
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
		font-size: 4em;
		font-weight: 900;
		font-family: var(--font-expanded);
	}

	.c {
		font-size: 1.75em;
		font-weight: 500;
	}

	.br:not(a.br, button.br) {
		height: 80vh;
	}

	.fill {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.fill:not(.cta > .fill) {
		height: 80vh;
	}

	.cta > .fill {
		padding: 24vh 0 14vh 0;
	}

	.directed {
		width: 100vw;
		gap: 10vw;
	}

	.leftright img, .rightleft img {
		width: 350px;
	}

	.leftright .text, .rightleft .text {
		width: 40vw;
	}

	.leftright {
		flex-direction: row;
		text-align: left;
	}

	.rightleft {
		flex-direction: row-reverse;
		text-align: left;
	}

	.sectionized {
		border-bottom: 0.5px solid #ffffff6d;
	}

	.cta {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: calc(24vh - 14vh);
	}

	.bubble {
		background: linear-gradient(to bottom, #222222, #101010);
	}

	.app {
		background: #1c1c1e;
	}

	.bkrm {
		background: linear-gradient(to bottom, #51b3cc, #0094bf);
	}

	@media screen and (max-width: 850px) {
		.title {
			font-size: 9vw;
		}
		.fill:not(.cta > .fill) {
			height: 90vh;
		}

		.cta {
			padding-bottom: 10vh;

		}

		.cta > .fill {
			padding: 6vh 0 8vh 0;
		}

		.rightleft, .leftright {
			flex-direction: column;
		}

		.rightleft img, .leftright img {
			width: 250px;
		}

		.rightleft .text, .leftright .text {
			width: 90vw;
		}
	}
</style>

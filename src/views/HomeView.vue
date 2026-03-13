<template>
	<span class="flex">
		<div class="cta sectionized">
			<div class="leftright fill directed">
				<img
					src="../assets/hero/hero_wwdc24.jpg"
					alt="Lumaa icon"
					class="brand"
					draggable="false" />
				<div class="text">
					<p class="title">Lumaa</p>
					<p
						><b>Founder</b> & Developer -
						<a href="https://apps.lumaa.fr/app/amber">Amber App</a><br /><br />Indie developer since 2021, a lot of active
						projects, most of which are open-source.
					</p>
				</div>
			</div>
			<router-link to="/about" class="br">
				<span class="label">About Me</span>
			</router-link>
		</div>
		<div class="cta sectionized amber">
			<div class="leftright fill directed" id="projects">
				<img
					src="https://apps.lumaa.fr/assets/images/amber/Glass_AmberIcon.png"
					alt="Amber App icon"
					draggable="false" />
				<div class="text">
					<p class="title">Amber</p>
					<p
						>Amber is the upcoming Apple Music revolution. Built in SwiftUI, using MusicKit, by true music passionates.
					</p>
				</div>
			</div>
			<a href="https://apps.lumaa.fr/app/amber" class="br">
				<span class="label">Learn more</span>
			</a>
		</div>
		<div class="cta sectionized cider">
			<div class="rightleft fill directed" id="projects">
				<img
					src="../assets/cider-icon.png"
					alt="Cider icon"
					draggable="false" />
				<div class="text">
					<p class="title">Cider Remote</p>
					<p>
						<a href="https://apps.lumaa.fr/app/remote">Cider Remote</a> is a
						native iOS app used to control a
						<a href="https://cider.sh/">Cider</a> instance seemlessly in
						real-time. Cider Remote was fueled with my
						<a href="https://d.lumaa.fr/remotegit">contributions</a
						>.<br /><br />Lumaa is the Remote Team Lead for Cider Remote since
						May 2025, with full creative control of the app.
					</p>
				</div>
			</div>
			<a href="https://apps.lumaa.fr/app/remote" class="br">
				<span class="label">Learn more</span>
			</a>
		</div>
		<div class="cta sectionized bubble">
			<div class="leftright fill directed" id="projects">
				<img
					src="../assets/projects/bubble_heroicon.png"
					alt="Bubble app icon"
					draggable="false" />
				<div class="text">
					<p class="title">Bubble</p>
					<p
						>Bubble is a <a href="https://joinmastodon.org/">Mastodon</a> client
						that is simple and easy-to-use.<br /><br />It has all the primary
						Mastodon features for free, and includes Bubble+ for additional
						features like a Content Filter, Account Metrics, and much more...
					</p>
				</div>
			</div>
			<a href="https://apps.lumaa.fr/app/bubble" class="br">
				<span class="label">Learn more</span>
			</a>
		</div>
		<div class="cta sectionized bkrm">
			<div class="leftright fill directed" id="projects">
				<img
					src="../assets/projects/bkrm_autotransp.png"
					alt="BackroomsMod app icon"
					draggable="false" />
				<div class="text">
					<p class="title">Backrooms</p>
					<p
						>Find yourself the oldest and well-known Backrooms mod on Modrinth,
						adding the legendary world of The Backrooms in Minecraft.<br /><br />Don't
						get too crazy from the Level 0's buzzing lights, and the entity's
						hums behind the wall next to you...
					</p>
				</div>
			</div>
			<a href="https://modrinth.com/mod/backrooms" class="br">
				<span class="label">Modrinth</span>
			</a>
		</div>
		<div class="sep"></div>
		<span style="gap: 1em" class="flex">
			<p class="title">Follow me:</p>
			<router-link to="/apps" class="br">
				<div class="labels">
					<span class="label">Apple Apps</span>
					<span class="sublabel">apps.lumaa.fr</span>
				</div>
			</router-link>
			<router-link to="/github" class="br">
				<div class="labels">
					<span class="label">GitHub</span>
					<span class="sublabel">lumaa_dev</span>
				</div>
			</router-link>
			<router-link to="/twitter" class="br">
				<div class="labels">
					<span class="label">Twitter</span>
					<span class="sublabel">@lumaa_dev</span>
				</div>
			</router-link>
			<!-- <router-link to="/mastodon" class="br">
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
			</router-link> -->
			<router-link to="/youtube" class="br">
				<div class="labels">
					<span class="label">YouTube</span>
					<span class="sublabel">@lumaa_dev</span>
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
			<a href="https://apps.lumaa.fr/app/remote" class="br">
				<div class="labels">
					<span class="label">Cider Remote App</span>
					<span class="sublabel">2024-2025</span>
				</div>
			</a>
			<a href="https://apps.lumaa.fr/app/tictac" class="br">
				<div class="labels">
					<span class="label">TicTac App</span>
					<span class="sublabel">2024</span>
				</div>
			</a>
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

<script>
export default {
	data() {
		return {
			lastMastodonId: 0, // 114083809081305487
			loading: true,
		};
	},
	beforeMount() {
		// this.getLastMastodon();
	},
	methods: {
		async getLastMastodon() {
			const response = await (
				await fetch(
					"https://techhub.social/api/v1/accounts/109638854597275635/statuses?exclude_replies=true",
				)
			).json((json) => json);
			this.lastMastodonId = response[0].id;
		},
	},
};
</script>

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
	height: 88vh;
}

.cta > .fill {
	padding: 24vh 0 14vh 0;
}

.directed {
	max-width: 100vw;
	gap: 10vw;
}

.leftright img,
.rightleft img {
	width: 350px;
}

.leftright .text,
.rightleft .text {
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
	border: 0.5px solid #ffffff1d;
	width: 95vw;
	border-radius: 35px;
	margin: 1em 0;
}

.cta {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: calc(24vh - 14vh);
}

.amber {
	background: radial-gradient( circle at 10% 20%, #ff9c0b 0px, #fca41f 70px, #f9aa33 150px, #f8ae3f 500px );
	text-shadow: 0px 0px 20px #00000030;
}

.cider {
	background: #0c0a09;
}

.cider a:not(.br) {
	color: #e11d48;
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
	.fill:not(.cta > .fill) {
		height: 90vh;
	}

	.sectionized {
		border: none;
		border-bottom: 0.5px solid #ffffff6d !important;
		width: 100vw;
		border-radius: 0;
		margin: 0;
	}

	.cta {
		padding-bottom: 10vh;
	}

	.cta > .fill {
		padding: 6vh 0 8vh 0;
	}

	.rightleft,
	.leftright {
		flex-direction: column;
	}

	.rightleft img,
	.leftright img {
		width: 250px;
	}

	.rightleft .text,
	.leftright .text {
		width: 90vw;
	}
}
</style>

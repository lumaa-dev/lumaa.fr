<template>
    <span class="flex">
        <div class="sectionized leftright fill directed">
            <img src="../assets/hero/full_black.jpg" alt="Lumaa icon" draggable="false"/>
            <div class="text">
                <div class="title">I'm <b>Lumaa</b></div>
                Developer since 2021, I am a passionate developer in my free time, and a student called <span class="mono">Nathan</span> at others.
            </div>
        </div>
        <div class="box" id="through">
            <div class="title"><b>Through Time</b></div>
			<div class="subtitle">From 2021 to now.</div>
            <div class="period" id="y2021">
                <div class="right">
					<div class="text">
						<div class="title">2021-2022</div>
						<div class="text">My coding journey starts with the username <span class="mono">@_Lumination</span> as a JavaScript developer, more particularly a node.js developer doing Discord bots.
						<br /><br />
						<a href="https://github.com/lumaa-dev/Keymey">Keymey</a> | <a href="https://github.com/lumaa-dev/Guildable">Guildable</a> | <a href="https://github.com/lumaa-dev/lumaa.brebond.com">lumaa.brebond.com</a>
						</div>
					</div>
                    <div class="attachment files">
						<img src="../assets/portfolio/lumi.png" alt="Lumi character" draggable="false"/>
                    </div>
                </div>
            </div>
			<div class="period" id="y2022">
                <div class="left">
					<div class="text">
						<div class="title">2022-2023</div>
						<div class="text">After a 2 hour call, PatateGivrée & _Lumination create <span class="mono">The Backrooms Mod</span>. The currently number 1 Backrooms-related mod in the entire Modrinth platform.</div>
						<br />
						<a href="https://d.lumaa.fr/bkrm">The Backrooms Mod</a> | <a href="https://github.com/V-Fast/BackroomsMod">BackroomsMod GitHub</a>
					</div>
                    <div class="attachment files">
						<img src="../assets/portfolio/bkrm.png" alt="The Backrooms Mod" draggable="false"/>
                    </div>
                </div>
            </div>
			<div class="period" id="y2023">
                <div class="right">
					<div class="text">
						<div class="title">2022-2023</div>
						<div class="text">Along with <span class="mono">The Backrooms Mod</span>, I started making iPhone apps on a virtual Mac such as <span class="mono">Lockwords</span>, and the early versions of <span class="mono">TicTac</span>. This is where I started learning <span class="mono">SwiftUI</span> slowly and easily</div>
						<br />
						<a href="https://github.com/lumaa-dev/Lockwords">Lockwords</a> | <a href="https://apps.lumaa.fr/app/tictac">TicTac: Manage your time</a>
					</div>
                    <div class="attachment files">
						<img src="../assets/portfolio/tictac_v1.png" alt="TicTac app icon" draggable="false"/>
                    </div>
                </div>
            </div>
			<div class="period" id="y2024">
                <div class="left">
					<div class="text">
						<div class="title">2024-NOW</div>
						<div class="text">My <span class="mono">SwiftUI</span> peak. With <span class="mono">Bubble for Mastodon</span>, <span class="mono">Fraca</span> and much more coming later like <span class="mono">WidgAround</span>, <span class="mono">Record Link</span>, <span class="mono">Coli</span> and much much more...</div>
						<br />
						<a href="https://d.lumaa.fr/bubble">Bubble for Mastodon</a> | <a href="https://apps.lumaa.fr/app/fraca">Fraca</a> | <a href="https://apps.lumaa.fr/app/recordlink">Record Link</a> | <a href="https://apps.lumaa.fr/">More apps</a>
					</div>
                    <div class="attachment files">
						<img src="../assets/projects/bubble_heroicon.png" alt="Bubble app icon" draggable="false"/>
                    </div>
                </div>
            </div>
        </div>
		<div id="skills" class="bisectionized rightleft fill directed">
			<img src="../assets/hero/hero_wwdc24.jpg" alt="WWDC24 special icon" draggable="false"/>
			<div class="text">
				<div class="title"><b>Skills</b></div>
				Because sometimes, all you need to know is what I can achieve. All while keeping a correct personal and "professional" lifestyle.
			</div>
		</div>
		<div class="sectionized leftright fill directed">
			<img src="../assets/portfolio/swiftui.png" alt="SwiftUI icon" draggable="false" />
			<div class="text">
				<div class="title"><b>SwiftUI</b></div>
				In recent years, I've been focusing on SwiftUI's possibilities to create— sometimes— simple apps using Apple's framework, to declaratively code user interfaces and all of the apps' background activities.	
			</div>
		</div>
		<div class="sectionized leftright fill directed">
			<img src="../assets/portfolio/nodejs.png" alt="node.js icon" draggable="false" />
			<div class="text">
				<div class="title"><b>Node.JS</b></div>
				Starting here back in 2021, my node.js capacities have been growing endlessly, from native node.js web handling to running simple processes to have a Vue website.
			</div>
		</div>
		<div class="sectionized leftright fill directed">
			<img class="high" src="../assets/portfolio/java.png" alt="Java icon" draggable="false" />
			<div class="text">
				<div class="title"><b>JavaScript</b></div>
				To create our Minecraft <a href="https://d.lumaa.fr/bkrm">Backrooms Mod</a> with PatateGivrée, I had to learn how to code Minecraft mods in Java. Nowadays, I wouldn't say I master it, but I can make this work out with some time.
			</div>
		</div>
		<div class="sectionized leftright fill directed">
			<img class="high" src="../assets/portfolio/html5.png" alt="HTML5 icon" draggable="false" />
			<div class="text">
				<div class="title"><b>Web</b></div>
				Making websites is where I started "coding", by replicating the <a href="https://discord.com/">Discord</a> interface and primary features without a server, everything locally... Turns out I'm pretty good now.
			</div>
		</div>
    </span>
</template>

<style scoped>
    span.flex {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

    .fill {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 84vh;
	}

	.directed {
		width: 100vw;
		gap: 10vw;
	}

	.leftright img, .rightleft img {
		width: 350px;
	}

	.leftright img.high, .rightleft img.high {
		width: unset;
		height: 350px;
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

	.bisectionized {
		border: 0.5px solid #ffffff6d;
	}

	.box {
		padding: 4vh 0;
	}

	.period {
		padding: 7.5vh 1.5em;
	}

	.period > .left, .period > .right {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.period > .left a, .period > .right a, .sectionized .text a {
		font-size: inherit;
	}

	.period .files {
		width: 30vw;
		height: 30vw;
		padding: 15px;
		background: #1e1e1e6d;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 20px;
	}

	.period .files > img {
		width: 27vw;
		height: 27vw;
		border-radius: 10px;
	}

	.period .left > .text, .period .right > .text {
		margin: 0 20px;
		width: 60vw;
	}

	.period > .right {
		text-align: right;
		flex-direction: row-reverse;
	}

	.period > .left {
		text-align: left;
		flex-direction: row;
	}

    .sectionized .text .title, .box .title {
        font-family: var(--font-mono);
    }

	.sectionized .text .subtitle, .box .subtitle {
		font-size: 1.7em;
        font-family: var(--font-mono);
	}

    .sectionized .text .title b, .box .title b {
        font-family: var(--font-expanded);
    }

	@media screen and (max-width: 850px) {
		.rightleft, .leftright {
			flex-direction: column;
		}

		.rightleft img, .leftright img {
			width: 250px;
		}

		.leftright img.high, .rightleft img.high {
			width: unset;
			height: 250px;
		}

		.rightleft .text, .leftright .text {
			width: 90vw;
		}

		.period {
			padding: 4.5vh 0;
		}

		.period > .left, .period > .right {
			text-align: left;
			flex-direction: column;
		}

		.period .left > .text, .period .right > .text {
			width: 85vw;
		}

		.period .files {
			margin: 3vh 0 0 0;
			width: 50vw;
			height: 50vw;
		} 

		.period .files > img {
			width: 43vw;
			height: 43vw;
		}
	}
</style>
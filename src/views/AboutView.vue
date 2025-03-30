<template>
    <span class="flex">
        <div class="sectionized leftright fill directed">
            <img src="../assets/hero/hero_wwdc24.jpg" alt="Lumaa WWDC24 styled" draggable="false"/>
            <div class="text">
                <div class="title">I'm <b>Lumaa</b></div>
                Developer since 2021, I am a passionate developer in my free time, and a student called <span class="mono">Nathan</span> at others.
            </div>
        </div>
        <span id="skills">
            <div class="sectionized rightleft fill directed">
                <img src="../assets/portfolio/wrench.and.screwdriver.svg" alt="Wrench and Screwdriver icon" class="high" draggable="false"/>
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
                    <div class="title"><b>Java</b></div>
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
        <router-link to="/" class="br space">
            <span class="label">Return home</span>
        </router-link>
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

    #skills .fill {
        height: 50vh;
    }

	.directed {
		width: 100vw;
		gap: 10vw;
	}

	.leftright img, .rightleft img {
		width: 350px;
	}

	.leftright img.high, .rightleft img.high {
		transform: scale(0.8);
	}

	.leftright .text, .rightleft .text {
		width: 40vw;
	}

    .leftright .text a, .rightleft .text a {
        font-size: inherit;
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

    .space {
        margin: 50px 0;
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
	}
</style>
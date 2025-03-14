<template>
    <span class="flex">
        <div class="sectionized leftright fill directed">
            <img src="../assets/hero/full_black.jpg" alt="Lumaa icon" />
            <div class="text">
                <div class="title">I am <b>Lumaa</b></div>
                Developer since 2021, I am a passionate developer in my free time, and a student at others. You maybe know it already, but my (actual) name is Nathan.
            </div>
        </div>
        <div class="box" id="through">
            <div class="title">Through Time<div class="subtitle">From 2021 to now.</div></div>
            <span id="2021">
                <div class="right subordinate">
                    <div class="text">My coding journey starts with the username <span class="mono">@_Lumination</span> as a JavaScript developer, more particularly a node.js developer doing Discord bots, like Keymey for example.</div>
                    <div class="attachments">
                        <!-- lumi + keymey -->
                    </div>
                </div>
            </span>
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
	}

	.fill:not(.cta > .fill) {
		height: 88vh;
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

    .sectionized .text .title {
        font-family: var(--font-mono);
    }

    .sectionized .text .title b {
        font-family: var(--font-expanded);
    }

	@media screen and (max-width: 850px) {
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
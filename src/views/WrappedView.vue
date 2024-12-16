<template>
	<div class="sep"></div>
	<span class="flex">
		<img
			src="../assets/hero/icon_white.svg"
			alt="Lumaa icon"
			class="brand"
			draggable="false"
		/>
		<p class="title">Lumaa Wrapped 2024</p>
		<div class="sep"></div>
		<span style="gap: 1em" class="flex">
			<p>
                This year has been full of projects!
                <br />
                Let's check them out...
            </p>
		</span>
		<div style="padding: 7.5vw;"></div>
        <span style="gap: 1em" class="flex">
			<p>
                I made a whole new branding, from a silly character, to a proper icon.
            </p>
            <span class="flex row newb">
                <img src="../assets/lumaa_prechar.png" />
                <p style="font-size: 5vh;">➡️</p>
                <img src="../assets/hero/icon_white.svg" />
            </span>
		</span>
		<div class="sep"></div>
		<span style="gap: 1em" class="flex">
			<p class="title">This year, I released 3 apps on the App Store...</p>
			<a href="https://apps.lumaa.fr/app/bubble" class="br">
				<div class="labels">
					<span class="label">
                        <img src="https://apps.lumaa.fr/assets/images/bubble/HeroIcon_black.jpg" />
                        <p>Bubble</p>
                    </span>
				</div>
			</a>
			<a href="https://apps.lumaa.fr/app/fraca" class="br">
				<div class="labels">
					<span class="label">
                        <img src="https://apps.lumaa.fr/assets/images/fraca.jpg" />
                        <p>Fraca</p>
                    </span>
				</div>
			</a>
            <a href="https://apps.lumaa.fr/app/nummemory" class="br">
				<div class="labels">
					<span class="label">
                        <img src="https://apps.lumaa.fr/assets/images/nummemory.png" />
                        <p>NumMemory</p>
                    </span>
				</div>
			</a>
		</span>
		<div class="sep"></div>
		<span style="gap: 1em" class="flex">
			<p class="title">...and 5 unreleased projects</p>
			<a href="https://apps.lumaa.fr/app/artisticly" class="br">
				<div class="labels">
					<span class="label">
                        <img src="https://apps.lumaa.fr/assets/images/artisticly/icon.jpg" />
                        <p>Artisticly</p>
                    </span>
				</div>
			</a>
			<a href="https://techhub.social/@lumaa/113214624051110745" class="br">
				<div class="labels">
					<span class="label">
                        <img src="https://apps.lumaa.fr/assets/images/app_icon_missing.png" />
                        <p>WidgAround</p>
                    </span>
				</div>
			</a>
            <a href="https://apps.lumaa.fr/app/secret" class="br">
				<div class="labels">
					<span class="label">
                        <img src="https://apps.lumaa.fr/assets/images/app_icon_missing.png" />
                        <p>👀</p>
                    </span>
				</div>
			</a>
            <a href="https://apps.lumaa.fr/app/byheart" class="br">
				<div class="labels">
					<span class="label">
                        <img src="https://apps.lumaa.fr/assets/images/byheart/hero-icon.png" />
                        <p>ByHeart</p>
                    </span>
				</div>
			</a>
		</span>
        <div class="sep"></div>
		<span style="gap: 1em" class="flex">
			<p class="title">I made 6 Pull Requests, notably on these repositories:</p>
			<a href="https://github.com/ciderapp/cider.sh" class="br">
				<div class="labels">
					<span class="label">Cider website</span>
                    <span class="sublabel">cider.sh/remote</span>
				</div>
			</a>
			<a href="https://github.com/ciderapp/Cider-Remote" class="br">
				<div class="labels">
					<span class="label">Cider Remote App</span>
                    <span class="sublabel">Available on TestFlight</span>
				</div>
			</a>
            <a href="https://github.com/mastodon/joinmastodon" class="br">
				<div class="labels">
					<span class="label">Mastodon website</span>
                    <span class="sublabel">joinmastodon.org/apps</span>
				</div>
			</a>
            <a href="https://github.com/github/explore" class="br">
				<div class="labels">
					<span class="label">GitHub Topic</span>
                    <span class="sublabel">visionOS topic</span>
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

    span.flex.row {
        flex-direction: row;
    }

    .newb {
        gap: 35px;
    }

    .newb img {
        height: 250px;
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

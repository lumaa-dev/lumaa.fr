<template>
	<meta style="display: none" name="apple-itunes-app" content="app-id=6468402716">
	<div class="ios">
		<div class="app">
			<img src="../assets/tictac/icon.png" alt="TicTac App icon" />
			<h1>TicTac</h1>
			<p class="caption">
				Rappelez-vous des choses qui comptent pour vous, décomptez les
				événements qui vous tiennent à cœur et observez les tâches qu'il vous
				reste.
			</p>
		</div>
		<div class="h-gallery">
			<img src="../assets/tictac/welcome.png" />
			<img src="../assets/tictac/reminders.png" />
			<img src="../assets/tictac/countdowns.png" />
			<img src="../assets/tictac/tasks.png" />
			<img src="../assets/tictac/dynamic_island.png" />
		</div>
		<p>En utilisant TicTac, vous pouvez enregistrer vos rappels avec différents
			niveaux d'importance. Il y a également une fonctionnalité de notification
			plusieurs heures à l'avance, qui transforme votre rappel en une activité
			en direct sur votre
			<a href="https://support.apple.com/fr-fr/guide/iphone/iph28f50d10d/ios"
				>Dynamic Island</a
			>. Vous pouvez le marquer comme accompli à tout moment de la journée, que
			ce soit depuis l'application ou depuis le widget de rappels.
			<br /><br />Vous trouverez également des compteurs qui font un décompte en
			temps réel de la date actuelle jusqu'à une date de votre choix. Vous
			pouvez associer une icône représentant au mieux l'événement, visible sur
			votre écran d'accueil et de verrouillage grâce au widget de compteurs. De
			plus, vous pouvez afficher un compteur sur votre
			<a href="https://support.apple.com/fr-fr/guide/iphone/iph28f50d10d/ios"
				>Dynamic Island</a
			>
			et le voir comme une activité en direct sur votre écran de verrouillage.

			<br /><br />Enfin, organisez vos tâches depuis l'application en
			sélectionnant une icône descriptive pour chaque tâche. Vous avez la
			possibilité de classer vos tâches dans n'importe quel ordre, pour ne jamais
			en oublier une.
		</p>
		<p class="appstore">Bientôt sur l'App Store</p>
		<!-- COMING SOON -->
		<!-- <a class="appstore" href="https://apps.apple.com/fr/app/tic-tac/id6468402716">
            <img src="../assets/tictac/app_store_black_badge.svg" alt="Télécharger dans l'App Store"/>
        </a> -->
	</div>
</template>

<style scoped>
	.ios {
		font-family: "SF Pro Text", -apple-system, BlinkMacSystemFont, Roboto,
			"Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
			"Segoe UI Emoji", "Segoe UI Symbol";
	}

	.app {
		margin: 0 0 5em 0;
	}

	a {
		text-decoration: none;
		color: rgb(32, 148, 250);
	}

	.appicon,
	.app img {
		border-radius: 17.544%;
		width: 20vw;
		margin: 2vh;
	}

	.app h1,
	.ios .title {
		font-size: 4.5em;
		margin: 10px;
	}

	.ios p {
		font-size: 16px;
		text-align: justify;
		padding: 0 8em;
	}

	.ios .caption {
		text-align: center;
	}

	.h-gallery {
		/* Horizontal Gallery */
		overflow: scroll hidden;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: left;
		margin: 0 0 7em 0;
	}

	.h-gallery img {
		height: 60vh;
		padding: 20px 1em;
	}

	.ios p.appstore {
		font-size: 3em;
		text-align: center;
		padding: 1em 0;
		font-weight: 700;
	}

	.ios .appstore img {
		height: 4em;
		margin: 2em;
	}

	@media screen and (max-width: 900px) {
		.ios p {
			font-size: 16px;
			text-align: justify;
			padding: 0 4vh;
		}

		.appicon,
		.app img {
			width: 40vw;
		}
	}
</style>

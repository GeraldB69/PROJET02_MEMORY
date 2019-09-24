/* Fonction de comparaison des 2 identifiants de carte */
function CompareCards(IDcarte1, IDcarte2) {
	if (IDcarte1 === IDcarte2) return true;
	else return false;
}

/* Affiche la réponse */
function DisplayResponse(reponse) {
	if (reponse) {
		/* affichage du resultat correct (à changer) */
		console.log("ok");
	} else {
		/* affichage du resultat incorrect (à changer) */
		console.log("no");
	}
}

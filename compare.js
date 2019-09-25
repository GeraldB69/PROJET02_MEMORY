/* Fonction de comparaison des 2 identifiants de carte */
function CompareCards(IDcarte1, IDcarte2) {
	if (IDcarte1 === IDcarte2) return true;
	else return false;
}

/* Affiche la réponse */
function DisplayResponse(reponse) {
	if (reponse) {
		/* affichage du resultat correct (à changer) */
		console.log("These are same cards");
		document.getElementById("response_compare").innerHTML = "These are same cards";
	} else {
		/* affichage du resultat incorrect (à changer) */
		console.log("These aren't same cards");
		document.getElementById("response_compare").innerHTML = "These aren't same cards";
	}
}

const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");
const audio3 = document.getElementById("audio3");
const audio4 = document.getElementById("audio4");
const audio5 = document.getElementById("audio5");
const audio6 = document.getElementById("audio6");
const audio7 = document.getElementById("audio7");
const audio8 = document.getElementById("audio8");

// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ Tableau contenant les 8 paires de son à lire !

const audios = [
	audio1,
	audio2,
	audio3,
	audio4,
	audio5,
	audio6,
	audio7,
	audio8,
	audio1,
	audio2,
	audio3,
	audio4,
	audio5,
	audio6,
	audio7,
	audio8
];
console.log(audios);

// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ Melange le tableau de son !
function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

// DÉSACTIVÉ POUR LA PRÉSENTATION
//shuffle(audios);
//console.log(audios);

let idBonhommesFound = new Array();
// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ Tableau regroupant les <div> des bonhommes
const idBonhommes = [
	"id14",
	"id15",
	"id18",
	"id20",
	"id22",
	"id25",
	"id26",
	"id28",
	"id31",
	"id34",
	"id35",
	"id39",
	"id43",
	"id46",
	"id48",
	"id53"
];

let soundPlayed1 = 0; // Pour enregistrer le premier son joué
let soundPlayed2 = 0; // pour le second
let idBonhommesPlayed = 0; //pour enregistrer le bonhomme cliqué
let player = 1; // pour passer d'un joueur à l'autre

for (let i = 0; i < idBonhommes.length; i++) {
	const img = document.getElementById(idBonhommes[i]);
	let cibleNoire = document.getElementById(`${idBonhommes[i]}_`);
	let image = idBonhommes[i].slice(2);

	img.addEventListener("click", function() {
		audios[i].play();
		console.log("youpi", audios[i].id);

		if (idBonhommesPlayed != idBonhommes[i]) {
			if (soundPlayed1 === 0) {
				var img = document.createElement("img");
				img.src = "images/choice.png";
				img.id = "cible";
				img.style = "position:absolute;left:10%;top:15px; z-index:4;";
				img.width = "50";
				cibleNoire.appendChild(img);
				// cibleNoire.innerHTML += `<img src="images/choice.png" id="cible" width="70" style="position:absolute;left:10%;top:15px; z-index:4;">`;
				soundPlayed1 = audios[i].id;
			} else if (soundPlayed2 === 0) {
				soundPlayed2 = audios[i].id;

				console.log(CompareCards(soundPlayed1, soundPlayed2));

				if (CompareCards(soundPlayed1, soundPlayed2) === true) {
					if (player % 2 != 0) {
						pointPlus1(CompareCards(soundPlayed1, soundPlayed2));
						bienJoue();
					} else {
						pointPlus2(CompareCards(soundPlayed1, soundPlayed2));
						bienJoue();
					}

					//console.log(idBonhommesPlayed);
					idBonhommesFound.push(idBonhommes[i]);
					idBonhommesFound.push(idBonhommesPlayed);
					player--;

					console.log(idBonhommesFound);
					if (idBonhommesFound.length === 16) {
						console.log("1");
						console.log(count1);
						console.log(g1);
						console.log(g2);

						if (count1 > count2 && g1 === "M") {
							console.log("2");
							gagneM();
						} else if (count1 > count2 && g1 === "W") {
							console.log("3");
							gagneW();
						} else if (count1 < count2 && g2 === "M") {
							console.log("4");
							gagneM();
						} else {
							console.log("5");
							gagneW();
						}
					}
				}

				soundPlayed2 = 0;
				soundPlayed1 = 0;
				idBonhommesPlayed = 0;
				playerWhoHaveToPlay(player); // fonction affichant le joueur à qui c'est le tour !
				for (let l = 0; l < idBonhommesFound.length; l++) {
					let tacheDeSang = document.getElementById(`${idBonhommesFound[l]}_`);
					let image = idBonhommesFound[l].slice(2);
					tacheDeSang.innerHTML = `<img src="images/${image}.gif" style="z-index:1;"><img src="images/blood.png" width="70" style="position:absolute;left:20%;top:15px; z-index:2; ">`;
					console.log(tacheDeSang);
				}

				player++;
			}
			idBonhommesPlayed = idBonhommes[i];
			const myCible = document.getElementById("cible");
			setTimeout(function() {
				myCible.remove();
			}, 6000);

			// cibleNoire.addEventListener("click", function() {
			// 	audios[i].play();
			// });
		}
	});
}

/* Fonction de comparaison des 2 identifiants de carte */
function CompareCards(IDcarte1, IDcarte2) {
	if (IDcarte1 === IDcarte2) return true;
	else return false;
}

function gagneM() {
	document.body.innerHTML = `
		<div class="divM">
			<div class="divButM">
				<button class="linkIM"><a class="aM" href="index.html">Play again</a></button>
			</div>
			<h1 class="titleM">Dude you're a WINNER !</h1>
			<img class="imgM" src="Men.gif"/>
			<p class="pM">You're so perfect ! Congratulations !</p>
		</div>`;
}

function gagneW() {
	document.body.innerHTML = `
		<div class="divM">
			<div class="divButM">
				<button class="linkIM"><a class="aM" href="index.html">Replay</a></button>
			</div>
			<h1 class="titleM">Yes, you win !</h1>
			<img class="imgM" src="Woman.gif"/>
			<p class="pM">NOW lazy, go clean up !</p>
		</div>`;
}

function bienJoue() {
	const aPoil = document.createElement("img");
	aPoil.src = "images/pointPlus.png";
	aPoil.id = "pointPlusimg";
	aPoil.style = "position:absolute;left:15%;top:80px; z-index:4; ";
	aPoil.width = "1000";
	aPoil.className = "slide-in-right";
	document.body.appendChild(aPoil);

	const bonhommeAPoil = document.getElementById("pointPlusimg");
	setTimeout(function() {
		bonhommeAPoil.remove();
	}, 2000);
}

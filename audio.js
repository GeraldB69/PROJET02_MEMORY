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
//console.log(audios);

// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ Melange le tableau de son !
function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

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
		console.log(audios[i].id);

		if (idBonhommesPlayed != idBonhommes[i]) {
			if (soundPlayed1 === 0) {
				cibleNoire.innerHTML += `<img src="images/choice.png" id="cible" width="70" style="position:absolute;left:10%;top:15px; z-index:4;">`;
				soundPlayed1 = audios[i].id;
			} else if (soundPlayed2 === 0) {
				soundPlayed2 = audios[i].id;

				console.log(CompareCards(soundPlayed1, soundPlayed2));

				if (CompareCards(soundPlayed1, soundPlayed2) === true) {
					if (player % 2 != 0) {
						pointPlus1(CompareCards(soundPlayed1, soundPlayed2));
					} else pointPlus2(CompareCards(soundPlayed1, soundPlayed2));

					//console.log(idBonhommesPlayed);
					let BonhommesFounds = idBonhommesFound.push(idBonhommes[i]);
					BonhommesFounds = idBonhommesFound.push(idBonhommesPlayed);
					player--;

					console.log(idBonhommesFound);
					if (idBonhommesFound.length === 16) {
						console.log("gagné");
						gagne();
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
			}, 4000);

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

function gagne() {
	document.body.innerHTML = `<div style="with:100%; text-align:center; color:deeppink; font-size:80px; margin-top:50px;"><a href="index.html" style="text-decoration:none;  color:deeppink;">You WIN</a></div>`;
}

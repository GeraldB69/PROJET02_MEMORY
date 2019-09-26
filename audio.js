const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");
const audio3 = document.getElementById("audio3");
const audio4 = document.getElementById("audio4");
const audio5 = document.getElementById("audio5");
const audio6 = document.getElementById("audio6");
const audio7 = document.getElementById("audio7");
const audio8 = document.getElementById("audio8");

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

let soundPlayed1 = 0;
let soundPlayed2 = 0;

for (let i = 0; i < idBonhommes.length; i++) {
	const img = document.getElementById(idBonhommes[i]);
	img.addEventListener("click", function() {
		audios[i].play();
		console.log(audios[i].id);
		//console.log(idBonhommes[i]);
		if (soundPlayed1 === 0) {
			soundPlayed1 = audios[i].id;
			console.log(soundPlayed1);
		} else if (soundPlayed2 === 0) {
			soundPlayed2 = audios[i].id;
			console.log(soundPlayed2);
		}
	});
}

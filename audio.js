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

for (let i = 0; i < idBonhommes.length; i++) {
	const img = document.getElementById(idBonhommes[i]);
	img.addEventListener("click", function() {
		audios[i].play();
		console.log(audios[i].id);
		console.log(idBonhommes[i]);
	});
}

/* const img1 = document.getElementById("id14");
img1.addEventListener("click", function() {
	audio1.play();
	console.log(audio1.id);
});

const img2 = document.getElementById("id15");
img2.addEventListener("click", function() {
	audio2.play();
});

const img3 = document.getElementById("id18");
img3.addEventListener("click", function() {
	audio3.play();
});

const img4 = document.getElementById("id20");
img4.addEventListener("click", function() {
	audio4.play();
});

const img5 = document.getElementById("id22");
img5.addEventListener("click", function() {
	audio5.play();
});

const img6 = document.getElementById("id25");
img6.addEventListener("click", function() {
	audio6.play();
});

const img7 = document.getElementById("id26");
img7.addEventListener("click", function() {
	audio7.play();
});

const img8 = document.getElementById("id28");
img8.addEventListener("click", function() {
	audio8.play();
});

const img9 = document.getElementById("id31");
img9.addEventListener("click", function() {
	audio1.play();
});

const img10 = document.getElementById("id34");
img10.addEventListener("click", function() {
	audio2.play();
});

const img11 = document.getElementById("id35");
img11.addEventListener("click", function() {
	audio3.play();
});

const img12 = document.getElementById("id39");
img12.addEventListener("click", function() {
	audio4.play();
});

const img13 = document.getElementById("id43");
img13.addEventListener("click", function() {
	audio5.play();
});

const img14 = document.getElementById("id46");
img14.addEventListener("click", function() {
	audio6.play();
});

const img15 = document.getElementById("id48");
img15.addEventListener("click", function() {
	audio7.play();
});

const img16 = document.getElementById("id53");
img16.addEventListener("click", function() {
	audio8.play();
});
 */

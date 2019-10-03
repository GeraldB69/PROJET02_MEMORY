const names = [];
let modal = null;

const openModal = function(e) {
	e.preventDefault();
	modal = document.querySelector(e.target.getAttribute("href"));
	modal.style.display = null;
	modal.removeAttribute("aria-hidden");
	modal.setAttribute("aria-modal", "true");
	modal.addEventListener("click", closeModal);
	modal.querySelector(".js-modal-close").addEventListener("click", closeModal);
	modal.querySelector(".js-modal-stop").addEventListener("click", stopPropagation);
};

const closeModal = function(e) {
	if (modal === null) return;
	e.preventDefault();
	modal.style.display = "none";
	modal.setAttribute("aria-hidden", "true");
	modal.removeAttribute("aria-modal");
	modal.removeEventListener("click", closeModal);
	modal.querySelector(".js-modal-close").removeEventListener("click", closeModal);
	modal.querySelector(".js-modal-stop").removeEventListener("click", stopPropagation);
	modal = null;
};

const stopPropagation = function(e) {
	e.stopPropagation();
};

document.querySelectorAll(".js-modal").forEach((a) => {
	a.addEventListener("click", openModal);
});

window.addEventListener("keydown", function(e) {
	if (e.key === "Escape" || e.key === "Esc") {
		closeModal(e);
	}
});

window.addEventListener("keydown", function(e) {
	play = document.querySelectorAll(".button_play");
	if (e.key === "Enter") {
		getInfos();
		closeModal(e);
	}
});

document.querySelectorAll(".button_play").forEach((a) => {
	a.addEventListener("click", closeModal);
});

let g1;
let g2;

function getInfos() {
	// récupère les noms
	name1 = document.getElementById("name1").value;
	name2 = document.getElementById("name2").value;
	// mise à jour des noms sur le tableau
	putNames(name1, name2); 
	// récupère les genres des 2 joueurs
	const m1 = document.getElementById("radio_m1").checked;
	const f1 = document.getElementById("radio_f1").checked;
	const m2 = document.getElementById("radio_m2").checked;
	const f2 = document.getElementById("radio_f2").checked;
	g1 = m1 === true ? "M" : "F";
	g2 = m2 === true ? "M" : "F";
	gender(g1,g2);
  // CORRECTION BUG TABLEAU
  haveToPlay = document.getElementById("whoIsPlaying");
	haveToPlay.innerHTML = `It's<br> <span style="font-size:30px">${name1}'s</span><br> turn`;

}
	
// ---------------------------------- modale burger

document.getElementById("open-modal").addEventListener("click", () => {
	document.getElementById("burgerMenu").style.display = "block";
});

document.getElementById("close-modal").addEventListener("click", () => {
	document.getElementById("burgerMenu").style.display = "none";
});

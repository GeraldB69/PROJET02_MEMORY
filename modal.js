const names = [];
const genders = [];
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
		closeModal(e);
	}
});

document.querySelectorAll(".button_play").forEach((a) => {
	a.addEventListener("click", closeModal);
});

function getInfos() {
	let name1 = document.getElementById("name1").value;
	let name2 = document.getElementById("name2").value;

	putNames(name1, name2);
}
// ---------------------------------- modale burger

document.getElementById("open-modal").addEventListener("click", () => {
	document.getElementById("burgerMenu").style.display = "block";
});

document.getElementById("close-modal").addEventListener("click", () => {
	document.getElementById("burgerMenu").style.display = "none";
});

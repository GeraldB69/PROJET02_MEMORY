let countPlayer1 = document.getElementById("score1");

let name1;
countPlayer1.innerHTML = "Score <br>" + name1 + ": 0";

count1 = 0;

/* countPlayer1.addEventListener("click", function() {
	count1 += 1;
	countPlayer1.innerHTML = "Score <br>" + name1 + ": " + count1;
});

let countPlayer2 = document.getElementById("score2");

let name2;
countPlayer2.innerHTML = "Score <br>" + name2 + ": 0";

count2 = 0;

countPlayer2.addEventListener("click", function() {
	count2 += 1;
	countPlayer2.innerHTML = "Score <br>" + name2 + ": " + count2;
}); */

function pointPlus(match) {
	count1 += 1;
	countPlayer1.innerHTML = "Score <br>" + name1 + ": " + count1;
}

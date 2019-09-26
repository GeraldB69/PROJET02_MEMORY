let countPlayer1 = document.getElementById("score1");
let countPlayer2 = document.getElementById("score2");

let name1 = "joueur 1";
let name2 = "joueur 2";

countPlayer1.innerHTML = "Score <br>" + name1 + " : 0";
countPlayer2.innerHTML = "Score <br>" + name2 + " : 0";

count1 = 0;
count2 = 0;

function pointPlus1(match) {
	count1 += 1;
	countPlayer1.innerHTML = "Score <br>" + name1 + " : " + count1;
}

function pointPlus2(match) {
	count2 += 1;
	countPlayer2.innerHTML = "Score <br>" + name2 + " : " + count2;
}

// --------------------------------------------- pour afficher le joueur qui doit jouer
let haveToPlay = document.getElementById("whoIsPlaying");

function playerWhoHaveToPlay(player) {
	console.log(`player : ${player}`);

	if (player % 2 === 0) {
		haveToPlay.innerHTML = `It's ${name1}'s turn`;
	} else {
		haveToPlay.innerHTML = `It's ${name2}'s turn`;
	}
}

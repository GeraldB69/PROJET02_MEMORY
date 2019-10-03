name1 !== "" ? name1 = "Player 1" : name1; // CORRECTION BUG TABLEAU
name2 !== "" ? name2 = "Player 2" : name2; // CORRECTION BUG TABLEAU

let countPlayer1 = document.getElementById("score1");
let countPlayer2 = document.getElementById("score2");

function putNames(name1,name2) {
	countPlayer1.innerHTML = "Score <br>" + name1 + " : " + count1;
	countPlayer2.innerHTML = "Score <br>" + name2 + " : " + count2;
}
function gender(g1,g2) { // permet de récupérer le genre...
	console.log(g1);
	console.log(g2);
}

countPlayer1.innerHTML = "Score <br>" + name1 + " : 0";
countPlayer2.innerHTML = "Score <br>" + name2 + " : 0";

count1 = 0;
count2 = 0;


function pointPlus1(match) {
	// const gender = 'male';
	if (g1 === 'M') {
	count1 += 2;
	countPlayer1.innerHTML = "Score <br>" + name1 + " : " + count1;
	}
	else {
	count1 += 1;
	countPlayer1.innerHTML = "Score <br>" + name1 + " : " + count1;
	}
}

function pointPlus2(match) {
	// const gender = 'female';
	if (g2 === 'M') {
	count2 += 2;
	countPlayer2.innerHTML = "Score <br>" + name2 + " : " + count2;
	}
	else {
	count2 += 1;
	countPlayer2.innerHTML = "Score <br>" + name2 + " : " + count2;
	}
}

// function pointPlus1(match) {
// 	count1 += 1;
// 	countPlayer1.innerHTML = "Score <br>" + name1 + " : " + count1;
// }

// function pointPlus2(match) {
// 	count2 += 1;
// 		countPlayer2.innerHTML = "Score <br>" + name2 + " : " + count2;
// 	}

	// --------------------------------------------- pour afficher le joueur qui doit jouer
	let haveToPlay = document.getElementById("whoIsPlaying");

	function playerWhoHaveToPlay(player) {
	console.log(`player : ${player}`);
	
	if (player % 2 === 0) {
		haveToPlay.innerHTML = `It's<br> <span style="font-size:20px">${name1}'s</span><br> turn`;
	} else {
		haveToPlay.innerHTML = `It's<br> <span style="font-size:20px">${name2}'s</span><br> turn`;
	}
}

// const paires1 = document.getElementById("id14");
// const audio1 = document.getElementById("audio1");

// paires1.addEventListener("click", function (){
//     audio1.play();
// })

// const paires2 = document.getElementById("paires2");
// const audio2 = document.getElementById("audio2");

// paires2.addEventListener("click", function (){
//     audio2.play();
// })

const paires1 = document.getElementsByClassName("son1");
const audio1 = document.getElementById("audio1");
for (let i=0; i < paires1.length; i++) {
    paires1[i].addEventListener("click", function(){
    audio1.play();
    });
}

const paires2 = document.getElementsByClassName("son2");
const audio2 = document.getElementById("audio2");
for (let i=0; i < paires2.length; i++) {
    paires2[i].addEventListener("click", function(){
    audio2.play();
    });
}

const paires3 = document.getElementsByClassName("son3");
const audio3 = document.getElementById("audio1");
for (let i=0; i < paires3.length; i++) {
    paires3[i].addEventListener("click", function(){
    audio3.play();
    });
}

const paires4 = document.getElementsByClassName("son4");
const audio4 = document.getElementById("audio2");
for (let i=0; i < paires4.length; i++) {
    paires4[i].addEventListener("click", function(){
    audio2.play();
    });
}

const paires5 = document.getElementsByClassName("son5");
const audio5 = document.getElementById("audio1");
for (let i=0; i < paires5.length; i++) {
    paires5[i].addEventListener("click", function(){
    audio1.play();
    });
}

const paires6 = document.getElementsByClassName("son6");
const audio6 = document.getElementById("audio2");
for (let i=0; i < paires6.length; i++) {
    paires6[i].addEventListener("click", function(){
    audio2.play();
    });
}

const paires7 = document.getElementsByClassName("son7");
const audio7 = document.getElementById("audio1");
for (let i=0; i < paires7.length; i++) {
    paires7[i].addEventListener("click", function(){
    audio1.play();
    });
}

const paires8 = document.getElementsByClassName("son8");
const audio8 = document.getElementById("audio2");
for (let i=0; i < paires8.length; i++) {
    paires8[i].addEventListener("click", function(){
    audio2.play();
    });
}

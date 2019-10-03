// const RandomTime = function(min, max) {
//     return Math.random() * (max - min) + min;
// }


// const clickDuck = document.getElementById("canard");
// clickDuck.addEventListener("click", shuffle(audios))


console.log(audios);


function duck() {
const movingDuck = document.getElementById("animate");
movingDuck.animate([ 
    { transform: 'rotateY(0deg)' },
    { transform: 'rotateY(360deg)' }], 
    { duration: 2000, iterations: 4});
}

setInterval(duck, 20000);



/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

function reset () {
    document.querySelector('#phrase ul').innerHTML = "";
    const keys = document.querySelectorAll(".keyrow button");
    const lives = document.querySelectorAll("#scoreboard ol li");

    keys.forEach(k => {
        k.className = "key",
        k.disabled = false;
        return k
    });

    lives.forEach(live => live.firstElementChild.src = "images/liveHeart.png")
}


let game;
const startButton = document.getElementById("btn__reset");
const keyBoard = document.getElementById("qwerty");

startButton.addEventListener('click',() => {
    game = new Game();
    reset();
    game.startGame();


});

keyBoard.addEventListener("click",e => {
    let key = e.target;
    game ? game.handleInteraction(key) : null
});

document.addEventListener("keyup", e => {
    const keyPressed = document.getElementById(e.key.toLocaleLowerCase());
    
    game && /[a-z]/g.test(keyPressed) && keyPressed !== null ? game.handleInteraction(keyPressed):null
});

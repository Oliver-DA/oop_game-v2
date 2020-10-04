/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
const startButton = document.getElementById("btn__reset");
const keyBoard = document.getElementById("qwerty");

startButton.addEventListener('click',() => {   
    game.startGame();
});

keyBoard.addEventListener("click",e => {
    game.handleIteraction(e)
})

function reset () {
    //Cleans the phrase displayed on the page.
    document.querySelector('#phrase ul').innerHTML = "";
    const keys = document.querySelectorAll(".keyrow button");
    const lives = document.querySelectorAll("#scoreboard ol li");

    //Resets all the clases and disabled properties from the onscreen keyboard.
    keys.forEach(k => {
        k.className = "key",
        k.disabled = false;
        return k
    });

    //loops trough the hearts and replace the "lost heart" image with the "live heart" one
    lives.forEach(live => live.firstElementChild.src = "images/liveHeart.png")
}

//Instance of the Game Class
let game;

const startButton = document.getElementById("btn__reset");
const keyBoard = document.getElementById("qwerty");

startButton.addEventListener('click',() => {
    //Creating a Game class Object reseting the page and starting game!
    game = new Game();
    reset();
    game.startGame();
});

//handler for  the onscreen keyboard 
keyBoard.addEventListener("click",e => {
    let key = e.target;
    
    //if a Game object exists then pass the key clicked by the user to handleInteraction.
    game ? game.handleInteraction(key) : null
});

//Handler for the keyboard
document.addEventListener("keyup", e => {
    //Gets the button that holds the value of the key pressed
    const keyPressed = document.getElementById(e.key.toLocaleLowerCase());
    
    //if there's a Game Object and the key is from a-z plus a valid value call handleInteraction.
    game && /[a-z]/g.test(keyPressed) && keyPressed !== null ? game.handleInteraction(keyPressed):null
});

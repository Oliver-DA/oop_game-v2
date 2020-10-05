/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor () {
        this.missed = 0;
        this.phrases = ["basketball","Helo World","Demon Slayer","Running","Green","Friends","Dark"];
        this.activePhrase = null;
    }

    get getRandomPhrase () {
        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomIndex];
    }

    confirmKey (key) {

        if (this.activePhrase.checkLetter(key.textContent)) {
            key.className = "chosen";
            key.disabled = true;
            this.activePhrase.showMatchedLetter(key.textContent);
            this.checkForWin();
            return 
        }
        key.className = "wrong";
        key.disabled = true;
        this.removeLife();
    }

    removeLife () {
        const lives = document.querySelectorAll("#scoreboard ol li");
        lives[this.missed].firstElementChild.src = "images/lostHeart.png";
        this.missed += 1;

        this.missed === 5 ? setTimeout(this.gameOver,500) : null;
    }

    checkForWin () {

       const revealed = document.querySelectorAll("#phrase ul li.show");
       const space = document.querySelectorAll("#phrase ul li.space");

        if (revealed.length+space.length === this.activePhrase.phrase.length) {
            
           setTimeout(() => {
               this.gameOver("win")
           },500)
        }
        
    }

    handleIteraction (e) {

        if (e.target.tagName === "BUTTON"){
            let key = e.target;
            this.confirmKey(key)
        }
    }

    handleKeyDown (key) {
        const keyPressed = document.getElementById(key);
        this.confirmKey(keyPressed);
    }

    startGame () {
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = new Phrase(this.getRandomPhrase);
        this.activePhrase.addPhraseToDisplay();
    }

    gameOver (status = "lose") {
        const overlay = document.getElementById('overlay');
        overlay.style.display = "block";

        const message = overlay.querySelector("h1");

        if (status === "win") {
            message.className = "win";
            message.textContent = "Congrast! You have guessed the word!";
            return
        } else {
            message.className = "lose";
            message.textContent = "You've run out of lives Good luck, next Time!";
            return
        }
        

    }
} 
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

    removeLife () {
        const lives = document.querySelectorAll("#scoreboard ol li");
        lives[this.missed].firstElementChild.src = "images/lostHeart.png";
        this.missed += 1;

        this.missed === 5 ? setTimeout(this.gameOver,500) : null;
    }

    checkForWin () {
       const revealed = document.querySelectorAll("#phrase ul li.show");
       const space = document.querySelectorAll("#phrase ul li.space");
       
       return revealed.length + space.length === this.activePhrase.phrase.length 
        
    }

    handleInteraction (key) {
        const overlay = document.querySelector("#overlay");

        if (key.tagName === "BUTTON" && overlay.style.display === "none"){

            if (this.activePhrase.checkLetter(key.textContent)) {

                key.className = "chosen";
                key.disabled = true;
                this.activePhrase.showMatchedLetter(key.textContent);
                
                this.checkForWin() ? setTimeout(() => {this.gameOver("win")},500) : null;

            } else if (!key.disabled) {

                key.className = "wrong";
                key.disabled = true;
                this.removeLife();
            }

        }
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
            overlay.className = status;
            message.textContent = "Congrats! You have guessed the word!";
            
        } else {
            overlay.className = status;
            message.textContent = "You've run out of lives Good luck next Time!";
            
        }
    }
} 
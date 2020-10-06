class Game {
    constructor () {
        this.missed = 0;
        this.phrases = ["basketball","Helo World","Demon Slayer","Running","Green","Friends","Dark"];
        this.activePhrase = null;
    }

    //Gets a randomNumber(randomIndex) and returns it's index value on this.phrases
    get getRandomPhrase () {
        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomIndex];
    }

    //Removes a life an uses this.missed value to access the heart on turn.
    removeLife () {
        const lives = document.querySelectorAll("#scoreboard ol li");
        lives[this.missed].firstElementChild.src = "images/lostHeart.png";
        this.missed += 1;

        this.missed === 5 ? setTimeout(this.gameOver,500) : null;
    }

    //Checks the length of the displayed frase plus spaces and compares it to the ones that were already revealed.
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
                
                //If checkForWin returns true call game over in half a second.
                this.checkForWin() ? setTimeout(() => {this.gameOver("win")},500) : null;

                //this prevents the keyboard from taking lives even after the key value was set to "wrong".
            } else if (!key.disabled) {

                key.className = "wrong";
                key.disabled = true;
                this.removeLife();
            }

        }
    }

    startGame () {
        document.getElementById('overlay').style.display = 'none';
        //Assings a new Phrase Object to activePhrase
        this.activePhrase = new Phrase(this.getRandomPhrase);
        //Display the phrase on the page. (hidden)
        this.activePhrase.addPhraseToDisplay();
    }

    //Displays a winning or lossing message to the screen.
    gameOver (status = "lose") {
        const overlay = document.getElementById('overlay');
        const message = overlay.querySelector("h1");
        overlay.style.display = "flex";

        if (status === "win") {
            overlay.className = status;
            message.textContent = "Congrats! You have guessed the word!";
            
        } else {
            overlay.className = status;
            message.textContent = "You've run out of lives Good luck next Time!";
            
        }
    }
} 
/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor () {
        this.missed = 0;
        this.phrases = ["basketball","Helo World","Point High","Running","Comming Home"];
        this.activePhrase = null;
     }

     getRandomPhrase () {
         const randomIndex = Math.floor(Math.random() * this.phrases.length);
         return this.phrases[randomIndex];
     }

     removeLife () {
        const lives = document.querySelectorAll("#scoreboard ol li");
        lives[this.missed].firstElementChild.src = "images/lostHeart.png";
        this.missed += 1;
        if(this.missed === 5){
            setTimeout(this.gameOver,500);
        }

     }

     checkForWin () {
       const revealed = document.querySelectorAll("#phrase ul li.show");
       const space = document.querySelectorAll("#phrase ul li.space");
       if(revealed.length+space.length === this.activePhrase.phrase.length){
           this.gameOver("win");
       }
        
     }

     handleIteraction (e) {
         let letter = e.target;
        if (e.target.tagName === "BUTTON"){

            if (this.activePhrase.checkLetter(letter.textContent)) {
                e.target.className = "chosen";
                e.target.disabled = true;
                this.activePhrase.showMatchedLetter(letter.textContent);
                this.checkForWin();
                return 
            }
            e.target.className = "wrong";
            e.target.disabled = true;
            this.removeLife();
        }
     }

     startGame () {
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = new Phrase(this.getRandomPhrase());
        this.activePhrase.addPhraseToDisplay();
        
     }

     gameOver (status = "lose") {
        const overlay = document.getElementById('overlay');
        overlay.style.display = "block"
        const message = overlay.querySelector("h1");
        if (status === "win") {
            message.className = "win";
            message.textContent = "Congrast! You have guessed the word!";
            return
        }
        message.className = "lose";
        message.textContent = "You've run out of lives Good luck, next Time!"
     }
 } 
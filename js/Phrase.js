/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay () {
    const ul = document.querySelector('#phrase ul');
    const phrase = this.phrase.split("");
    let letters;

    letters = phrase.map(letter => {
        if(letter !== " ") {
            return `<li class = "hide letter ${letter}" >${letter}</li>`
        }else{
            return `<li class = "space" ></li>`
        }
    });

    letters.forEach(letter => ul.innerHTML+=letter);

    }

    checkLetter (letter) {
        return this.phrase.includes(letter)
    }

    showMatchedLetter (letter) {
    const matches = document.querySelectorAll(`.${letter}`);
    matches.forEach(matched => matched.className ="show");
    }
}
class Phrase {

    constructor (phrase) {
        this.phrase = phrase.toLowerCase();
    }

    //Splits the phrase an then takes letter  by letter with map to create it's html and
    //displays them on the page (hidden) in order to ve revealed
    addPhraseToDisplay () {
        
    const ul = document.querySelector('#phrase ul');
    const phrase = this.phrase.split("");
    let letters;

    letters = phrase.map(letter => {

        if (letter !== " ") {

            return `<li class = "hide letter ${letter}" >${letter}</li>`

        } else{

            return `<li class = "space" ></li>`
        }});

    letters.forEach(letter => ul.innerHTML+=letter);

    }

    //Returns true if the phrase includes the letter and false if not
    checkLetter (letter) {

        return this.phrase.includes(letter)
    }

    //Selects the all the matches with the pressed key and set the "show"(reveals the letter) class to each of them 
    showMatchedLetter (letter) {
                
    const matches = document.querySelectorAll(`.${letter}`);
    matches.forEach(matched => matched.className ="show");
    }
}
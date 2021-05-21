/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
  * Adds letter placeholders to the display when the game starts
  * @param {String} phrase - phrase to be used for this game
  */
  // @todo - Reinstate Start Game overlay 
  addPhraseToDisplay() {
    const phraseDisplay = document.getElementById('phrase');
    const phraseDisplayUl = phraseDisplay.firstElementChild;
    const phraseArray = this.phrase.split('');

    phraseArray.forEach((char) => {
      const charLi = document.createElement('li');
      charLi.textContent = char;
      if (char !== ' ') {
        charLi.className = `hide letter ${char}`;
      } else {
        charLi.className = 'space';
      }
      phraseDisplayUl.appendChild(charLi);
    })
  }

  /**
  * Checks to see if the letter selected by the player matches a letter in the phrase
  */
  checkLetter() {

  }

  /**
  * Reveals the letter(s) on the board that matches the player's selection
  */
  showMatchedLetter() {

  }

}
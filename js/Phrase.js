/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
  * Adds letter placeholders to the display when the game starts
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
  * Checks if letter selected by player matches a letter in the phrase
  * @return  {(true|false)} Returns true if letter is found in the phrase; false if not
  */
  checkLetter(letter) {
    const phraseArray = this.phrase.split('');
    if (phraseArray.find(char => letter === char)) {
      return true;
    } else {
      return false;
    }
  }

  /**
  * Reveals the letter(s) on the board that matches the player's selection
  */
  showMatchedLetter() {

  }

}
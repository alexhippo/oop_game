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
  * @param   {String} letter - The letter/character to check
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
  * @param  {String} letter - The letter/character to check
  */
  showMatchedLetter(letter) {
    if (this.checkLetter(letter)) {
      const matchedLetterElements = document.getElementsByClassName(`${letter}`);
      // Turn Array-like object (like a HTMLCollection) to an Array 
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#array_from_a_nodelist
      Array.from(matchedLetterElements).forEach((element) => {
        element.classList.remove('hide');
        element.classList.add('show');
      });
    }
  }

}
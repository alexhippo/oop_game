/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            { phrase: new Phrase('flattening the curve') },
            { phrase: new Phrase('you are on mute') },
            { phrase: new Phrase('vaccination') },
            { phrase: new Phrase('working from home') },
            { phrase: new Phrase('social distancing') }
        ];
        this.activePhrase = null;
    }

    /**
    * Hides the start screen overlay, gets and sets a random phrase to active
    */
    startGame() {
        const startScreenOverlay = document.getElementById('overlay');
        startScreenOverlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase(this.phrases);
        this.activePhrase.phrase.addPhraseToDisplay();
    }

    /**
    * Retrieves a random phrase from an Array of Phrase objects
    * @param  {Array} phrases - Array of Phrase objects 
    */
    getRandomPhrase(phrases) {
        const randomNumber = Math.floor(Math.random() * phrases.length - 1) + 1;
        return phrases[randomNumber];
    }

    /**
    * Check to see if a button clicked by the player matches a letter in the phrase
    */
    handleInteraction() {

    }

    /**
    * Removes a life from the scoreboard. If player has 5 missed guesses, then it's game over
    */
    removeLife() {

    }

    /**
    * Checks to see if all letters have been revealed
    */
    checkForWin() {

    }

    /**
    * Displays the original start screen overlay and displays win/loss game over message.
    */
    gameOver() {

    }
}
/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            { phrase: 'flattening the curve' },
            { phrase: 'you are on mute' },
            { phrase: 'vaccination' },
            { phrase: 'working from home' },
            { phrase: 'social distancing' }
        ];
        this.activePhrase = null;
    }

    /**
    * Hides the start screen overlay, gets and sets a random phrase to active
    */
    startGame() {

    }

    /**
    * Retrieves a random phrase
    */
    getRandomPhrase() {

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
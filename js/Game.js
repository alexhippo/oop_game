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
    * @param  {Object} button - the Button element chosen by the player
    */
    handleInteraction(button) {
        button.setAttribute('disabled', true);
        const phrase = this.activePhrase.phrase;
        if (!phrase.checkLetter(button.textContent)) {
            button.classList.add('wrong');
            this.removeLife();
        } else {
            button.classList.add('chosen');
            phrase.showMatchedLetter(button.textContent);
            if (this.checkForWin()) {
                this.gameOver();
            }
        }
    }

    /**
    * Removes a life from the scoreboard and increases the number of missed attempts. 
    * If player has 5 missed guesses, then it's game over
    */
    removeLife() {
        const scoreboard = document.querySelector('#scoreboard ol');
        switch (this.missed) {
            case 0:
                scoreboard.firstElementChild.firstElementChild.setAttribute('src', 'images/lostHeart.png');
                break;
            case 1:
                scoreboard.firstElementChild.nextElementSibling.firstElementChild.setAttribute('src', 'images/lostHeart.png');
                break;
            case 2:
                scoreboard.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.setAttribute('src', 'images/lostHeart.png');
                break;
            case 3:
                scoreboard.lastElementChild.previousElementSibling.firstElementChild.setAttribute('src', 'images/lostHeart.png');
                break;
            case 4:
                scoreboard.lastElementChild.firstElementChild.setAttribute('src', 'images/lostHeart.png');
                this.gameOver();
            default:
                break;
        }
        this.missed++;
    }

    /**
    * Checks to see if all letters have been revealed in the active phrase
    * @return  {true|false} Returns true if all letters have been revealed; false if not
    */
    checkForWin() {
        const letterLis = Array.from(document.querySelectorAll('#phrase > ul > li'))
            .filter((charLi) => !charLi.classList.contains('space'));

        return Array.from(letterLis)
            .every((letterEl) => letterEl.classList.contains('show'));
    }

    /**
    * Displays the original start screen overlay and displays win/loss game over message.
    */
    gameOver() {

    }
}
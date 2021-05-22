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
        const startScreenOverlay = document.getElementById('overlay');
        startScreenOverlay.style.display = '';
        startScreenOverlay.classList.remove('start');
        const message = document.querySelector('h1#game-over-message');
        if (this.checkForWin()) {
            message.textContent = `Congratulations, you guessed the phrase '${this.activePhrase.phrase}'! Try again?`;
            startScreenOverlay.classList.add('win');
        } else {
            message.textContent = `Sorry, you did not guess the phrase '${this.activePhrase.phrase}'. Try again?`;
            startScreenOverlay.classList.add('lose');
        }
    }

    /**
    * Displays the original start screen overlay and displays win/loss game over message.
    */
    resetGame() {
        const startScreenOverlay = document.getElementById('overlay');
        startScreenOverlay.className = '';
        startScreenOverlay.classList.add('start');

        // remove all li elements from the Phrase ul element
        const phraseDisplay = document.getElementById('phrase');
        const phraseDisplayUl = phraseDisplay.firstElementChild;
        const phraseLiAll = phraseDisplayUl.querySelectorAll('li');
        Array.from(phraseLiAll).forEach((li) => phraseDisplayUl.removeChild(li));

        // enable all keyboard buttons
        // remove classes from keyboard buttons
        const keyboardButtons = document.querySelectorAll('#qwerty button')
        Array.from(keyboardButtons).forEach((key) => {
            key.removeAttribute('disabled');
            key.classList.remove('wrong');
            key.classList.remove('chosen');
        })

        // reset all of the heart images
        const lives = document.querySelectorAll('#scoreboard ol li');
        Array.from(lives).forEach((life) => life.firstElementChild.setAttribute('src', 'images/liveHeart.png'));
    }
}
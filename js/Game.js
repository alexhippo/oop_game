/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            { phrase: new Phrase('wear a mask') },
            { phrase: new Phrase('you are on mute') },
            { phrase: new Phrase('vaccination') },
            { phrase: new Phrase('working from home') },
            { phrase: new Phrase('social distancing') }
        ];
        this.activePhrase = null;
        this.startScreenOverlay = document.getElementById('overlay');
    }



    /**
    * Hides the start screen overlay, gets and sets a random phrase to active
    */
    startGame() {
        this.startScreenOverlay.style.display = 'none';
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
        if (!button.getAttribute('disabled')) {
            button.setAttribute('disabled', true);
            const phrase = this.activePhrase.phrase;
            if (!phrase.checkLetter(button.textContent)) {
                button.classList.add('wrong');
                this.applyWrongAnimation(document.getElementById('phrase'));
                this.removeLife();
                // if this.missed === 5 - disable everything until the win/lose message is displayed
            } else {
                button.classList.add('chosen');
                phrase.showMatchedLetter(button.textContent);
                if (this.checkForWin()) {
                    this.applyChosenAnimation(document.getElementById('phrase'));
                    this.gameOver();
                }
            }
        }
    }

    /**
    * Applies animation (via Animate.css) to the Phrase and Life elements to indicate the player's wrong choice of key.
    * Phrase element "shakes" and life element "pulses".
    * Resets classes at animation end
    * @param  {Object} element - the element we wish to animate
    */
    applyWrongAnimation(element) {
        element.classList.add('animate__animated');
        if (element === document.getElementById('phrase')) {
            element.classList.add('animate__shakeX');
        } else {
            element.classList.add('animate__flash');
        };

        element.addEventListener('animationend', () => {
            if (element === document.getElementById('phrase')) {
                element.classList = 'section';
            } else {
                element.classList = 'tries';
            }
        });
    }

    /**
    * Applies animation (via Animate.css) to the Phrase element when they guess the phrase correctly.
    * Phrase element has a "tada" animation.
    * Resets classes at animation end
    * @param  {Object} element - the element we wish to animate
    */
    applyChosenAnimation(element) {
        element.classList.add('animate__animated');
        if (element === document.getElementById('phrase')) {
            element.classList.add('animate__tada');
        }

        element.addEventListener('animationend', () => {
            if (element === document.getElementById('phrase')) {
                element.classList = 'section';
            };
        });
    }

    /**
    * Removes a life from the scoreboard and increases the number of missed attempts. 
    * If player has 5 missed guesses, then it's game over
    */
    removeLife() {
        this.missed++;
        const life = document.querySelector(`#scoreboard ol > li:nth-child(${this.missed})> img`);
        life.setAttribute('src', 'images/lostHeart.png');
        this.applyWrongAnimation(life);
        if (this.missed === 5) {
            this.gameOver();
        };
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
    * Waits 1 second to show the user what the current state of the board is, then displays the message.
    */
    gameOver() {
        window.setTimeout(() => {
            this.startScreenOverlay.style.display = '';
            this.startScreenOverlay.classList.remove('start');
            const message = document.querySelector('h1#game-over-message');
            if (this.checkForWin()) {
                message.innerHTML = `Congratulations! You guessed the phrase <i>${this.activePhrase.phrase.phrase}</i>. Try again?`;
                this.startScreenOverlay.classList.add('win');
            } else {
                message.innerHTML = `Bummer, you did not guess the phrase <i>${this.activePhrase.phrase.phrase}</i>. Try again?`;
                this.startScreenOverlay.classList.add('lose');
            }
            this.activePhrase = null;
        }, 1000);
    }

    /**
    * Displays the original start screen overlay and displays win/loss game over message.
    * Removes the Phrase display
    * Re-enables all keyboard buttons and resets keyboard character classes
    * Resets lives
    */
    resetGame() {
        this.startScreenOverlay.className = '';
        this.startScreenOverlay.classList.add('start');

        const phraseDisplay = document.getElementById('phrase');
        const phraseDisplayUl = phraseDisplay.firstElementChild;
        const phraseLiAll = phraseDisplayUl.querySelectorAll('li');
        Array.from(phraseLiAll).forEach((li) => phraseDisplayUl.removeChild(li));

        const keyboardButtons = document.querySelectorAll('#qwerty button')
        Array.from(keyboardButtons).forEach((key) => {
            key.removeAttribute('disabled');
            key.classList.remove('wrong');
            key.classList.remove('chosen');
        });

        const lives = document.querySelectorAll('#scoreboard ol li');
        Array.from(lives).forEach((life) => life.firstElementChild.setAttribute('src', 'images/liveHeart.png'));
    }
}
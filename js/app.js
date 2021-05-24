/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = new Game();

// Starts the game when player clicks on Start Game button
document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game();
    game.resetGame();
    game.startGame();
})

// Handle interaction with the onscreen keyboard
document.getElementById('qwerty').addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === 'BUTTON' && game.isGameActive()) {
        game.handleInteraction(e.target);
    }
});

document.addEventListener('keydown', (e) => {
    if ((e.code).includes('Key') && game.isGameActive()) {
        const key = Array.from(document.querySelectorAll('#qwerty button'))
            .find((el) => el.textContent === e.key);
        game.handleInteraction(key);
    }

    if ((e.code === 'Enter') && !game.isGameActive()) {
        game = new Game();
        game.resetGame();
        game.startGame();
    }
});
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
    if (e.target && e.target.nodeName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
})
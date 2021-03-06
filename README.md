# Phrase Hunter: Object-Oriented Programming Game

[View the demo](https://alexhippo.github.io/oop_game)

This project demonstrates Object-Oriented Programming principles with Javascript through a browser-based, word guessing game called "Phrase Hunter". Players will try to guess a random hidden phrase by clicking letters on an onscreen keyboard. 

Each time the player guesses a letter (only once), the program compares the letter the player has chosen with the random phrase. If the letter is in the phrase, the gameboard displays the chosen letters on the screen.

A player continues to select letters until they guess the phrase (and win), or make five incorrect guesses (and lose).

If the player completes the phrase before they run out of guesses, a winning screen appears. If the player guesses incorrectly five times, a losing screen appears.

This project was created as part of the [Treehouse Full Stack Javascript Techdegree](https://teamtreehouse.com/techdegree/full-stack-javascript).

## Styles Changed from Original File
- Renamed the title of the game to "2020 Phrase Hunter"
- Added instructions on how to play the game
- Heading font was changed to "Bungee Shade" from Google Fonts
- Animation from Animate.css (not from the provided css/animate.css, but from the latest version of Animate.css) was added:
  - Phrase element "shakes" if player chooses the incorrect key
  - Life element "flashes" when life is lost
  - Phrase element has a "tada" animation when player guesses the phrase correctly
- Colours (except for the hidden letters in Phrase) have been updated after running the site through an Accessibility Contrast Checker
- Pressing Enter on keyboard on Start Game screen will also start the game
- Moved script tags inside Body as per W3C Markup Validation Service
- Changed main `<div>` to `<main>` to follow semantic markup

## Getting started
### Downloading
Click on the 'Clone or download' button and select 'Download Zip.'

### Installing
Step 1: Unzip the zip file.

Step 2: Open the folder in a text editor, such as VSCode.

Using a text editor, you can view/edit the code or preview the app in a browser.
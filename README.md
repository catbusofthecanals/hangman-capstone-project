# Hangman Capstone Project
This task is to recreate the game Hangman using React

## Installation

To run this game follow the below steps:
1. From the main repository page, select "Code" dropdown and download this directory to your local machine
2. Navigate to this directory in your command line interface
3. If you haven't installed npm, run npm install in the command line interface
4. Run npm start in the command line to start the game
5. If the browser doesn't open automatically, open [http://localhost:3000](http://localhost:3000) to view it in your browser

## Hangman

Hangman is a fun word-guessing game where you the player will try to guess the secret computer-generated word before your ten guesses are up and the stick man is hanged!

## Rules of the Game

To start a new game select 'Play new game.' To start playing begin typing letters on your keyboard to try and identify the generated word. The number of underscores is the number of letters in the word.

Every time you guess a correct word the letter will be populated in the space of the underscore. However, every time you guess a wrong word, you will lose one of your ten guesses, filling in a stage of the hanged man drawing. A wrong letter will appear under the wrong letter heading so you can keep track of your previous guesses. If you guess the word before the drawing is complete, you have won! However, if you use all of your ten guesses, the drawing will complete and you will lose! A pop-up will appear letting you know if you have won or lost the game and it will give you the option of playing the game again where a new word will generated.

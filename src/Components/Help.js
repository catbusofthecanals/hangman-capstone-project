import React from "react";

//create function to display help information
function Help() {
  return (
    <div id="top" className="helpDiv">
      <h1>How to play Hangman</h1>
      <h2>Introduction</h2>
      <p>
        Hangman is a fun word-guessing game where you the player will try to
        guess the secret computer generated word before your ten guesses are up
        and the stick man is hanged!
      </p>
      <h2>Rules of the Game</h2>
      <p>
        To start a new game select 'Play new game.' To start playing begin
        typing letters on your keyboard to try and identify the generated word.
        The number of underscores are the number of letters in the word.
      </p>
      <p>
        Every time you guess a correct word the letter will be populated in the
        space of the underscore. However, everytime you guess a wrong word, you
        will lose one of your ten guesses, filling in a stage of the hanged man
        drawing. A wrong letter will appear under the wrong letter heading so
        you can keep track of your previous guesses. If you guess the word
        before the drawing is complete then you have won! However if you use all
        of your ten guesses, the drawing will complete and you will lose!
      </p>
    </div>
  );
}

//export component to App.js
export default Help;

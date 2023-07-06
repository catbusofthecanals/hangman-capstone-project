import React, { useEffect } from "react";
import { checkWin } from "../helpers/helpers";

const Popup = ({
  correctLetters,
  wrongLetters,
  selectedWord,
  setPlayable,
  playAgain,
  haveWord,
}) => {
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let playable = true;
  //if game status declared in helper.js shows game status as win then display "You've won" message
  if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
    finalMessage = "You won!";
    playable = false;
  }
  //if game status declared in helper.js shows game status as lose then display "You've lose" message
  else if (checkWin(correctLetters, wrongLetters, selectedWord) === "lose") {
    finalMessage = "You lost...";
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    playable = false;
  }
  //set playable to false so game can't be played whilst pop up is active
  useEffect(() => {
    setPlayable(playable);
  });

  //only if a word generated from generateWord function had run and the game has been won or lost then display notification
  if (haveWord === true) {
    return (
      <div
        className="popup-container"
        style={finalMessage !== "" ? { display: "flex" } : {}}
      >
        <div className="popup">
          <h2>{finalMessage}</h2>
          <h3>{finalMessageRevealWord}</h3>
          <button onClick={playAgain}>Play Again</button>
        </div>
      </div>
    );
  }
};
//export component to Game.js
export default Popup;

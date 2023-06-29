import React from "react";

//create function to display letters of word as blank lines or populate with letters if they are correctly keyed
const Word = ({ selectedWord, correctLetters }) => {
  return (
    //split word and into blank letters for initial word underline
    <div className="word">
      {selectedWord.split("").map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ""}
          </span>
        );
      })}
    </div>
  );
};
//export component to Game.js
export default Word;

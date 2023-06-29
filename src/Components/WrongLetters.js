import React from "react";

//create function component to update display of keyed wrong letters
const WrongLetters = ({ wrongLetters }) => {
  //map each letter out as it's pass through and add comma between previous and current letter
  return (
    <div className="wrong-letters-container">
      <div>
        {wrongLetters.length > 0 && <p>Wrong</p>}
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
          .reduce(
            (prev, curr) => (prev === null ? [curr] : [prev, ", ", curr]),
            null
          )}
      </div>
    </div>
  );
};
//export component to Game.js
export default WrongLetters;

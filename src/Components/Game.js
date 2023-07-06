import React, { useState, useEffect } from "react";
import Popup from "../Components/Popup";
import Figure from "../Components/Figure";
import WrongLetters from "../Components/WrongLetters";
import Word from "../Components/Word";
import Notification from "../Components/Notification";
import { showNotification as show, checkWin } from "../helpers/helpers";

//create main function for hangman game
function Game() {
  const [word, setWord] = useState("");
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [haveWord, setHaveWord] = useState(false);

  useEffect(() => {
    //trigger async function for API call when word is set to ""
    if (word === "") {
      const generateWord = async () => {
        try {
          let response = await fetch(
            "https://random-word-api.herokuapp.com/word?lang=en"
          );
          let [results] = await response.json();
          //set state variable to pass props to word component
          setWord(results);
          //set state that a word has been chosen
          setHaveWord(true);
        } catch (error) {
          console.log("error", error);
        }
      };
      generateWord();
    }
  }, [word]);

  /*useEffect function to handle user keying to guess correct letters. Researched how to implement 
  keydown event listeners, 
  resources available here: https://stackoverflow.com/questions/55565444/how-to-register-event-with-useeffect-hooks, 
  https://medium.com/@paulohfev/problem-solving-custom-react-hook-for-keydown-events-e68c8b0a371 and https://www.youtube.com/watch?v=jj0W8tYX_q8 */
  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      //if valid letter key is pressed
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        //if keyed letter is in word, set state variable to pass props to word component
        if (word.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            //display notifcation component if user has already keyed letter
            show(setShowNotification);
          }
        }
        //if keyed letter is not in word, set state variable to pass props to wrongletters component
        else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            //display notifcation component if user has already keyed letter
            show(setShowNotification);
          }
        }
      }
    };
    //add event listener to register the letters the user keys
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [word, correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true);
    //set haveWord to false so win pop up doesn't appear before generateWord function has run
    setHaveWord(false);
    //empty letter arrays and set word to "" to retrigger api call
    setCorrectLetters([]);
    setWrongLetters([]);
    setWord("");
  }

  return (
    <div>
      <div className="game">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={word} correctLetters={correctLetters} />
      </div>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={word}
        setPlayable={setPlayable}
        playAgain={playAgain}
        haveWord={haveWord}
      />
      <Notification showNotification={showNotification} />
    </div>
  );
}

//export component to App.js
export default Game;

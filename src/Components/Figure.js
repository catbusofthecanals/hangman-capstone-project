import React from "react";
import state1 from "../images/state1.png";
import state2 from "../images/state2.png";
import state3 from "../images/state3.png";
import state4 from "../images/state4.png";
import state5 from "../images/state5.png";
import state6 from "../images/state6.png";
import state7 from "../images/state7.png";
import state8 from "../images/state8.png";
import state9 from "../images/state9.png";
import state10 from "../images/state10.png";
import state11 from "../images/state11.png";

//function component to update stick figure with every wrong letter passed as props
const Figure = ({ wrongLetters }) => {
  const errors = wrongLetters.length;
  //for each error return next state of hangman figure
  if (errors === 0) {
    return <img src={state1} alt="" className="figure-container" />;
  } else if (errors === 1) {
    return <img src={state2} alt="" className="figure-container" />;
  } else if (errors === 2) {
    return <img src={state3} alt="" className="figure-container" />;
  } else if (errors === 3) {
    return <img src={state4} alt="" className="figure-container" />;
  } else if (errors === 4) {
    return <img src={state5} alt="" className="figure-container" />;
  } else if (errors === 5) {
    return <img src={state6} alt="" className="figure-container" />;
  } else if (errors === 6) {
    return <img src={state7} alt="" className="figure-container" />;
  } else if (errors === 7) {
    return <img src={state8} alt="" className="figure-container" />;
  } else if (errors === 8) {
    return <img src={state9} alt="" className="figure-container" />;
  } else if (errors === 9) {
    return <img src={state10} alt="" className="figure-container" />;
  } else {
    return <img src={state11} alt="" className="figure-container" />;
  }
};
//export component to Game.js
export default Figure;

import React from "react";
import { Link } from "react-router-dom";

//create menu function to link to Help and Game components
function Menu() {
  return (
    <div className="menuDiv">
      <ul>
        <li>
          <Link to="/Game" className="menuLink">
            Play new game
          </Link>
        </li>
        <li>
          <Link to="/Help" className="menuLink">
            Help
          </Link>
        </li>
      </ul>
    </div>
  );
}

//export component to Header.js
export default Menu;

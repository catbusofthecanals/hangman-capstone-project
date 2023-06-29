import React from "react";
import Logo from "../images/logo.png";
import Menu from "./Menu";

// Create function to display header
function Header() {
  return (
    <header className="header">
      <div className="heading">
        <img src={Logo} alt="logo" className="logo" />
        <h1>Hangman</h1>
      </div>

      <Menu />
    </header>
  );
}

// Export component so it can be used by App.js
export default Header;

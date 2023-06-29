import React from "react";

// Create function to display Welcome page
function Welcome() {
  return (
    <div className="welcome">
      <h1>
        Welcome to Hangman!
        <br />
        Select 'Play new game' and start typing to guess the word!
      </h1>
    </div>
  );
}

// Export component so it can be used by App.js
export default Welcome;

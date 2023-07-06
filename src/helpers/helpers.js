//set 2 second timer for notification before it disappears
export function showNotification(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

//create a checkWin function that analyses state of game throughout
export function checkWin(correct, wrong, word) {
  //set base status state to win so state isn't lose or null player has won
  let status = "win";

  //split word into letters, if correct doesn't include letter then status is set to null
  word.split("").forEach((letter) => {
    if (!correct.includes(letter)) {
      status = "";
    }
  });

  //if there are 10 wrong guesses trigger lose pop up by setting status to low
  if (wrong.length === 10) {
    status = "lose";
  }
  //return state to Game.js
  return status;
}

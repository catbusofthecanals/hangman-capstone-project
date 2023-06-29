//set 2 second timer for notification before it disappears
export function showNotification(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}
//create a checkWin function that analyses state of game
export function checkWin(correct, wrong, word) {
  let status = "win";

  //check if each correct letter is included to trigger win pop up
  word.split("").forEach((letter) => {
    if (!correct.includes(letter)) {
      status = "";
    }
  });

  //if there are 10 wrong guesses trigger lose pop up
  if (wrong.length === 10) {
    status = "lose";
  }

  return status;
}

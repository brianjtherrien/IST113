function runGuessGame(){
    let secret = parseInt(prompt("Player 1: Please enter a number and keep it secret."));
    let count = 0;
    alert("Hand the computer to player 2")

    while (true) {
      let guess = parseInt(prompt("Player 2: Please enter your guess number."));
      count++;

      if (secret > guess){
        alert("You guessed too low.")
      }
      else if (secret > guess){
        alert("You guessed too high.")
      }
      else{
        break;
      }
    }
  alert("You guessed correctly! It took you " + count + " tries!")
}

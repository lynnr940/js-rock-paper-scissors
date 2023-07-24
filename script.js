function getComputerChoice() {
  let computerOptions = ["rock", "paper", "scissors"];
  let computerChoice = computerOptions[Math.floor(Math.random() * 3)];
  return computerChoice;
}

let win;

function compareChoices() {
  let conclusionMessage = "";

  let playerSelection = prompt("Enter your choice! (Rock, Paper, or Scissors)");
  playerSelection = playerSelection.toLowerCase();
  let opponentChoice = getComputerChoice();
  console.log("your selection = " + playerSelection);
  console.log("opponents selection = " + opponentChoice);

  if (playerSelection === opponentChoice) {
    conclusionMessage = "Its a tie! Try again.";
    win = undefined;
  } else if (playerSelection === "rock") {
    if (opponentChoice === "paper") {
      win = true;
      conclusionMessage = "You Lose! Paper covers Rock!";
      win = false;
    } else if (opponentChoice === "scissors") {
      conclusionMessage = "You Win! Rock smashes Scissors!";
      win = true;
    }
  } else if (playerSelection === "paper") {
    if (opponentChoice === "rock") {
      conclusionMessage = "You Win! Paper covers Rock!";
      win = true;
    } else if (opponentChoice === "scissors") {
      conclusionMessage = "You Lose! Scissors cut Paper!";
      win = false;
    }
    if (opponentChoice === "rock") {
      conclusionMessage = "You Lose! Rock smashes Scissors!";
      win = false;
    } else if (opponentChoice === "paper") {
      conclusionMessage = "You Win! Scissors cuts Paper!";
      win = true;
    }
  }
  console.log(conclusionMessage);
  return conclusionMessage;
}

function game(getComputerChoice) {
  let wins = 0;
  let losses = 0;
  for (let i = 0; i < 5; i++) {
    compareChoices();
    if (win === true) {
      wins++;
    } else if (win === false) {
      losses++;
    } else {
        i--;
    }

    console.log("You have " + wins + " wins and " + losses + " losses.");
  }
}

game(getComputerChoice);

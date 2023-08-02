const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const playerSelectionText = document.querySelector(".playerSelection")
const opponentSelectionText = document.querySelector(".opponentSelection")
const conclusionMessageText = document.querySelector(".conclusionMessage")
const gameOverMessage = document.querySelector(".gameOverMessage")
const resetGameMessage = document.querySelector(".resetGameMessage")

rock.addEventListener("click", () => compareChoices("rock"));
paper.addEventListener("click", () => compareChoices("paper"));
scissors.addEventListener("click", () => compareChoices("scissors"));

function getComputerChoice() {
  let computerOptions = ["rock", "paper", "scissors"];
  let computerChoice = computerOptions[Math.floor(Math.random() * 3)];
  return computerChoice;
}

let win;
let totalWins = 0;
let totalLosses = 0;
let totalTies = 0;

function compareChoices(playerSelection) {
  gameOverMessage.textContent = "";
  resetGameMessage.textContent = "";
  let conclusionMessage = "";
  let opponentSelection = getComputerChoice();
  if (playerSelection === opponentSelection) {
    conclusionMessage = "Its a tie! Try again.";
    win = undefined;
  } else if (playerSelection === "rock") {
    if (opponentSelection === "paper") {
      conclusionMessage = "You Lose! Paper covers Rock!";
      win = false;
    } else if (opponentSelection === "scissors") {
      conclusionMessage = "You Win! Rock smashes Scissors!";
      win = true;
    }
  } else if (playerSelection === "paper") {
    if (opponentSelection === "rock") {
      conclusionMessage = "You Win! Paper covers Rock!";
      win = true;
    }
  } else if (playerSelection === "scissors") {
    if (opponentSelection === "rock") {
      conclusionMessage = "You Lose! Rock smashes Scissors!";
      win = false;
    } else if (opponentSelection === "paper") {
      conclusionMessage = "You Win! Scissors cuts Paper!";
      win = true;
    }
  }
  playerSelectionText.textContent = "your selection = " + playerSelection;
  opponentSelectionText.textContent = "opponents selection = " + opponentSelection;
  conclusionMessageText.textContent = conclusionMessage;


if (win === true) {totalWins++;} else if (win === false) {totalLosses++;} else {totalTies++;}
if (totalWins === 5) {
gameOverMessage.textContent = "YOU WIN!!! CONGRATULATIONS WINNER!!"
resetGame();
} else if (totalLosses === 5) {
gameOverMessage.textContent = "YOU LOSE!! HAHAHA! YOU'RE BAD!"
resetGame();
}

}

function resetGame() {
  totalWins = 0;
  totalLosses = 0;
  totalTies = 0;
  resetGameMessage.textContent = "To play again please make another selection!";
  console.log("RESET GAME OCCURENCE");
}

/* function game(getComputerChoice) {
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
} */

//game(getComputerChoice);

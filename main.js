'use strict';


const rockPaperScissor = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  return rockPaperScissor[Math.floor(Math.random() * rockPaperScissor.length)];
}
let playerScore = 0;
let computerScore = 0;

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button")


document.body.appendChild(rockButton);
document.body.appendChild(paperButton);
document.body.appendChild(scissorsButton);

document.body.style.textAlign = "center"



rockButton.textContent = "Rock"
paperButton.textContent = "Paper"
scissorsButton.textContent = "Scissors"


rockButton.addEventListener("click", () => {
  getComputerChoice();
  playRound("rock", getComputerChoice())
});

paperButton.addEventListener("click", () => {
  getComputerChoice();
  playRound("paper", getComputerChoice())
})

scissorsButton.addEventListener('click', () => {
  getComputerChoice();
  playRound("scissors", getComputerChoice())
});


function playRound(playerSelection, computerSelection) {

  // A variable that is declared inside a function only exists as long as the function runs. You need to move your var playerScore = 0; lines outside any function. 
  // This is a crucial element of programming called scope



  if (playerScore === 5) {
    return pText.innerText = `YOU HAVE WON!`
  }
  if (computerScore === 5) {
    return pText.innerText = `You are a LOSER:(`
  }

  if (playerSelection === computerSelection) {
    pText.innerText = `Tie! you both picked ${playerSelection}`

  }
  if ((playerSelection === "rock" && computerSelection === 'scissors') ||
    (playerSelection === "paper" && computerSelection === 'rock') ||
    (playerSelection === "scissors" && computerSelection === "paper")) {
    playerScore++;
    pText.innerText = `You win! ${playerSelection} beats ${computerSelection}`

  }

  if ((playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "paper") ||
    playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    pText.innerText = `You lose! ${computerSelection} beats ${playerSelection} `

  }
  pScore.innerText = "Player Score : " + playerScore;
  compSore.innerText = "Computer Score : " + computerScore;
}

// let playerChoice = prompt("rock, paper or scissors").toLowerCase()


document.body.appendChild(rockButton);
document.body.appendChild(paperButton);
document.body.appendChild(scissorsButton);

document.body.style.textAlign = "center"






const divScore = document.createElement("div");
const pText = document.createElement("p");
const pScore = document.createElement("p");
const compSore = document.createElement("p")

document.body.appendChild(divScore)
divScore.appendChild(pText)
divScore.appendChild(pScore)

divScore.appendChild(compSore)

divScore.style.display = "flex"
divScore.style.justifyContent = "center"
divScore.style.gap = "20px"












// For now, remove the logic that plays exactly five rounds.
// Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
// Add a div for displaying results and change all of your console.logs into DOM methods.
// Display the running score, and announce a winner of the game once one player reaches 5 points.
// You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.
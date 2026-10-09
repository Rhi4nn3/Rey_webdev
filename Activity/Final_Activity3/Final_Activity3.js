let choices = ["rock", "paper", "scissor"]
let playerDisplay = document.getElementById('playerDisplay');
let computerDisplay = document.getElementById('computerDisplay');
let resultDisplay = document.getElementById('resultDisplay');
let playerScore = 0;
let computerScore = 0;

function startGame(playerChoice) {
    let computerChoice = choices [Math.floor(Math.random() *3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    }
    
    else{
    
    switch(playerChoice){
    case "Rock" :
        results = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE";
        break;

        case "Paper" :
        results = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE";
        break;

        case "Scissors" :
        results = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE";
        break;
        }
         playerDisplay.textContent = `Player: ${playerChoice}`;
        computerDisplay.textContent = `Computer: ${computerChoice}`;
        resultDisplay.textContent = `Result: ${result}`;
    }
}








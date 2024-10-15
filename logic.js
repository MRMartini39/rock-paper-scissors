const btnDiv = document.querySelector(".buttons");
const scoreDiv = document.querySelector(".score");
const resultDiv = document.querySelector(".result");

const btnRock = document.createElement("button");
const btnPaper = document.createElement("button");
const btnScissors = document.createElement("button");

const playerScoreText = document.createElement("p");
const computerScoreText = document.createElement("p");

const resultText = document.createElement("p");

btnDiv.appendChild(btnRock);
btnDiv.appendChild(btnPaper);
btnDiv.appendChild(btnScissors);
scoreDiv.appendChild(playerScoreText);
scoreDiv.appendChild(computerScoreText);
resultDiv.appendChild(resultText);

btnRock.addEventListener("click", () => {
    resultText.textContent = playRound("rock", getComputerChoice());
});
btnPaper.addEventListener("click", () => {
    resultText.textContent = playRound("paper", getComputerChoice());
});
btnScissors.addEventListener("click", () => {
    resultText.textContent = playRound("scissors", getComputerChoice());
});

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {

    function getRandomInt() {
        return Math.floor(Math.random() * 2);
    }

    let choice = getRandomInt()
    if (choice == 0) {
        return "rock";
    }
    if (choice == 1) {
        return "paper";
    }
    return "scissors";
}


    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock") {
            if (computerChoice == "paper") {
                computerScore += 1;
                computerScoreText.textContent = computerScore;
                return "You Lose! Paper beats rock. "
            } else if (computerChoice == "rock") {
                return "It's a Tie! Rock nullifies rock. "
            } else {
                humanScore += 1;
                playerScoreText.textContent = humanScore;
                return "You Win! Rock beats scissors. "
            }
        } else if (humanChoice == "scissors") {
            if (computerChoice == "rock") {
                computerScore += 1;
                computerScoreText.textContent = computerScore;
                return "You Lose! Rock beats scissors. "
            } else if (computerChoice == "scissors") {
                return "It's a Tie! Scissors nullifies scissors. "
            } else {
                humanScore += 1;
                playerScoreText.textContent = humanScore;
                return "You Win! Scissors beats paper. "
            }
        } else  {
            if (computerChoice == "scissors") {
                computerScore += 1;
                computerScoreText.textContent = computerScore;
                return "You Lose! Scissors beats paper. "
            } else if (computerChoice == "paper") {
                return "It's a Tie! paper nullifies paper. "
            } else {
                humanScore += 1;
                playerScoreText.textContent = humanScore;
                return "You Win! Paper beats rock. "
            }
        }
    }



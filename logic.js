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
                return "You Lose! Paper beats rock. "
            } else if (computerChoice == "rock") {
                return "It's a Tie! Rock nullifies rock. "
            } else {
                humanScore += 1;
                return "You Win! Rock beats scissors. "
            }
        } else if (humanChoice == "scissors") {
            if (computerChoice == "rock") {
                computerScore += 1;
                return "You Lose! Rock beats scissors. "
            } else if (computerChoice == "scissors") {
                return "It's a Tie! Scissors nullifies scissors. "
            } else {
                humanScore += 1;
                return "You Win! Scissors beats paper. "
            }
        } else  {
            if (computerChoice == "scissors") {
                computerScore += 1;
                return "You Lose! Scissors beats paper. "
            } else if (computerChoice == "paper") {
                return "It's a Tie! paper nullifies paper. "
            } else {
                humanScore += 1;
                return "You Win! Paper beats rock. "
            }
        }
    }

const btnDiv = document.querySelector(".buttons");
const scoreDiv = document.querySelector(".score");
const resultDiv = document.querySelector(".result");

const btnRock = document.createElement("button");
const btnPaper = document.createElement("button");
const btnScissors = document.createElement("button");

btnRock.addEventListener("click", () => {
    resultDiv.textContent = playGame("rock", getComputerChoice());
});
btnPaper.addEventListener("click", () => {
   resultDiv.textContent = playGame("paper", getComputerChoice());
});
btnScissors.addEventListener("click", () => {
    resultDiv.textContent = playGame("scissors", getComputerChoice());
});

btnDiv.appendChild(btnRock);
btnDiv.appendChild(btnPaper);
btnDiv.appendChild(btnScissors);


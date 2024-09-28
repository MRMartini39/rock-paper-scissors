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

function getHumanChoice() {
    return prompt("Rock, Paper, or Scissors?").toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
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

    for (let i = 0; i < 5; i++) {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
        console.log("The score is " 
            + humanScore.toString() 
            + " - " 
            + computerScore.toString());
    }

    
}
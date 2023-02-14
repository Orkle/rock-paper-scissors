// make function that chooses the computer play randomly from an array
function getComputerChoice () {
    let choice = ["rock", "paper", "scissors"];
    let randomChoiceNum = Math.floor(Math.random()*choice.length);
    return choice[randomChoiceNum];
}

// make function that prompts user for their choice of rock, paper, or scissors
function getPlayerChoice () {
    return prompt("What do you wish to play? Rock, paper, or scissors: ").toLowerCase()
}

// make function that plays one round, declares the winner with explanation
    // takes player and computer choices as parameters
function playRound (playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || 
    playerSelection === "scissors" && computerSelection === "paper") {
        console.log(`You win!\nPlayer: ${playerSelection}\n   beats\nComputer: ${computerSelection}`);
        return "win";
    } else if (computerSelection === "rock" && playerSelection === "scissors" || computerSelection === "paper" && 
    playerSelection === "rock" || computerSelection === "scissors" && playerSelection === "paper") {
        console.log(`You lose!\nComputer: ${computerSelection}\n   beats\nPlayer: ${playerSelection}`);
        return "lose";
    } else if (playerSelection === computerSelection) {
        console.log("It's a tie...");
        return 0;
    } else {
        console.log("Please pick a valid option.");
    }
}

// make function that plays five rounds
    // take playRound as a parameter
    // loops through 5 times 
    // declares winner at the end
function game() {
    for (let x = 0; x < 5; x++) {
        playRound(getPlayerChoice(), getComputerChoice());
    }
}

game()
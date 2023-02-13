// make function that plays one round, declares the winner with explanation
    // takes player and computer choices as parameters
    // goes through 
// make function that plays five rounds

// make a function that chooses, at random, the computer selection
    // function returns choice



function getComputerChoice () {
    let choice = ["rock", "paper", "scissors"];
    let randomChoiceNum = Math.floor(Math.random()*choice.length);
    return choice[randomChoiceNum];
}

function getPlayerChoice () {
    return prompt("What do you wish to play? Rock, paper, or scissors: ").toLowerCase()
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || 
    playerSelection === "scissors" && computerSelection === "paper") {
        console.log(`You win!\nPlayer: ${playerSelection}\n   beats\nComputer: ${computerSelection}`);
    } else if (computerSelection === "rock" && playerSelection === "scissors" || computerSelection === "paper" && 
    playerSelection === "rock" || computerSelection === "scissors" && playerSelection === "paper") {
        console.log(`You lose!\nComputer: ${computerSelection}\n   beats\nPlayer: ${playerSelection}`);
    } else if (playerSelection === computerSelection) {
        console.log("It's a tie...");
    } else {
        console.log("Please pick a valid option.");
    }
}

playRound(getPlayerChoice(), getComputerChoice())

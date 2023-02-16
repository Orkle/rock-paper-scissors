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
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {
        console.log(`You win!\nPlayer: ${playerSelection}\n   beats\nComputer: ${computerSelection}`);
        return 1;
    } else if (computerSelection === "rock" && playerSelection === "scissors" || computerSelection === "paper" &&
        playerSelection === "rock" || computerSelection === "scissors" && playerSelection === "paper") {
        console.log(`You lose!\nComputer: ${computerSelection}\n   beats\nPlayer: ${playerSelection}`);
        return 0;
    } else if (playerSelection === computerSelection) {
        console.log("It's a tie...");
        return 2;
    } else {
        console.log("Please pick a valid option.");
        return null;
    }
}

// make function that plays five rounds
    // loops through 5 times 
    // declares winner at the end
function game() {
    let win = 0;
    let lose = 0;
    for (let i = 0; i < 5; i++) {
        let winLose = playRound(getPlayerChoice(), getComputerChoice());
        if (winLose === 1) {
            win += 1;
        } else if (winLose === 0) {
            lose += 1;
        } else if (winLose === null) {
            i -= 1;
        } else {
            win += 0;
            lose += 0;
        }
    }
    if (win > lose) {
        console.log(`You win! Score: ${win} to ${lose}`);
    } else if (win < lose) {
        console.log(`You lose... Score: ${win} to ${lose}`);
    } else {
        console.log("Tie Game!")
    }
}

game()
// make function that chooses the computer play randomly from an array
function getComputerChoice () {
    let choice = ["rock", "paper", "scissors"];
    let randomChoiceNum = Math.floor(Math.random()*choice.length);
    return choice[randomChoiceNum];
}

// make function that prompts user for their choice of rock, paper, or scissors
function getPlayerChoice () {
    // return prompt("What do you wish to play? Rock, paper, or scissors: ").toLowerCase()
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
        console.log("It's a tie... Try again!");
        //alert("It's a tie... Try again!");
        return 2;
    } else {
        console.log("Please pick a valid option.");
        //alert("Please pick a valid option.")
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
            i -= 1;
        }
    }
    if (win > lose) {
        console.log(`You win! Score: ${win} to ${lose}`);
        alert(`You win! Score: ${win} to ${lose}`);
    } else if (win < lose) {
        console.log(`You lose... Score: ${win} to ${lose}`);
        alert(`You lose... Score: ${win} to ${lose}`);
    } else {
        console.log("Tie Game!")
    }
}

// Plays one round of rock paper scissors
function play(e) {
    if (e.target.id === "rock") {
        playRound("rock", getComputerChoice());
    }
    else if (e.target.id ==="paper") {
        playRound("paper", getComputerChoice());
    }
    else {
        playRound("scissors", getComputerChoice());
    }
}

// Adds class to make buttons glow with box shadow
function addHoverGlow(e) {
    if (e.target.id == "rock") {
        const glow = document.querySelector('.fist');
        glow.classList.add('hover');
    }
    else if (e.target.id == "paper") {
        const glow = document.querySelector('.sheet');
        glow.classList.add('hover');
    }
    else if (e.target.id == "scissors") {
        const glow = document.querySelector('.slice');
        glow.classList.add('hover');
    }
    else {
        return;
    }
}

function removeHoverGlow(e) {
    if (e.target.id === "rock") {
        const glowRemove = document.querySelector('.fist');
        glowRemove.classList.remove('hover');
    }
    else if (e.target.id === "paper") {
        const glowRemove = document.querySelector('.sheet');
        glowRemove.classList.remove('hover');
    }
    else if (e.target.id === "scissors") {
        const glowRemove = document.querySelector('.slice');
        glowRemove.classList.remove('hover');
    }
    else {
        return;
    }
}

// Removes green glow from a selected button
function removeClickedGlow (e) {
    const rockGlowRemove = document.querySelector('.fist');
    const paperGlowRemove
}

// Add glow to buttons when clicked
function addClickedGlow(e) {
    if (e.target.id == "rock") {
        const glow = document.querySelector('.fist');
        glow.classList.add('clicked');
    }
    else if (e.target.id == "paper") {
        const glow = document.querySelector('.sheet');
        glow.classList.add('clicked');
    }
    else if (e.target.id == "scissors") {
        const glow = document.querySelector('.slice');
        glow.classList.add('clicked');
    }
    else {
        return;
    }
}

// Plays a round when the buttons are clicked
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => btn.addEventListener('click', play));


// Makes buttons glow when clicked
const glowFistClicked = document.querySelector('.fist');
glowFistClicked.addEventListener('mousedown', addClickedGlow);

const glowSheetClicked = document.querySelector('.sheet');
glowSheetClicked.addEventListener('mousedown', addClickedGlow);

const glowSliceClicked = document.querySelector('.slice');
glowSliceClicked.addEventListener('mousedown', addClickedGlow);


// Makes the buttons glow when mouse is over the button
const glowFistHover = document.querySelector('.fist');
glowFistHover.addEventListener('mouseover', addHoverGlow);

const glowSheetHover = document.querySelector('.sheet');
glowSheetHover.addEventListener('mouseover', addHoverGlow);

const glowSliceHover = document.querySelector('.slice');
glowSliceHover.addEventListener('mouseover', addHoverGlow);


// Removes glow from buttons when mouse is released
const noGlowFistMouseUp = document.querySelector('.fist');
noGlowFistMouseUp.addEventListener('mouseup', removeHoverGlow);

const noGlowSheetMouseUp = document.querySelector('.sheet');
noGlowSheetMouseUp.addEventListener('mouseup', removeHoverGlow);

const noGlowSliceMouseUp = document.querySelector('.slice');
noGlowSliceMouseUp.addEventListener('mouseup', removeHoverGlow);


// Removes glow from buttons when mouse isn't on the object
const noGlowFistMouseLeave = document.querySelector('.fist');
noGlowFistMouseLeave.addEventListener('mouseleave', removeHoverGlow);

const noGlowSheetMouseLeave = document.querySelector('.sheet');
noGlowSheetMouseLeave.addEventListener('mouseleave', removeHoverGlow);

const noGlowSliceMouseLeave = document.querySelector('.slice');
noGlowSliceMouseLeave.addEventListener('mouseleave', removeHoverGlow);


// REMINDER: for the play button, try a function that returns the id of the button with the clicked class
// Chooses the computer play randomly from an array
function getComputerChoice () {
    let choice = ["rock", "paper", "scissors"];
    let randomChoiceNum = Math.floor(Math.random()*choice.length);
    return choice[randomChoiceNum];
}

// Prompts user for their choice of rock, paper, or scissors
function getPlayerChoice () {
    // return prompt("What do you wish to play? Rock, paper, or scissors: ").toLowerCase()
}

// Plays one round, declares the winner with explanation
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

// Plays five rounds
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
    } else if (e.target.id ==="paper") {
        playRound("paper", getComputerChoice());
    } else {
        playRound("scissors", getComputerChoice());
    }
}

// Adds class to make buttons glow with box shadow when mouse hovers over them
function addHoverGlow(e) {
    if (e.target.id == "rock") {
        const glow = document.querySelector('.fist');
        glow.classList.add('hover');
    } else if (e.target.id == "paper") {
        const glow = document.querySelector('.sheet');
        glow.classList.add('hover');
    } else if (e.target.id == "scissors") {
        const glow = document.querySelector('.slice');
        glow.classList.add('hover');
    } else {
        return;
    }
}

// Removes glow from buttons in which mouse is hovering
function removeHoverGlow(e) {
    if (e.target.id === "rock") {
        const glowRemove = document.querySelector('.fist');
        glowRemove.classList.remove('hover');
    } else if (e.target.id === "paper") {
        const glowRemove = document.querySelector('.sheet');
        glowRemove.classList.remove('hover');
    } else if (e.target.id === "scissors") {
        const glowRemove = document.querySelector('.slice');
        glowRemove.classList.remove('hover');
    } else {
        return;
    }
}

// Removes glow from rock button when another button is pressed
function removeRockGlow() {
    const rockGlowRemove = document.querySelector('.fist');
    rockGlowRemove.classList.remove('clicked');
}

// Removes glow from paper button when another button is pressed
function removePaperGlow() {
    const paperGlowRemove = document.querySelector('.sheet');
    paperGlowRemove.classList.remove('clicked');
}

// Removes glow from scissors button when another button is pressed
function removeScissorsGlow() {
    const scissorsGlowRemove = document.querySelector('.slice');
    scissorsGlowRemove.classList.remove('clicked');
}

// Add glow to buttons when clicked
let rockIsClicked = false;
let paperIsClicked = false;
let scissorsIsClicked = false;
function addClickedGlow(e) {
    if (e.target.id == "rock") {
        const glow = document.querySelector('.fist');
        glow.classList.toggle('clicked');
        removePaperGlow();
        removeScissorsGlow();
        rockIsClicked = true;
    } else if (e.target.id == "paper") {
        const glow = document.querySelector('.sheet');
        glow.classList.toggle('clicked');
        removeRockGlow();
        removeScissorsGlow();
        paperIsClicked = true;
    } else if (e.target.id == "scissors") {
        const glow = document.querySelector('.slice');
        glow.classList.toggle('clicked');
        removeRockGlow();
        removePaperGlow();
        scissorsIsClicked = true;
    } else {
        return;
    }
    console.log(e);
}

// Shrinks shoot button when clicked
function shootClickShrink() {
    const playButton = document.querySelector('.play-button');
    playButton.classList.add('play-clicked');
}

// Reverts shoot buttons size back to normal
function shootClickGrow() {
    const playButton = document.querySelector('.play-button');
    playButton.classList.remove('play-clicked');
}

// Plays a round
function shoot() {
    if (paperIsClicked == true || scissorsIsClicked == true) {
        rockIsClicked = false;
    }
    if (rockIsClicked == true) {
        playRound('rock', getComputerChoice());
        rockIsClicked = false;
    } else if (paperIsClicked == true) {
        playRound('paper', getComputerChoice());
        paperIsClicked = false;
    } else if (scissorsIsClicked == true) {
        playRound('scissors', getComputerChoice());
        scissorsIsClicked = false;
    }
}


// Makes the buttons glow when mouse is over the button
const glowFistHover = document.querySelector('.fist');
glowFistHover.addEventListener('mouseover', addHoverGlow);

const glowSheetHover = document.querySelector('.sheet');
glowSheetHover.addEventListener('mouseover', addHoverGlow);

const glowSliceHover = document.querySelector('.slice');
glowSliceHover.addEventListener('mouseover', addHoverGlow);


// Makes buttons glow when clicked
const glowFistClicked = document.querySelector('.fist');
glowFistClicked.addEventListener('mousedown', addClickedGlow);

const glowSheetClicked = document.querySelector('.sheet');
glowSheetClicked.addEventListener('mousedown', addClickedGlow);

const glowSliceClicked = document.querySelector('.slice');
glowSliceClicked.addEventListener('mousedown', addClickedGlow);


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


// Plays a round when the buttons are clicked
// const buttons = document.querySelectorAll('.btn');
// buttons.forEach(btn => btn.addEventListener('click', play));


// Shrinks shoot button when clicked down
const shootShrink = document.querySelector('.play-button');
shootShrink.addEventListener('mousedown', shootClickShrink);

// Reverts shoot button back to normal when mouse is up
const shootGrow = document.querySelector('.play-button');
shootGrow.addEventListener('mouseup', shootClickGrow);

const readyShoot = document.querySelector('.play-button');
readyShoot.addEventListener('click', shoot);

// TODO: for the play button, try a function that returns the id of the button with the clicked class
// TODO: Add box shadow to shoot button when hovered over
// TODO: Decrease shoot button opacity to 50% until a button has been selected
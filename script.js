// Chooses the computer play randomly from an array
function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    let randomChoiceNum = Math.floor(Math.random()*choice.length);
    return choice[randomChoiceNum];
}

// Turns scoreboard and buttons border green when player wins a round
function winBorder() {
    const winner = document.querySelector(".scoreboard");
    winner.classList.remove('scoreboard-lose');
    winner.classList.add('scoreboard-win');

    const buttonsBorder = document.querySelector('.buttons');
    buttonsBorder.classList.remove('buttons-lose');
    buttonsBorder.classList.add('buttons-win');
}

// Turns scoreboard and buttons border red when player loses a round
function loseBorder() {
    const loser = document.querySelector(".scoreboard");
    loser.classList.remove('scoreboard-win');
    loser.classList.add('scoreboard-lose');

    const buttonsBorder = document.querySelector('.buttons');
    buttonsBorder.classList.remove('buttons-win');
    buttonsBorder.classList.add('buttons-lose');
}

// Turns scoreboard and buttons border white
function resetBorder() {
    const border = document.querySelector('.scoreboard');
    border.classList.remove('scoreboard-win');
    border.classList.remove('scoreboard-lose');

    const buttonsBorder = document.querySelector('.buttons');
    buttonsBorder.classList.remove('buttons-win');
    buttonsBorder.classList.remove('buttons-lose');
}

// Text for when user wins a round
const rockWinText = ["Rock wins!! You're cookin'!!", "You take the W with rock! I didn't think you had it in you..."
, "Rock beats scissors! Keep 'em coming!", "You won the round with rock! thank Go- ummm.. yay!", "Rock for the win! wooo!"
, "Rock and roll baby! get it?! uh... nevermind."]

const paperWinText = ["Paper wins!! Let's go!!", "You take the WIN with paper! I didn't think you had it in you..."
, "Paper beats rock! It covers it all up!", "You won the round with paper! thank Go- ummm.. yay!", "Paper for the win! wooo!"]

const scissorsWinText = ["Scissors wins!! Let's go!!", "You slice God with scissors! He forgives though, trust me bro..."
, "Scissors beats paper! Cut's it right down the middle!", "You won the round with scissors! thank Go- ummm.. yay!"
, "Scissors for the win! wooo!"]

// Text for when user loses a round
const rockLoseText = ["Ouch... your rock was easily covered by God.", "You got ROCKED by God! Get it??? You chose ro- nevermind..."
, "God smashed your rock with *checks notes* ... paper..?", "You'll get 'em next time, rock cowboy.", "Lost to paper! how embarrassing."
, "How do you lose with rock?!"]

const paperLoseText = ["God slices your paper into infinite pieces!", "Nice try, but paper is too weak against scissors.."
, "Maybe try rock or scissors? Or just paper again..", "Paper just wasn't it. Think carefully!", "Paper has lost!! Cut in two!"
, "Unfortunately, Your paper was no match for God almighty."]

const scissorsLoseText = ["Your cheap scissors were easily smashed by a rock.", "Going against Gods rock? Are you nuts?!"
, "Gods rock called Earth absolutely wrecks your scissors", "Scissors were not the choice. Not the choice at all..."
, "Scissors do not cut through rock. How did you not know that?", "Nice guess, but scissors lose to rock."]

// Randomly choses a phrase from the win or lose texts
function chooseText (winnerText) {
    let randomChoiceNum = Math.floor(Math.random()*winnerText.length);
    return winnerText[randomChoiceNum];
}
// Plays one round, declares the winner with explanation
let pScore = 0;
let cScore = 0;
function playRound(playerSelection, computerSelection) {
    if (pScore === 5 || cScore === 5) {
        const shootButton = document.querySelector('.play-button');
        shootButton.classList.add('unselected');
    }
    if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {
        pScore += 1;
        if (playerSelection === "rock") {
            const tie = document.getElementById('text-area');
            tie.textContent = chooseText(rockWinText);
        } else if (playerSelection === "paper") {
            const tie = document.getElementById('text-area');
            tie.textContent = chooseText(paperWinText);
        } else {
            const tie = document.getElementById('text-area');
            tie.textContent = chooseText(scissorsWinText);
        }
        winBorder();
        if (pScore != 5) {
            setTimeout(resetBorder, 1000);
            setTimeout(resetText, 2200);
        }
        return 1;
    } else if (computerSelection === "rock" && playerSelection === "scissors" || computerSelection === "paper" &&
        playerSelection === "rock" || computerSelection === "scissors" && playerSelection === "paper") {
        cScore += 1;
        if (playerSelection === "rock") {
            const tie = document.getElementById('text-area');
            tie.textContent = chooseText(rockLoseText);
        } else if (playerSelection === "paper") {
            const tie = document.getElementById('text-area');
            tie.textContent = chooseText(paperLoseText);
        } else {
            const tie = document.getElementById('text-area');
            tie.textContent = chooseText(scissorsLoseText);
        }
        loseBorder();
        if (cScore != 5) {
            setTimeout(resetBorder, 1000);
            setTimeout(resetText, 2200);
        }
        return 0;
    } else if (playerSelection === computerSelection) {
        const tie = document.getElementById('text-area');
        tie.textContent = "It's a tie! Try again..."
        resetBorder();
        setTimeout(resetText, 1500);
        return 2;
    } else {
        return null;
    }
}

// Adds class to make buttons glow with box shadow when mouse hovers over them
function addHoverGlow(e) {
    if (pScore === 5 || cScore === 5) {
        return;
    }
    if (e.target.id == "rock") {
        const glow = document.querySelector('.fist');
        glow.classList.add('hover');
    } else if (e.target.id == "paper") {
        const glow = document.querySelector('.sheet');
        glow.classList.add('hover');
    } else if (e.target.id == "scissors") {
        const glow = document.querySelector('.slice');
        glow.classList.add('hover');
    } else if (e.target.id === "shoot") {
        const glow = document.querySelector('.play-button');
        const rock = document.querySelector('.fist');
        const paper = document.querySelector('.sheet');
        const scissors = document.querySelector('.slice');
        if (rock.classList.contains('clicked') || paper.classList.contains('clicked') || scissors.classList.contains('clicked')) {
            glow.classList.add('hover-shoot');
        }
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
    } else if (e.target.id === "shoot") {
        const glowRemove = document.querySelector('.play-button');
        glowRemove.classList.remove('hover-shoot');
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

// Turns shoot button opacity to 100% when ready
function playButtonReady() {
    const selected = document.querySelector('.play-button');
    selected.classList.remove('unselected');
}

// Turns shoot button opacity to 50% when not ready
function playButtonUnready() {
    const selected = document.querySelector('.play-button');
    selected.classList.add('unselected');
}

// Resets text above scoreboard to default
function resetText() {
    const para = document.querySelector('.rps');
    para.textContent = "Rock, Paper, Scissors....."
}

// Add glow to buttons when clicked
let rockIsClicked = false;
let paperIsClicked = false;
let scissorsIsClicked = false;
function addClickedGlow(e) {
    if (pScore === 5 || cScore === 5) {
        return;
    }
    if (e.target.id == "rock") {
        const glow = document.querySelector('.fist');
        glow.classList.toggle('clicked');
        if (!glow.classList.contains('clicked')) {
            setTimeout(playButtonUnready, 250);
        } else {
            setTimeout(playButtonReady, 250);
        }
        removePaperGlow();
        removeScissorsGlow();
        rockIsClicked = true;
        paperIsClicked = false;
        scissorsIsClicked = false;
    } else if (e.target.id == "paper") {
        const glow = document.querySelector('.sheet');
        glow.classList.toggle('clicked');
        if (!glow.classList.contains('clicked')) {
            setTimeout(playButtonUnready, 250);
        } else {
            setTimeout(playButtonReady, 250);
        }
        removeRockGlow();
        removeScissorsGlow();
        paperIsClicked = true;
        rockIsClicked = false;
        scissorsIsClicked = false;
    } else if (e.target.id == "scissors") {
        const glow = document.querySelector('.slice');
        glow.classList.toggle('clicked');
        if (!glow.classList.contains('clicked')) {
            setTimeout(playButtonUnready, 250);
        } else {
            setTimeout(playButtonReady, 250);
        }
        removeRockGlow();
        removePaperGlow();
        scissorsIsClicked = true;
        rockIsClicked = false;
        paperIsClicked = false;
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
    if (rockIsClicked == true) {
        const clicked = document.querySelector('.fist');
        if (!clicked.classList.contains('clicked')) {
            rockIsClicked = false;
            return;
        }
        playRound('rock', getComputerChoice());
        rockIsClicked = false;
    } else if (paperIsClicked == true) {
        const clicked = document.querySelector('.sheet');
        if (!clicked.classList.contains('clicked')) {
            rockIsClicked = false;
            return;
        }
        playRound('paper', getComputerChoice());
        paperIsClicked = false;
    } else if (scissorsIsClicked == true) {
        const clicked = document.querySelector('.slice');
        if (!clicked.classList.contains('clicked')) {
            rockIsClicked = false;
            return;
        }
        playRound('scissors', getComputerChoice());
        scissorsIsClicked = false;
    }
    setTimeout(removeRockGlow, 1000);
    setTimeout(removePaperGlow, 1000);
    setTimeout(removeScissorsGlow, 1000);
    setTimeout(playButtonUnready, 1000);

    changeScore();
    declareWinner();
}

// Replaces the score aka the p element 
function changeScore() {
    const pPara = document.getElementById('you-score');
    pPara.textContent = pScore;

    const cPara = document.getElementById('god-score');
    cPara.textContent = cScore;
}

// Declares a winner when someone reaches 5 rounds won
function declareWinner() {
    if (pScore === 5) {
        const playerWins = document.getElementById('text-area');
        playerWins.textContent = "You win!!!!! You saved us!! All of humanity is in your debt...";
        readyShoot.removeEventListener('click', shoot);
    }
    if (cScore === 5) {
        const compWins = document.getElementById('text-area');
        compWins.textContent = "God wins... He has decided to reset humanity. Thanks for nothing, it was nice knowing you..."
        readyShoot.removeEventListener('click', shoot);
    }
}

// Shrinks button when mouse is down
function resetDownClick() {
    const resetButton = document.querySelector('.reset');
    resetButton.classList.add('reset-click');
}

// Reloads document
function resetGame() {
    location.reload();
}

// Makes the buttons glow when mouse is hovering over the button
const glowFistHover = document.querySelector('.fist');
glowFistHover.addEventListener('mouseover', addHoverGlow);

const glowSheetHover = document.querySelector('.sheet');
glowSheetHover.addEventListener('mouseover', addHoverGlow);

const glowSliceHover = document.querySelector('.slice');
glowSliceHover.addEventListener('mouseover', addHoverGlow);

const shootButtonHover = document.querySelector('.play-button');
shootButtonHover.addEventListener('mouseover', addHoverGlow);

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

const noGlowPlayButtonLeave = document.querySelector('.play-button');
noGlowPlayButtonLeave.addEventListener('mouseleave', removeHoverGlow);

// Shrinks shoot button when clicked down
const shootShrink = document.querySelector('.play-button');
shootShrink.addEventListener('mousedown', shootClickShrink);

// Reverts shoot button back to normal when mouse is up
const shootGrow = document.querySelector('.play-button');
shootGrow.addEventListener('mouseup', shootClickGrow);

// Plays a round
const readyShoot = document.querySelector('.play-button');
readyShoot.addEventListener('click', shoot);

// Resets game/page
const resetDown = document.querySelector('.reset');
resetDown.addEventListener('mousedown', resetDownClick);

const resetUp = document.querySelector('.reset');
resetUp.addEventListener('mouseup', resetGame);

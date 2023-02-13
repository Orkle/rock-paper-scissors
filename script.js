// make a function that chooses, at random, the computer selection
    // function returns choice
// ask user what they choose: rock, paper, or scissors
    // store in a variable
// make function that plays one round, declares the winner with explanation
// make function that plays five rounds

function getComputerChoice () {
    let choice = ["rock", "paper", "scissors"];
    let randomChoiceNum = Math.floor(Math.random()*choice.length);
    return choice[randomChoiceNum];
}

console.log(getComputerChoice())
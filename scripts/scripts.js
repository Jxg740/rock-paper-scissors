
let computerWins = 0;
let playerWins = 0;

function computerPlay() {
    const myArray = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * myArray.length);
    return myArray[random];
}


function playRound(playerSelection, computerSelection) {
   
    if ((playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'Scissors') ||
        (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'Rock') ||
        (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'Paper')    
    ) {
        playerWins++;
        return `You win! ${capitalize(playerSelection)} beats ${computerSelection}!`;
    } else if ((playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'Paper') ||
               (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'Scissors') ||
               (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'Rock')    
) {
    computerWins++;
    return `You lose. ${computerSelection} beats ${capitalize(playerSelection)}.`;
} else {
    return `It's a draw. ${capitalize(playerSelection)} is the same as ${computerSelection}.`;
}
}

function capitalize(str) {
   return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
}

function game() {
    for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('Rock, Paper, Scissors:');
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    console.log(`You: ${playerWins}`);
    console.log(`Computer: ${computerWins}`);
    
    }
    playerWins > computerWins ? console.log('You WIN!') : console.log('You LOSE');
}

game();

let computerWins = 0;
let playerWins = 0;

const gameEnd = document.querySelector('#game-end');
const results = document.querySelector('#results');
const score = document.querySelector('#score');
const buttons = document.querySelectorAll('button');

score.textContent = `Computer: ${computerWins}   Player: ${playerWins}`;

function playerChoice() {
    const choice = this.getAttribute('value');
    const playerSelection = choice;
    let computerSelection = computerPlay();
    results.textContent = playRound(playerSelection, computerSelection);
}

buttons.forEach((button) => {
    button.addEventListener('click', playerChoice);    
});

function checkWins() {
    if(playerWins === 5) {
        gameEnd.textContent = 'Game Over. You Win!';
        buttons.forEach((button) => {
            button.removeEventListener('click', playerChoice);
        });
    } else if (computerWins === 5) {
        gameEnd.textContent = 'Game Over. You Lose ):';
        buttons.forEach((button) => {
            button.removeEventListener('click', playerChoice);
        });       
    };
};

 function computerPlay() {
    const myArray = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * myArray.length);
    return myArray[random];
};

function playRound(playerSelection, computerSelection) {
   
    if      ((playerSelection === 'rock' && computerSelection === 'Scissors') ||
             (playerSelection === 'paper' && computerSelection === 'Rock') ||
             (playerSelection === 'scissors' && computerSelection === 'Paper')    
    ) {
              playerWins++;
              score.textContent = `Computer: ${computerWins}   Player: ${playerWins}`;        
              checkWins();
        return `You win! ${capitalize(playerSelection)} beats ${computerSelection}!`;
 }  else if ((playerSelection === 'rock' && computerSelection === 'Paper') ||
             (playerSelection === 'paper' && computerSelection === 'Scissors') ||
             (playerSelection === 'scissors' && computerSelection === 'Rock')    
) {
              computerWins++;
              score.textContent = `Computer: ${computerWins}   Player: ${playerWins}`;
              checkWins();
        return `You lose. ${computerSelection} beats ${capitalize(playerSelection)}.`;
}   else if ((playerSelection === 'rock' && computerSelection === 'Rock') ||
             (playerSelection === 'paper' && computerSelection === 'Paper') ||
             (playerSelection === 'scissors' && computerSelection === 'Scissors')    
) {
        return `It's a draw. ${capitalize(playerSelection)} is the same as ${computerSelection}.`;
}

}
//Capitalize first letter 
function capitalize(str) {
   return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
};
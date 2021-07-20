
let computerWins = 0;
let playerWins = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const container = document.querySelector('#results-container');
const results = document.createElement('div');
results.classList.add('results');

const scoreCon = document.querySelector('#score-container');
const score = document.createElement('div');
const gameEnd = document.createElement('div');

score.textContent = `Computer: ${computerWins}   Player: ${playerWins}`;
scoreCon.appendChild(score);



rock.addEventListener('click', () => {
   const playerSelection = 'rock';
   let computerSelection = computerPlay();
   results.textContent = playRound(playerSelection, computerSelection);   
   container.appendChild(results);
   score.textContent = `Computer: ${computerWins}   Player: ${playerWins}`;
   scoreCon.appendChild(score);
   if(playerWins === 5) {
    gameEnd.textContent = 'You Win!'
    scoreCon.appendChild(gameEnd);
} else if (computerWins === 5) {
    gameEnd.textContent = 'You Lose );'
    scoreCon.appendChild(gameEnd);
}
});

paper.addEventListener('click', () => {
    const playerSelection = 'paper';
    let computerSelection = computerPlay();
    results.textContent = playRound(playerSelection, computerSelection);
    container.appendChild(results);
    score.textContent = `Computer: ${computerWins}   Player: ${playerWins}`;
    scoreCon.appendChild(score);
    if(playerWins === 5) {
        gameEnd.textContent = 'You Win!'
        scoreCon.appendChild(gameEnd);
    } else if (computerWins === 5) {
        gameEnd.textContent = 'You Lose );'
        scoreCon.appendChild(gameEnd);
    }
 });

 scissors.addEventListener('click', () => {
    const playerSelection = 'scissors';
    let computerSelection = computerPlay();
    results.textContent = playRound(playerSelection, computerSelection);
    container.appendChild(results);
    score.textContent = `Computer: ${computerWins}   Player: ${playerWins}`;
    scoreCon.appendChild(score);
    if(playerWins === 5) {
        gameEnd.textContent = 'You Win!'
        scoreCon.appendChild(gameEnd);
    } else if (computerWins === 5) {
        gameEnd.textContent = 'You Lose );'
        scoreCon.appendChild(gameEnd);
    }
 });

 function computerPlay() {
    const myArray = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * myArray.length);
    return myArray[random];
}

function playRound(playerSelection, computerSelection) {
   
    if      ((playerSelection === 'rock' && computerSelection === 'Scissors') ||
             (playerSelection === 'paper' && computerSelection === 'Rock') ||
             (playerSelection === 'scissors' && computerSelection === 'Paper')    
    ) {
        playerWins++;
        return `You win! ${capitalize(playerSelection)} beats ${computerSelection}!`;
 }  else if ((playerSelection === 'rock' && computerSelection === 'Paper') ||
             (playerSelection === 'paper' && computerSelection === 'Scissors') ||
             (playerSelection === 'scissors' && computerSelection === 'Rock')    
) {
              computerWins++;
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
}


let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  let result = '';
  if (playerSelection === computerSelection) {
    result = 'It`s a tie';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    result = 'You win, rock beats scissors';
    playerScore++;
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    result = 'You loose, paper beats rock';
    computerScore++;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    result = 'You win, scissors beats paper';
    playerScore++;
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    result = 'You loose, rock beats scissors';
    computerScore++;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    result = 'You win, paper beats rock';
    playerScore++;
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    result = 'You loose, scissors beats paper';
    computerScore++;
  }

  alert(
    'Computer chose ' +
      computerSelection +
      '. You chose ' +
      playerSelection +
      '. ' +
      result +
      ' \n ' +
      playerScore +
      ' (your score) / ' +
      computerScore +
      ' (pc score)'
  );
}

function game() {
  playerScore = 0;
  computerScore = 0;
  let result = '';
  let playerChoice = '';
  for (let i = 0; i < 5; i++) {
    playerChoice = prompt('type your choice (rock, paper or scissors)');
    playerChoice = playerChoice.toLowerCase();
    if (
      playerChoice != 'rock' &&
      playerChoice != 'scissors' &&
      playerChoice != 'paper'
    ) {
      alert('Invalid selection, please type again.');
      i--;
    } else {
      playRound(playerChoice, getComputerChoice());
    }
    playerChoice = '';
  }

  if (playerScore < computerScore) {
    result =
      'You lost! ' +
      playerScore +
      ' (your score) / ' +
      computerScore +
      ' (pc score)';
  } else {
    result =
      'You win! ' +
      playerScore +
      ' (your score) / ' +
      computerScore +
      ' (pc score)';
  }

  console.log(result);
}

game();

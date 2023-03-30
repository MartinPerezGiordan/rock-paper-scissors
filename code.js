document.addEventListener('DOMContentLoaded', function () {
  let playerScore = 0;
  let computerScore = 0;
  let counter = 0;
  let result = '';

  const totalScore = document.getElementById('totalScore');
  const resultsDiv = document.getElementById('roundResult');
  const rockButton = document.getElementById('rock');
  const paperButton = document.getElementById('paper');
  const scissorsButton = document.getElementById('scissors');

  function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function giveScore() {
    score = playerScore + ' (your score) / ' + computerScore + ' (pc score)';
    return score;
  }

  function game() {
    if (counter === 5) {
      counter = 0;

      if (playerScore === computerScore) {
        result = '  IT`S A TIE  ';
      }
      if (playerScore < computerScore) {
        result = '  YOU LOST THE GAME  ';
      }
      if (playerScore > computerScore) {
        result = '  YOU WON THE GAME ';
      }

      playerScore = 0;
      computerScore = 0;
    }

    resultsDiv.textContent = result;
  }

  function playRound(playerSelection, computerSelection) {
    counter++;
    console.log(counter);
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
      result = 'It`s a tie';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
      result = 'You win, rock beats scissors';
      playerScore++;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
      result = 'You loose, paper beats rock';
      computerScore++;
    } else if (
      playerSelection === 'scissors' &&
      computerSelection === 'paper'
    ) {
      result = 'You win, scissors beats paper';
      playerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
      result = 'You loose, rock beats scissors';
      computerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
      result = 'You win, paper beats rock';
      playerScore++;
    } else if (
      playerSelection === 'paper' &&
      computerSelection === 'scissors'
    ) {
      result = 'You loose, scissors beats paper';
      computerScore++;
    }

    result =
      'Computer chose ' +
      computerSelection +
      '. You chose ' +
      playerSelection +
      '. ' +
      result;

    resultsDiv.textContent = result;
    totalScore.textContent = giveScore();

    game();
  }

  rockButton.addEventListener('click', function () {
    playRound('rock', getComputerChoice());
  });

  paperButton.addEventListener('click', function () {
    playRound('paper', getComputerChoice());
  });

  scissorsButton.addEventListener('click', function () {
    playRound('scissors', getComputerChoice());
  });
});

let playerScore = 0;
let computerScore = 0;
let roundResult;
let roundNumber = 0;

function computerPlay() {
  let result = Math.random();

  if (result <= 0.33) {
    return ('rock');
  } else if (result <= 0.66) {
    return ('paper');
  } else {
    return ('scissors');
  }
}

function playRound(playerSelection, computerSelection) {
  let choice = prompt('Round ' + roundNumber + '\n\nRock, paper, or scissors?');
  playerSelection = choice.toLowerCase();
  computerSelection = computerPlay();

  console.log('The player chose ' + playerSelection + '\. The computer chose ' + computerSelection + '\.');

  if ((playerSelection !== 'rock') && (playerSelection !== 'paper') && (playerSelection !== 'scissors')) {
    console.log('The player didn\'t enter a valid choice. Prompting them again...');
    alert('Please enter a valid choice (rock, paper, or scissors).');
    return playRound();
    } else if (playerSelection === computerSelection) {
      roundResult = 'Draw!';
      return;
    }

  if (playerSelection == 'rock') {
    if (computerSelection == 'paper') {
      computerScore++;
      roundResult = 'You lose! Rock gets covered by paper!';
      return;
    } else {
      playerScore++;
      roundResult = 'You win! Rock smashes scissors!';
    }
  }

  if (playerSelection == 'paper') {
    if (computerSelection == 'scissors') {
      computerScore++;
      roundResult = 'You lose! Paper gets cut by scissors!';
      return;
    } else {
      playerScore++;
      roundResult = 'You win! Paper covers rock!';
    }
  }

  if (playerSelection == 'scissors') {
    if (computerSelection == 'rock') {
      computerScore++;
      roundResult = 'You lose! Scissors gets smashed by rock!';
      return;
    } else {
      playerScore++;
      roundResult = 'You win! Scissors cuts paper!';
    }
  }

}

function game() {
  for (i = 1; i < 6; i++) {
    roundNumber++;
    playRound();

    console.log(roundResult);

    if (i === 5) {
      if (playerScore > computerScore) {
        console.log('You win! The final score was ' + playerScore + ' to ' + computerScore + '\.');
        return;
      } else if (playerScore < computerScore) {
        console.log('Sorry, you lost. The final score was ' + playerScore + ' to ' + computerScore + '\.');
        return;
      } else {
        console.log('The game is a tie! The final score was ' + playerScore + ' to ' + computerScore + '\.');
        return;
      }
    }
  }
}

game();

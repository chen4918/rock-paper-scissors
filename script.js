let roundResult;
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const playerSpan = document.querySelector('#playerSpan');
const computerSpan = document.querySelector('#computerSpan');
const playerSelectText = document.querySelector('#playerSelect');
const computerSelectText = document.querySelector('#computerSelect');
const roundResultText = document.querySelector('.roundResult');
const finalResultText = document.querySelector('.finalResult');
const btns = document.querySelectorAll('.button-container button');

rock.addEventListener('click', (e) =>{
    playerSelection = 'rock';
    game();
})

paper.addEventListener('click', (e) => {
  playerSelection = 'paper';
  game();
})

scissors.addEventListener('click', (e) => {
  playerSelection = 'scissors';
  game();
})

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

function disableBtns() {
  btns.forEach((btn) => {
    btn.disabled = true;
  });
}

function enableBtns() {
  btns.forEach((btn) => {
    btn.disabled = false;
  });
}

function reset() {
  playerSelection = '';
  computerSelection = '';
  playerScore = 0;
  computerScore = 0;
  playerSpan.textContent = playerScore;
  computerSpan.textContent = computerScore;
}

function playAgain() {
  const playAgainBtn = document.createElement('button');
  roundResult = '';
  playerSelectText.textContent = '';
  computerSelectText.textContent = '';
  roundResultText.textContent = roundResult;
  playAgainBtn.textContent = 'Play Again';
  roundResultText.appendChild(playAgainBtn);
  playAgainBtn.addEventListener('click', (e) => {
    enableBtns();
    reset();
    roundResultText.removeChild(playAgainBtn);
    finalResultText.textContent = '';
  });
}

function game() {
  playRound(playerSelection, computerSelection);
  playerSpan.textContent = playerScore;
  computerSpan.textContent = computerScore;
  roundResultText.textContent = roundResult;

  if (playerScore === 5) {
    finalResultText.textContent = "YOU WIN!";
    disableBtns();
    playAgain();
  } else if (computerScore === 5) {
    finalResultText.textContent = "YOU LOSE!";
    disableBtns();
    playAgain();
  }
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  playerSelectText.textContent = 'The player chose ' + playerSelection + '.';
  computerSelectText.textContent = 'The computer chose ' + computerSelection + '.';

  if (playerSelection === computerSelection) {
    roundResult = 'Draw!';
    return;
  };

  if (playerSelection == 'rock') {
    if (computerSelection == 'paper') {
      computerScore++;
      roundResult = 'You lose! Rock gets covered by paper!';
      return;
    } else {
      playerScore++;
      roundResult = 'You win! Rock smashes scissors!';
    }
  };

  if (playerSelection == 'paper') {
    if (computerSelection == 'scissors') {
      computerScore++;
      roundResult = 'You lose! Paper gets cut by scissors!';
      return;
    } else {
      playerScore++;
      roundResult = 'You win! Paper covers rock!';
    }
  };

  if (playerSelection == 'scissors') {
    if (computerSelection == 'rock') {
      computerScore++;
      roundResult = 'You lose! Scissors gets smashed by rock!';
      return;
    } else {
      playerScore++;
      roundResult = 'You win! Scissors cuts paper!';
    }
  };

}

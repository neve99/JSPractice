
const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties: 0
}

updateScoreElem();




function updateScoreElem() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
}
function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';
  if (playerMove === 'Rock') {

    if (computerMove === 'Rock') {
      result = 'Tie';
    } else if (computerMove === 'Paper') {
      result = 'You lose';
    } else {
      result = 'You win';
    }

  } else if (playerMove === 'Paper') {

    if (computerMove === 'Rock') {
      result = 'You win';
    } else if (computerMove === 'Paper') {
      result = 'Tie';
    } else {
      result = 'You lose';
    }

  }
  else {
    if (computerMove === 'Rock') {
      result = 'You lose';
    } else if (computerMove === 'Paper') {
      result = 'You win';
    } else {
      result = 'Tie';
    }

  }

  if (result === 'You win') {
    score.wins += 1;
  } else if (result === 'You lose') {
    score.loses += 1;
  } else {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  /*
  alert(`You picked ${playerMove}, computer picked ${computerMove}. ${result}.
Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`);
  */
  updateScoreElem();

  document.querySelector('.js-result').innerHTML = `${result}`;
  document.querySelector('.js-moves')
    .innerHTML = `You picked <img src="img/${playerMove}-emoji.png" class="img"> computer picked <img src="img/${computerMove}-emoji.png" class="img">`;
}
localStorage.setItem('score', JSON.stringify(score));


function pickComputerMove() {

  const randomNumber = Math.random();
  let computerMove = '';


  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'Rock';

  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'Paper';

  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'Scissor';

  }

  return computerMove;
}




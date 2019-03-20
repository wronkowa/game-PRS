const handsHtml = [...document.querySelectorAll('.chooseHand i')];

const statistic = {
  game: 0,
  winner: 0,
  looser: 0,
  draw: 0,
}
let playerChoose = '';
let aiChoose = '';

const handChoose = (e) => {
  playerChoose = e.target.dataset.option;
  console.log(playerChoose);
  handsHtml.forEach(hand => hand.classList.remove('active'));
  e.target.classList.add('active');
  document.querySelector('.game #playerChoose').textContent = playerChoose;
}

const whoWin = () => {
  if (playerChoose === aiChoose) {
    console.log('remis');
    statistic.draw++;
    document.querySelector('.statistic #draw').textContent = statistic.draw;
    document.querySelector('.game #whoWin').textContent = 'REMIS';
  }
  else if ((playerChoose === 'papier' && aiChoose === 'kamień') || (playerChoose === 'kamień' && aiChoose === 'nożyczki') || (playerChoose === 'nożyczki' && aiChoose === 'papier')) {
    console.log('wygrana');
    statistic.winner++;
    document.querySelector('.statistic #winner').textContent = statistic.winner;
    document.querySelector('.game #whoWin').textContent = 'wygrałeś!';
  }
  else
  //  if ((playerChoose === 'papier' && aiChoose === 'nożyczki') || (playerChoose === 'kamień' && aiChoose === 'papier'))
  {
    console.log('przegrana');
    statistic.looser++;
    document.querySelector('.statistic #looser').textContent = statistic.looser;
    document.querySelector('.game #whoWin').textContent = 'Przegrałeś :(';
  }
}

const startGame = () => {
  // console.log('start');
  if (playerChoose === '') alert('Wybierz dłoń!')
  else {
    // console.log('gramy');
    aiChoose = handsHtml[Math.floor(Math.random() * 3)].dataset.option;
    document.querySelector('.game #aiChoose').textContent = aiChoose;
    statistic.game++;
    // console.log(statistic.game);
    document.querySelector('.statistic #game').textContent = statistic.game;
    whoWin();
  }

}


//clik na dlonie
handsHtml.forEach(hand => hand.addEventListener("click", handChoose))

// przycisk graj:
document.querySelector('.play button').addEventListener('click', startGame);

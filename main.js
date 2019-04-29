const handsHtml = [...document.querySelectorAll('.hands-container i')];

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
  // console.log(playerChoose);
  handsHtml.forEach(hand => hand.classList.remove('active'));
  e.target.classList.add('active');
  document.querySelector('#player-pick').textContent = playerChoose;
}

const whoWin = () => {
  if (playerChoose === aiChoose) {
    // console.log('remis');
    statistic.draw++;
    document.querySelector('#draws').textContent = statistic.draw;
    document.querySelector('.winner h1').textContent = 'REMIS';
  }
  else if ((playerChoose === 'papier' && aiChoose === 'kamień') || (playerChoose === 'kamień' && aiChoose === 'nożyczki') || (playerChoose === 'nożyczki' && aiChoose === 'papier')) {
    // console.log('wygrana');
    statistic.winner++;
    document.querySelector('#wins').textContent = statistic.winner;
    document.querySelector('.winner h1').textContent = 'wygrałeś!';
  }
  else
  //  if ((playerChoose === 'papier' && aiChoose === 'nożyczki') || (playerChoose === 'kamień' && aiChoose === 'papier'))
  {
    // console.log('przegrana');
    statistic.looser++;
    document.querySelector('#looses').textContent = statistic.looser;
    document.querySelector('.winner h1').textContent = 'Przegrałeś :(';
  }
}

const startGame = () => {
  // console.log('start');
  if (playerChoose === '') alert('Wybierz dłoń!')
  else {
    // console.log('gramy');
    aiChoose = handsHtml[Math.floor(Math.random() * 3)].dataset.option;
    document.querySelector('#ai-pick').textContent = aiChoose;
    statistic.game++;
    // console.log(statistic.game);
    document.querySelector('#games').textContent = statistic.game;
    whoWin();
  }

}


//clik na dlonie
handsHtml.forEach(hand => hand.addEventListener("click", handChoose))

// przycisk graj:
document.querySelector('.play button').addEventListener('click', startGame);

//add date to footer

const date = new Date();
const year = date.getFullYear();

document.querySelector('.year').textContent = year;

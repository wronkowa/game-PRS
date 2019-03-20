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



const startGame = () => {
  // console.log('start');
  if (playerChoose === '') alert('Wybierz dłoń!')
  else {
    // console.log('gramy');
    aiChoose = handsHtml[Math.floor(Math.random() * 3)].dataset.option;
    document.querySelector('.game #aiChoose').textContent = aiChoose;
  }

}


//clik na dlonie
handsHtml.forEach(hand => hand.addEventListener("click", handChoose))

// przycisk graj:
document.querySelector('.play button').addEventListener('click', startGame);

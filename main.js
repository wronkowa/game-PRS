// header button - rules
document.querySelector('header button').addEventListener('click', () => {
  document.querySelector(".rules").classList.add('active');
  document.querySelector(".container").classList.add('active');
})

document.querySelector('.rules i').addEventListener('click', () => {
  document.querySelector(".rules").classList.remove('active');
  document.querySelector(".container").classList.remove('active');
})
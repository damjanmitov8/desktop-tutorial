let game = ['rock','scissors','paper']
let chosenWord = Math.floor(Math.random()*game.length)
let computerChoise = game[Math.floor(Math.random()*game.length)]
let emojiMap = {
  rock: '✊',
  paper: '✋',
  scissors: '✌️'
};


let btn = document.getElementById('btn')
let result = document.getElementById('result')
btn.addEventListener('click', function(e){
  let userChoise = e.target.innerText.toLowerCase()
  document.getElementById('user').textContent =`You choose: ${userChoise}${emojiMap[userChoise]}`
  let computerChoise = game[Math.floor(Math.random()*game.length)]
   document.getElementById('computer').textContent =`Computer choose: ${computerChoise}${emojiMap[computerChoise]}`
  if(userChoise === computerChoise){
    result.innerText = 'draw'
    result.style.color = 'gray'
  }else if (
          (userChoise === 'rock' && computerChoise === 'scissors') ||
          (userChoise === 'paper' && computerChoise === 'rock') ||
          (userChoise === 'scissors' && computerChoise === 'paper')){
           result.innerText = 'You Wins'
           result.style.color = 'green'
  }else {
    result.innerText = 'Computer Wins'
    result.style.color = 'red'
  }

})
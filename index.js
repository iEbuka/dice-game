
function startGame () {
  var player1 = prompt('Player 1 name?');
  var player2 = prompt('Player 2 name?');


  if(player1.length === 0 && player2.length === 0) {
     alert('Please enter a name')
  } else {


    player1 = player1.slice(0,1).toUpperCase() + player1.slice(1,player1.length).toLowerCase();
  
    player2 = player2.slice(0,1).toUpperCase() + player2.slice(1,player2.length).toLowerCase();
  
  
    
    
    
    
    document.querySelector('.first-p').textContent = player1;
    document.querySelector('.second-p').textContent = player2;
    
    
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
    
    var randomPicSource1 = "dice" + randomNumber1 + ".png";
    
    var randomPicSource2 = "dice" + randomNumber2 + ".png";
    
    document.querySelector('.first').setAttribute('src', randomPicSource1);
    
    
    
    document.querySelector('.second').setAttribute('src', randomPicSource2);
    
    
    if(randomNumber1 > randomNumber2) {
      document.querySelector('h1').textContent = '🚩'+ player1 + ' wins!'
    } else if (randomNumber2 > randomNumber1) {
      document.querySelector('h1').textContent = player2 + ' wins!🚩'
    } else {
      document.querySelector('h1').textContent = 'Draw!'
    }
  }
  
}





/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundScore,activePlayer,gaming;


// dice = Math.floor(Math.random() * 6) + 1;

// document.querySelector('#current-0').textContent = dice;

init();


document.querySelector(".btn-roll").addEventListener('click',function(){
    if(gaming) {

    // 1. genrating random no
    
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. updating UI
    diceDOM = document.querySelector(".dice");
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-'+dice+'.png';
    // 3. update round score if the rolled no NOT 1
    if(dice !== 1){
        
        // ADD score
        roundScore += dice;

        document.querySelector('#current-'+activePlayer).textContent = roundScore;
        
    }else {
        // Next Player
        nextPlayer();
    }
    }

});

document.querySelector(".btn-hold").addEventListener('click',function(){
 if(gaming){
    scores[activePlayer] += roundScore;
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
    
    if(scores[activePlayer] >= 10){
        document.querySelector('#name-'+activePlayer).textContent = "winner!";
        document.querySelector(".dice").style.display = 'none';
        
        document.querySelector('.player-'+activePlayer+'-panel').classList.add("winner");
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove("active");
        gaming = false;
    }else{
    
    nextPlayer();
}
 }
});

function nextPlayer(){
    
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

}

document.querySelector(".btn-new").addEventListener('click',init);

function init(){
    scores = [0,0];

    roundScore = 0;
    activePlayer = 0;

    gaming=true;
    document.querySelector(".dice").style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.remove("winner");
    document.querySelector('.player-1-panel').classList.remove("winner");
    document.querySelector('.player-0-panel').classList.remove("active");
    document.querySelector('.player-1-panel').classList.remove("active");
    document.querySelector('.player-0-panel').classList.add("active");

}

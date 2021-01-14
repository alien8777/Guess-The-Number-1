'use strict';


const number = Math.trunc(Math.random()*20 )+1;
let score = 20
let attempt_left = 19 
let high_score = 0

// start of the game 
document.querySelector('.check').addEventListener('click', function (){
	const guess = Number(document.querySelector('.guess').value);
	console.log(typeof guess)


	// if there are no guess 
	if ( !guess){
		document.querySelector('.message').textContent = '⛔ No Number 😒'
	}

	//if guess limit exceed 

	else if ( attempt_left === 0) {
		document.querySelector('.message').textContent = 'You Lose The Game 😂'
		document.querySelector('.score').textContent = attempt_left
	}
	
	//if guess is too high 
	else if (guess > number){
			document.querySelector('.message').textContent = '📈 Your Guess Is Too High 😁'
			score --
			document.querySelector('.score').textContent = attempt_left
			attempt_left-- 
		}
	
	//if guess is too low
	else if (guess < number){
		document.querySelector('.message').textContent = '📉 Your Guess Is Too Low 😁'
		score -- 
		document.querySelector('.score').textContent = attempt_left
		attempt_left-- 
	}

	//if won 
	else {
		document.querySelector('.number').style.width = '30rem'
		document.querySelector('body').style.backgroundColor = '#60b347'
		document.querySelector('.message').textContent = 'Yehh You Won ✨✨✨'
	
		document.querySelector('.number').textContent = number
		
		
		if (score>high_score){
			high_score = score;
			document.querySelector('.highscore').textContent = high_score;
		}
		
	}
	
})


// functionality for Playing Again 

document.querySelector('.again').addEventListener('click', function(){

	document.querySelector('body').style.backgroundColor =  '#222';
	document.querySelector('.message').textContent = 'Start guessing...';
	document.querySelector('.number').textContent = '?';
	document.querySelector('.score').textContent = '20' ;
	document.querySelector('.guess').value = ' ';
	document.querySelector('.number').style.width = '15rem'
	document.querySelector('.highscore').textContent = high_score;
	score = 20
	attempt_left = 19 
	
	const number = Math.trunc(Math.random()*20 )+1;
	
})

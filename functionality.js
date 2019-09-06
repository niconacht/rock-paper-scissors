//Function to get playerSelection
const container = document.querySelector('.container');
const playerChoice = document.getElementById('playerChoice');

let  playerSelection = function (event) {
  if (event.target.matches('#rock')) {
    playerChoice.textContent += " Rock";   
     return "rock";
   
}
if (event.target.matches('#paper')) {
  playerChoice.textContent +=  " Paper" ;
  return "paper";
  
}
if (event.target.matches('#scissors')) {
  playerChoice.textContent +=  " Scissors" ;
  return "scissors";
 
}
}

//FUnction to get random string (rock, paper or scissors) (Computer)
function computerPlay () { 
  let items = ["rock", "paper", "scissors"];
      return (items[Math.floor(Math.random()*items.length)]);
 }

 //insert Choice in HTML
let computer = computerPlay();   
const computerChoice = document.querySelector('#computerChoice');

let computerSelection = function(computer) {   
    
    if (computer === "paper") {
        computerChoice.textContent += " Paper";
        return "paper";
      }

    else if (computer === "rock") {
        computerChoice.textContent += " Rock";
        return "rock" ;
    }

    else if (computer === "scissors") {
       computerChoice.textContent += " Scissors";
       return "scissors";
   }
  }
  
  

// //Function to play one Round 
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
let playRound = function(event) {
  let choice1 = playerSelection(event) ;
  let choice2 = computerSelection(computer);
        
  if (choice1 === "rock"){
      if(choice2 === "paper"){
      playerScore.textContent += 0;
      computerScore.textContent += 1;
        return 2;
    } 
    

  else if (choice2 === "scissors") {
    playerScore.textContent += 1;
      computerScore.textContent += 0;
      return 1; 
    } 
  }

  if (choice1 === "paper") {

     if (choice2 === "rock") {
      playerScore.textContent += 0;
      computerScore.textContent += 1;
      return 2;
    } 

     else if (choice2 === "scissors") {
      playerScore.textContent += 1;
      computerScore.textContent += 0;
      return 1;
    }
  }
  
 
  else if (choice1 === "scissors") {
    if (choice2 === "rock") {
      playerScore.textContent += 1;
      computerScore.textContent += 0;
      return 1;
    }

    else if (choice2 === "paper") {
      playerScore.textContent += 0;
      computerScore.textContent += 1;
    return 2;  
   }
   }
   
  }

// let result = playRound(playerSelection(), computerSelection());      

// container.addEventListener('click', playerSelection, {once: true });
// container.addEventListener('click', computerSelection, {once: true}); 
container.addEventListener('click', playRound, {once: true });


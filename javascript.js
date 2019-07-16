// function to randomly return Rock, Paper, Scissors


  
 // function to create 5 rounds of "Rock, Paper, Scissors"
  
  function game5() { 

    let playerScore = 0;
    let computerScore = 0;
      
    for (let i = 0; i < 5; i++) {
  
// function to get random string (rock, paper or scissors), computerchoice
      function computerPlay () {
        let items = ["rock", "paper", "scissors"];
        return items[Math.floor(Math.random()*items.length)]
      }
 // variable to prompt User Input       
        let playerSelection = prompt("rock, paper or scissors? ").toLowerCase();
       
        let computerSelection = computerPlay();
 
//function to play one round of Game and track score
      function playRound(playerSelection, computerSelection) {
        
         if (playerSelection === "rock") {
           if (computerSelection === "paper") {
             computerScore++;
              return ("You loose!")
           } 

         else if (computerSelection === "scissors") {
             playerScore++;
             return ("You win!")       
           }

         else  {
             return ("It's a draw!")
           }
         }  
  ////////////////////////////////////////////////////////////////////        
        
         else if (playerSelection === "paper") {
           if (computerSelection === "rock") {
               playerScore++;
               return ("You win!") 
           } 

           else if (computerSelection === "scissors") {
              computerScore++;
              return ("You loose!")
           }

           else {
                 return ("It's a draw!")
           }
         }
////////////////////////////////////////////////////////////////////  
        
         else if (playerSelection === "scissors") {
           if (computerSelection === "rock") {
              computerScore++;
             return ("You loose!")
           }

         else if (computerSelection === "paper") {
            playerScore++;
            return ("You win!")
          }
  
         else {
            return ("It's a draw!")
          }
      } 
  }  
  ///////////////////////////////////////////////////////////////////// 
    console.log(playRound(computerSelection, playerSelection)); 
      
}
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

//program to output Winner or Looser after 5 rounds of playing Game

if (playerScore > computerScore) {
    console.log("Winner!")
} 

else if (computerScore > playerScore) {
   console.log("Looser!")
} 

else {
   console.log("No winner")
  }
}

game5();

 

  
  

 
      

   
  
  
  
  
  
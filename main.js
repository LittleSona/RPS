function computerPlay(){
   var myArray=["rock","paper","scissors"];
   var computerChoice=myArray [Math.floor(Math.random () * myArray.length)];
   return computerChoice;
}

function playerSelection(){
    Selection=window.prompt("Choose: Rock, Paper, Scissors");
    return Selection
}

function playRound(){

let player = playerSelection().toLowerCase()
let computer = computerPlay()


if(player==="paper" && computer === "rock"){
    console.log("You won, paper beats rock");
    playerScore++
}
else if (player==="paper" && computer === "scissors"){
    console.log("You lost, scissors beat paper");
    computerScore++
}
else if (player==="rock" && computer ==="scissors"){
    console.log("You won, rock beats scissors")
    playerScore++
}
else if (player==="rock" && computer === "paper"){
    console.log("You lost, paper beats rock");
    computerScore++
}

else if (player==="scissors" && computer==="paper"){
    console.log("You won, scissors beats peper");
    playerScore++
}
else if (player==="scissors" && computer === "rock"){
    console.log("You lost, rock beats scissors");
    computerScore++
}
else console.log('Draw')
}

function game(){
for (let i = 0; i < 5; i++) {
       playRound(); 
       console.log("Player Score is  " + playerScore  ,"/ Computer Score is " + computerScore);
     }
     if (playerScore > computerScore){
        console.log("You won, the game")
     }
     else if (computerScore > playerScore){
        console.log("You lost, the game")
     }
     else if (computerScore===playerScore){
        console.log("The game is draw")
     }
}

let playerScore = 0
let computerScore = 0

game();
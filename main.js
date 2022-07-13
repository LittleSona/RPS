function computerPlay(){
   var myArray=["Rock","Paper","Scissors"];
   var computerChoice=myArray [Math.floor(Math.random () * myArray.length)];
   return computerChoice;
}

function playerSelection(){
    Selection=window.prompt("Choose: Rock, Paper, Scissors");
    return Selection
}
function playRound(){

let player = playerSelection()
let computer = computerPlay()


if(player==="Paper" && computer === "Rock"){
    console.log("You won, Paper beats rock");
    playerScore++
}
else if (player==="Paper" && computer === "Scissors"){
    console.log("You lost, scissors beat paper");
    computerScore++
}
else if (player==="Rock" && computer ==="Scissors"){
    console.log("You won, rock beats scissors")
    playerScore++
}
else if (player==="Rock" && computer === "Paper"){
    console.log("You lost, paper beats rock");
    computerScore++
}

else if (player==="Scissors" && computer==="Paper"){
    console.log("You won, Scissors beats peper");
    playerScore++
}
else if (player==="Scissors" && computer === "Rock"){
    console.log("You lost, Rock beats scissors");
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
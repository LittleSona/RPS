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
}
else if (player==="Paper" && computer === "Scissors")
    console.log("You lost, scissors beat paper");

else if (player==="Rock" && computer ==="Scissors"){
    console.log("You won, rock beats scissors")
}
else if (player==="Rock" && computer === "Paper"){
    console.log("You lost, paper beats rock");
}

else if (player==="Scissors" && computer==="Paper"){
    console.log("You won, Scissors beats peper");
}
else if (player==="Scissors" && computer === "Rock"){
    console.log("You lost, Rock beats scissors");
}

else console.log('Draw')
return;
}

function game(){
for (let i = 0; i < 5; i++) {
       playRound(); 
     }
}
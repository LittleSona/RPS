function computerPlay(){
   var myArray=["rock","paper","scissors"];
   var computerChoice=myArray [Math.floor(Math.random () * myArray.length)];
   return computerChoice;
}
let round = 1
function gameRound(){
    if(round>=5){
        winners()
        bigbuttons.forEach(bigbuttons => bigbuttons.removeEventListener("click" , play))
    }
    else round += 1
}

let playerScore = 0
let computerScore = 0


const bigbuttons = document.querySelectorAll(".myBtn")
bigbuttons.forEach(bigbuttons => bigbuttons.addEventListener("click" , play))


function play(e){
    const result = document.querySelector(".result")
    const playerChoice= document.querySelector(".player-choice")
    const computerChoice= document.querySelector(".computer-choice")
console.log(bigbuttons);
    let computer = computerPlay()
    let player = e.target.value;

    playerChoice.textContent=(`player choice:${player}`)
    computerChoice.textContent=(`computer choice:${computer}`)
    
    if(player==="paper" && computer === "rock"){
        result.textContent=("Result: You won, paper beats rock");
        playerScore++
    }
    else if (player==="paper" && computer === "scissors"){
        result.textContent=("Result: You lost, scissors beat paper");
        computerScore++
    }
    else if (player==="rock" && computer ==="scissors"){
        result.textContent=("Result: You won, rock beats scissors")
        playerScore++
    }
    else if (player==="rock" && computer === "paper"){
        result.textContent=("Result: You lost, paper beats rock");
        computerScore++
    }
    
    else if (player==="scissors" && computer==="paper"){
        result.textContent=("Result: You won, scissors beats peper");
        playerScore++
    }
    else if (player==="scissors" && computer === "rock"){
        result.textContent=("Result: You lost, rock beats scissors");
        computerScore++
    }
    else result.textContent=('Result: Draw')

gameScore()
gameRound()
const rounds=document.querySelector(".round")
rounds.textContent=(`Round:${round}`)
}

function gameScore(){
const playerResult= document.querySelector(".player-score")
const computerResult= document.querySelector(".computer-score")

playerResult.textContent=(`player score:${playerScore}`) 
computerResult.textContent=(`computer score:${computerScore}`) 
}  

function winners(){
    const endResult = document.querySelector(".end-result")
    if (playerScore>computerScore){
        endResult.textContent=("You won, the game")
    }
    else if (computerScore>playerScore){
        endResult.textContent=("You lost, the game")
    }
    else if (computerScore===playerScore){
        endResult.textContent=("The game is draw")
    }
}
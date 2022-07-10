function computerPlay(){
   var myArray=["Rock","Paper","Scissors"];
   var computerChoice=myArray [Math.floor(Math.random () * myArray.length)];
   return computerChoice;
}

function playerSelection(){
    Selection=window.prompt("Choose: Rock, Paper, Scissors");
    return Selection;
}





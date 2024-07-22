function getComputerChoice(){
    let number = Math.floor(Math.random() * 3)
    if (number == 1){
        console.log("Rock")
    } else if (number == 2){
        console.log("Paper")
    } else{
        console.log("Scissors")
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper or Scissors?")
    console.log(humanChoice)
}

let humanScore = 0, computerScore = 0




getComputerChoice()
getHumanChoice()
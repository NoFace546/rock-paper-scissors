function getComputerChoice(){
    let number = Math.floor(Math.random() * 3)
    if (number == 1){
        return "rock"
    } else if (number == 2){
        return "paper"
    } else{
        return "scissors"
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper or Scissors?")
    return humanChoice
}



function playRound(humanChoice, computerChoice){
    const humanChoice = humanChoice.lowerCase()

    // Human and AI picks the same
    if (humanChoice == computerChoice){
        return "tie"
    }

    // Human picks Rock
    if (humanChoice == "rock"){
        if (computerChoice == "scissors") {
            return "win"
        } else {
            return "lose"
        }
    }

    // Human picks Paper
    if (humanChoice == "paper"){
        if (computerChoice == "rock") {
            return "win"
        } else {
            return "lose"
        }
    }

    // Human picks sicssors
    if (humanChoice == "scissors"){
        if (computerChoice == "paper") {
            return "win"
        } else {
            return "lose"
        }
    }
}

let humanScore = 0, computerScore = 0


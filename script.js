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

function playRound(playerChoice, computerChoice){
    const humanChoice = playerChoice.toLowerCase()

           
    if (humanChoice == computerChoice){                 //First check to see if they are the same
        humanScore++
        computerScore++
        return
    } else {

    // Human picks Rock
    if (humanChoice == "rock"){
        if (computerChoice == "scissors") {
            humanScore++
            return
        } else {
            computerScore++
            return
        }
    }

    // Human picks Paper
    if (humanChoice == "paper"){
        if (computerChoice == "rock") {
            humanScore++
            return
        } else {
            computerScore++
            return
        }
    }

    // Human picks sicssors
    if (humanChoice == "scissors"){
        if (computerChoice == "paper") {
            humanScore++
            return 
        } else {
            computerScore
            return
        }
    }
}
}

function playGame(){
    let humanScore = 0, computerScore = 0


    const computerChoice = getComputerChoice()
    const humanChoice = getHumanChoice()

    playRound(humanChoice, computerChoice)



    console.log(`You play: ${humanChoice}, AI plays ${computerChoice}
    Your Score: ${humanScore}, AI Score: ${computerScore}`)

}

playGame()
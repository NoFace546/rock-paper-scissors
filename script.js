const buttonArea = document.querySelector("#buttonArea");
const playerArea = document.querySelector("#playerArea");
const computerArea = document.querySelector("#computerArea");
const playerImage = document.querySelector("#playerImage");
const computerImage = document.querySelector("#computerImage")


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

function createSVG(choice, area){
    area.innerHTML = ""
    const SVG = document.createElement("img")
    SVG.src = `images/${choice}-svg.svg`
    area.appendChild(SVG)
}

function playRound(playerChoice, computerChoice){
    createSVG(playerChoice,playerImage)
    createSVG(computerChoice,computerImage)
           
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
            computerScore++
            return
        }
    }
}
}

function checkWinner(playerScore, computerScore){
    if (playerScore == computerScore){
        console.log("It's a tie!")
    } else if(playerScore > computerScore){
        console.log("You win! Congratulations!")
    } else {
        console.log("You loose! Try again.")
    }
}

function playGame(humanChoice){

    const computerChoice = getComputerChoice()

    playRound(humanChoice, computerChoice)



    console.log(`You play: ${humanChoice}, AI plays ${computerChoice}
    Your Score: ${humanScore}, AI Score: ${computerScore}`)

    //checkWinner(humanScore, computerScore)
}

buttonArea.addEventListener("click", (e) => {
    let humanChoice =   e.target.id
    if (humanChoice == "buttonArea"){
        return
    } 

    playGame(humanChoice)


    
})

let humanScore = 0, computerScore = 0

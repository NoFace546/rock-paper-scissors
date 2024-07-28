const buttonArea = document.querySelector("#buttonArea");
const playerArea = document.querySelector("#playerArea");
const computerArea = document.querySelector("#computerArea");
const playerImage = document.querySelector("#playerImage");
const computerImage = document.querySelector("#computerImage")
const playerAreaScore = document.querySelector("#playerAreaScore");
const computerAreaScore = document.querySelector("#computerAreaScore")


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
           
    if (playerChoice == computerChoice){                 //First check to see if they are the same
        humanScore++
        computerScore++
    } else {
        // Human picks Rock
        if (playerChoice == "rock"){
            if (computerChoice == "scissors") {
                humanScore++

            } else {
                computerScore++
 
            }
        }

        // Human picks Paper
        if (playerChoice == "paper"){
            if (computerChoice == "rock") {
                humanScore++
            } else {
                computerScore++
            }
        }

        // Human picks sicssors
        if (playerChoice == "scissors"){
            if (computerChoice == "paper") {
                humanScore++
            } else {
                computerScore++
            }
        }
    }
    playerAreaScore.textContent=humanScore
    computerAreaScore.textContent=computerScore
    rounds++
    if (rounds == 5){
        checkWinner(humanScore, computerScore)
    }
}

function checkWinner(playerScore, computerScore){
    buttonArea.innerHTML = ""
    const span = document.createElement("h1")
    const restartButton = document.createElement(("button"))
    restartButton.textContent ="Restart";
    restartButton.id = "restart";
    restartButton.addEventListener("click", () => {
        window.location.reload();
    })

    if (playerScore == computerScore){
        span.textContent="It's a tie!"
    } else if(playerScore > computerScore){
        span.textContent = "You win! Congratulations!"
    } else {
        span.textContent = "You loose! Try again."
    }
    buttonArea.appendChild(span)
    buttonArea.appendChild(restartButton)
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
    if (humanChoice == "buttonArea" || humanChoice == "restart"){
        return
    } 

    playGame(humanChoice)


    
})

let humanScore = 0, computerScore = 0, rounds = 0

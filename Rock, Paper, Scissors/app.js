const array = ["rock","paper","scissors"]

const playerResult = document.getElementById("player-result")
const compResult = document.getElementById("comp-result")
const moveMade = document.getElementById("move-made")

const winner = document.getElementById("winner")

const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")

const instructions = document.getElementById("instructions")
let scorePlayer = 0;
let scoreComp = 0;
let moveComp = (min,max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
}

rock.addEventListener("click",()=>{
    let compMove = array[moveComp(0,2)];
    if(compMove === array[0]){
        moveMade.textContent = "Rock and rock. It´s a tie!"
    }else if(compMove === array[1]){
        compResult.textContent = ++scoreComp;
        moveMade.textContent = "Paper covers Rock. Computer wins!"
    }else if(compMove === array[2]){
        playerResult.textContent = ++scorePlayer;
        moveMade.textContent = "Rock breaks Scissor. User wins!"
    }
})
paper.addEventListener("click",()=>{
    let compMove = array[moveComp(0,2)];
    if(compMove === array[0]){
        playerResult.textContent = ++scorePlayer;
        moveMade.textContent = "Paper covers Rock. User wins!"
    }else if(compMove === array[1]){
        moveMade.textContent = "Paper and Paper. It´s a tie!"
    }else if(compMove === array[2]){
        compResult.textContent = ++scoreComp;
        moveMade.textContent = "Scissor cuts Paper. Computer wins!"
    }
})
scissors.addEventListener("click",()=>{
    let compMove = array[moveComp(0,2)];
    if(compMove === array[0]){
        compResult.textContent = ++scoreComp;
        moveMade.textContent = "Rock breaks Scissor. Computer wins!"
    }else if(compMove === array[1]){
        playerResult.textContent = ++scorePlayer;
        moveMade.textContent = "Scissor cuts Paper. User wins!"
    }else if(compMove === array[2]){
        moveMade.textContent = "Scissor and Scissor. It´s a tie!"
    }
})

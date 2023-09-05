let answerOne = document.getElementById("answer-1");
let answerTwo = document.getElementById("answer-2");
let answerThree = document.getElementById("answer-3");

let buttonOne = document.getElementById("btn-1")
let buttonTwo = document.getElementById("btn-2")
let buttonThree = document.getElementById("btn-3")

buttonOne.addEventListener("click",() => {
    answerOne.classList.toggle("close")
})
buttonTwo.addEventListener("click",() => {
    answerTwo.classList.toggle("close")
})
buttonThree.addEventListener("click",() => {
    answerThree.classList.toggle("close")
})
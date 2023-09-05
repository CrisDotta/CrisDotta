let button = document.getElementById("btn");
let modal = document.getElementById("modal-open");
let close = document.getElementById("close");

button.addEventListener("click",() => {
    modal.style.display = "block";
})
close.addEventListener("click",() => {
    modal.style.display = "none";
})

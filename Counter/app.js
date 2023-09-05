const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const counterNumber = document.getElementById("counter-number");

let number = 0;

counterNumber.innerText = number;

increase.addEventListener("click", () => {
  number++;
  counterNumber.innerText = number;
  if (number > 0) {
    counterNumber.style.color = "rgb(20, 228, 65)";
  } else if (number === 0) {
    counterNumber.style.color = "black";
  }
});
decrease.addEventListener("click", () => {
  number--;
  counterNumber.innerText = number;
  if (number < 0) {
    counterNumber.style.color = "red";
  } else if (number === 0) {
    counterNumber.style.color = "black";
  }
});
reset.addEventListener("click", () => {
  number = 0;
  counterNumber.innerText = number;
  counterNumber.style.color = "black";
});

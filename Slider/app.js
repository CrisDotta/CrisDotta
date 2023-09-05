const array = [
  { url: "img-1.jpeg" },
  { url: "img-2.jpeg" },
  { url: "" },
  { url: "" },
];
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const img = document.getElementById("image");
const number = document.getElementById("number");
let counter = 0;
let counterImg = 1;
window.addEventListener("DOMContentLoaded", () => {
  img.src = array[counter].url;
  number.textContent = counterImg;
  if (counter === 0) {
    prev.style.display = "none";
  }
});
let slider = (counter) => {
  img.src = array[counter].url;
};

next.addEventListener("click", () => {
  if (counter < array.length - 1) {
    counter++;
    number.textContent = ++counterImg;
    slider(counter);
    prev.style.display = "inline-block";
  }
  if (counter === array.length - 1) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", () => {
  if (counter > 0) {
    next.style.display = "inline-block";
    --counter;
    number.textContent = --counterImg;
    slider(counter);
  }
  if (counter === 0) {
    prev.style.display = "none";
  }
});

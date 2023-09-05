let buttonSimple = document.getElementById("simple");
let buttonHex = document.getElementById("hex");
let colorValue = document.getElementById("color");
let btn = document.getElementById("btn");
let buttonPressed = "simple";

buttonSimple.addEventListener("click", () => {
  buttonPressed = "simple";
});
buttonHex.addEventListener("click", () => {
  buttonPressed = "hex";
});

const arrayOfColors = [
  "maroon",
  "red",
  "orange",
  "yellow",
  "olive",
  "green",
  "purple",
  "fuchsia",
  "lime",
  "teal",
  "aqua",
  "blue",
  "navy",
  "gray",
  "silver",
  "white",
  "black",
];

btn.addEventListener("click", () => {
  if (buttonPressed === "simple") {
    let randomNumber = Math.floor(Math.random() * arrayOfColors.length);
    if (arrayOfColors[randomNumber] === "black") {
      btn.style.color = "white";
      btn.style.borderColor = "white";
    } else {
      btn.style.color = "";
      btn.style.borderColor = "";
    }
    document.body.style.backgroundColor = arrayOfColors[randomNumber];
    let colorString = arrayOfColors[randomNumber];
    let firstLetterUppercase = arrayOfColors[randomNumber]
      .charAt(0)
      .toUpperCase();
    colorValue.innerText =
      firstLetterUppercase +
      arrayOfColors[randomNumber].substring(1, colorString.length);
  }
  if (buttonPressed === "hex") {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    colorValue.innerText = ("#" + randomColor).toUpperCase();
  }
});

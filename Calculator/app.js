const result = document.getElementById("result");

const zero = document.getElementById("0");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");

const plus = document.getElementById("+");
const minus = document.getElementById("-");
const equal = document.getElementById("=");
const multi = document.getElementById("x");
const div = document.getElementById("/");
const clear = document.getElementById("ac");

let number1 = "";
let number2 = "";
let op = "";

const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operators = ["+", "-", "x", "/"];

let flag = false;
let equalFlag = false;
//  number1 = array[0].toFixed();
//  number1 += array[1].toFixed();
//  number1 += array[2].toFixed()
//  number2 = array[0].toFixed();
//  number2 += array[1].toFixed();
//  number2 += array[2].toFixed()


let doMath = (op, number1, number2) => {
  switch (op) {
    case "+":
      return Number(number1) + Number(number2);
    case "-":
      return number1 - number2;
    case "x":
      return number1 * number2;
    case "/":
      return number1 / number2;
  }
};

zero.addEventListener("click", () => {
  if (equalFlag) {
    result.value = "";
    equalFlag = false;
  }
  result.value += 0;
  if (!flag) {
    number1 += numberArray[0].toFixed();
  } else {
    number2 += numberArray[0].toFixed();
  }
});
one.addEventListener("click", () => {
  if (equalFlag) {
    equalFlag = false;
    result.value = "";
  }
  result.value += 1;
  if (!flag) {
    number1 += numberArray[1].toFixed();
  } else {
    number2 += numberArray[1].toFixed();
  }
});

two.addEventListener("click", () => {
  if (equalFlag) {
    equalFlag = false;
    result.value = "";
  }
  result.value += 2;

  if (!flag) {
    number1 += numberArray[2].toFixed();
  } else {
    number2 += numberArray[2].toFixed();
  }
});
three.addEventListener("click", () => {
  if (equalFlag) {
    equalFlag = false;
    result.value = "";
  }
  result.value += 3;

  if (!flag) {
    number1 += numberArray[3].toFixed();
  } else {
    number2 += numberArray[3].toFixed();
  }
});
four.addEventListener("click", () => {
  if (equalFlag) {
    equalFlag = false;
    result.value = "";
  }
  result.value += 4;

  if (!flag) {
    number1 += numberArray[4].toFixed();
  } else {
    number2 += numberArray[4].toFixed();
  }
});
five.addEventListener("click", () => {
  if (equalFlag) {
    equalFlag = false;
    result.value = "";
  }
  result.value += 5;

  if (!flag) {
    number1 += numberArray[5].toFixed();
  } else {
    number2 += numberArray[5].toFixed();
  }
});
six.addEventListener("click", () => {
  if (equalFlag) {
    equalFlag = false;
    result.value = "";
  }
  result.value += 6;

  if (!flag) {
    number1 += numberArray[6].toFixed();
  } else {
    number2 += numberArray[6].toFixed();
  }
});
seven.addEventListener("click", () => {
  if (equalFlag) {
    equalFlag = false;
    result.value = "";
  }
  result.value += 7;

  if (!flag) {
    number1 += numberArray[7].toFixed();
  } else {
    number2 += numberArray[7].toFixed();
  }
});
eight.addEventListener("click", () => {
  if (equalFlag) {
    equalFlag = false;
    result.value = "";
  }
  result.value += 8;

  if (!flag) {
    number1 += numberArray[8].toFixed();
  } else {
    number2 += numberArray[8].toFixed();
  }
});
nine.addEventListener("click", () => {
  if (equalFlag) {
    result.value = "";
    equalFlag = false;
  }
  result.value += 9;

  if (!flag) {
    number1 += numberArray[9].toFixed();
  } else {
    number2 += numberArray[9].toFixed();
  }
});

plus.addEventListener("click", () => {
  result.value = "";
  if ((op = " ")) {
    op = "+";
    flag = true;
  }
});

minus.addEventListener("click", () => {
  result.value = "";
  if ((op = " ")) {
    op = "-";
    flag = true;
  }
});
multi.addEventListener("click", () => {
  result.value = "";
  if ((op = " ")) {
    op = "x";
    flag = true;
  }
});
div.addEventListener("click", () => {
  result.value = "";
  if ((op = " ")) {
    op = "/";
    flag = true;
  }
});

clear.addEventListener("click", () => {
  result.value = "";
  number1 = "";
  number2 = "";
});
equal.addEventListener("click", () => {
  let ele = doMath(op, Number(number1), Number(number2));
  result.value = ele;
  number1 = "";
  number2 = "";
  op = "";
  flag = false;
  equalFlag = true;
  console.log("n1: "+number1)
  console.log("n2: "+number2)
});

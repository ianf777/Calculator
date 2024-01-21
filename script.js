let num1 = 0;
let num2 = 0;
let operator = "";
let currentInput = "";
let alphanumericRegex = /^[a-zA-Z0-9]+$/;
//Operations
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
//Main function
function operate(num1, num2, operator) {
  if (operator == "+") {
    return add(num1, num2);
  } else if (operator == "-") {
    return subtract(num1, num2);
  } else if (operator == "*") {
    return multiply(num1, num2);
  } else if (operator == "/") {
    return divide(num1, num2);
  }
}

//Final function
function compute() {
  console.log(operate(readNum1(), readNum2(), readOperator()));
}

function updateDisplay() {
  display.value = currentInput;
}

//Calculator Keys
let display = document.querySelector(".display__field");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");
let clear = document.getElementById("clear");

//Operator Keys
let addition = document.querySelector(".add");
let subtraction = document.querySelector(".subtract");
let multiplication = document.querySelector(".multiply");
let division = document.querySelector(".divide");
let equals = document.querySelector(".equals");

//number button Listeners
one.addEventListener("click", function () {
  currentInput += "1";
  updateDisplay();
  console.log("clicked");
});
two.addEventListener("click", function () {
  currentInput += "2";
  updateDisplay();
  console.log("clicked");
});
three.addEventListener("click", function () {
  currentInput += "3";
  updateDisplay();
  console.log("clicked");
});
four.addEventListener("click", function () {
  currentInput += "4";
  updateDisplay();
  console.log("clicked");
});
five.addEventListener("click", function () {
  currentInput += "5";
  updateDisplay();
  console.log("clicked");
});
six.addEventListener("click", function () {
  currentInput += "6";
  updateDisplay();
  console.log("clicked");
});
seven.addEventListener("click", function () {
  currentInput += "7";
  updateDisplay();
  console.log("clicked");
});
eight.addEventListener("click", function () {
  currentInput += "8";
  updateDisplay();
  console.log("clicked");
});
nine.addEventListener("click", function () {
  currentInput += "9";
  updateDisplay();
  console.log("clicked");
});
zero.addEventListener("click", function () {
  currentInput += "0";
  updateDisplay();
  console.log("clicked");
});
clear.addEventListener("click", function () {
  currentInput = "";
  updateDisplay();
  console.log("clicked");
});

//operator button listeners
addition.addEventListener("click", function () {
  currentInput += " + ";
  updateDisplay();
  console.log("clicked");
});
subtraction.addEventListener("click", function () {
  currentInput += " - ";
  updateDisplay();
  console.log("clicked");
});
multiplication.addEventListener("click", function () {
  currentInput += " * ";
  updateDisplay();
  console.log("clicked");
});
division.addEventListener("click", function () {
  currentInput += " / ";
  updateDisplay();
  console.log("clicked");
});
equals.addEventListener("click", function () {
  console.log("clicked");
  compute();
});
//Read 1st number
function readNum1() {
  let displayValue = display.value;
  let numForComputing = "";
  for (let i = 0; i < displayValue.length; i++) {
    let currentChar = displayValue[i];
    if (alphanumericRegex.test(currentChar)) {
      numForComputing += currentChar;
    }
    if (currentChar === " ") {
      break;
    }
  }
  console.log(numForComputing);
  return parseInt(numForComputing);
}

//Read 2nd number
function readNum2() {
  let displayValue = display.value;
  let numForComputing = "";
  for (let i = displayValue.length - 1; i >= 0; i--) {
    let currentChar = displayValue[i];
    if (alphanumericRegex.test(currentChar)) {
      numForComputing += currentChar;
    }
    if (currentChar === " ") {
      break;
    }
  }
  console.log(numForComputing);
  return parseInt(numForComputing.split("").reverse().join(""));
}
//Reads operator
function readOperator() {
  let displayValue = display.value;
  let operatorForComputing = "";
  for (let i = 0; i < displayValue.length; i++) {
    let currentChar = displayValue[i];
    if (!alphanumericRegex.test(currentChar)) {
      operatorForComputing += currentChar;
    }
  }
  console.log(operatorForComputing);
  return operatorForComputing.replace(/\s/g, "");
}

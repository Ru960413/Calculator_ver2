let firstOperand = "";
let secondOperand = "";
let currentOperand = null;
const numberBtn = document.querySelectorAll("[data-number]");
const operatorBtn = document.querySelectorAll("[data-operator]");
const clearBtn = document.getElementsByClassName("clearBtn");
const deleteBtn = document.getElementsByClassName("deleteBtn");
const pointBtn = document.getElementsByClassName("pointBtn");
const equalsBtn = document.getElementsByClassName("equalsBtn");
const lastOperationScreen = document.getElementsByClassName(
  "lastOperationScreen"
);
const currentOperationScreen = document.getElementsByClassName(
  "currentOperationScreen"
);
//需要的功能：clear(),deleteNum(),operate(),populateDisplay(),appendPoint(),restScreen()
//addEventListener

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

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "x":
      return multiply(a, b);
    case "÷":
      if (b === 0) return null;
      else return divide(a, b);
    default:
      return null;
  }
}

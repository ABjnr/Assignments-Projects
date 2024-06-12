//Create a function for each operation and set the funtion to be called on click
// or you can just use if else
// set the operator icons to radio

const firstInput = document.querySelector("#firstInput");
const secondInput = document.querySelector("#secondInput");
const calcBtn = document.querySelector("#calcBtn");
const answerDisplay = document.querySelector("#answerDisplay");
const additionBtn = document.querySelector("#additionBtn");
const subtractionBtn = document.querySelector("#subtractionBtn");
const multiplicationBtn = document.querySelector("#multiplicationBtn");
const divisionBtn = document.querySelector("#divisionBtn");
const clearFields = document.querySelector("#clearFields");
const recalculate = document.querySelector("#recalculate");

let total = 0;
let operationClickCount = 0;

calcBtn.onclick = function () {
  CalcBtnClick();
};

clearFields.onclick = function () {
  firstInput.value = "";
  secondInput.value = "";
  additionBtn.checked = false;
  subtractionBtn.checked = false;
  divisionBtn.checked = false;
  multiplicationBtn.checked = false;
  answerDisplay.textContent = ``;
  total = 0;
  operationClickCount = 0;
};

function addition() {
  let fieldOne = Number(firstInput.value);
  let fieldTwo = Number(secondInput.value);
  total = fieldOne + fieldTwo;
  answerDisplay.textContent = `Your answer is: ${total}`;
}
function subtraction() {
  let fieldOne = Number(firstInput.value);
  let fieldTwo = Number(secondInput.value);
  total = fieldOne - fieldTwo;
  answerDisplay.textContent = `Your answer is: ${total}`;
}
function multiplication() {
  let fieldOne = Number(firstInput.value);
  let fieldTwo = Number(secondInput.value);
  total = fieldOne * fieldTwo;
  answerDisplay.textContent = `Your answer is: ${total}`;
}
function division() {
  let fieldOne = Number(firstInput.value);
  let fieldTwo = Number(secondInput.value);
  if (fieldTwo === 0) {
    answerDisplay.textContent = "Division by zero is not allowed.";
    return;
  }
  total = fieldOne / fieldTwo;
  answerDisplay.textContent = `Your answer is: ${total}`;
}
function CalcBtnClick() {
  let inputOne = firstInput.value;
  let fieldOne = Number(inputOne);
  let inputTwo = secondInput.value;
  let fieldTwo = Number(inputTwo);

  if (inputOne === "" || inputTwo === "") {
    answerDisplay.textContent = "Please fill in both fields!";
  } else if (isNaN(fieldOne)) {
    answerDisplay.textContent = `${inputOne} is not a number`;
  } else if (isNaN(fieldTwo)) {
    answerDisplay.textContent = `${inputTwo} is not a number`;
  } else {
    if (
      !additionBtn.checked &&
      !subtractionBtn.checked &&
      !multiplicationBtn.checked &&
      !divisionBtn.checked
    ) {
      answerDisplay.textContent = `Please select an operator (+, -, x, /)`;
    } else {
      if (additionBtn.checked) {
        addition();
      } else if (subtractionBtn.checked) {
        subtraction();
      } else if (multiplicationBtn.checked) {
        multiplication();
      } else if (divisionBtn.checked) {
        division();
      }
    }
  }
}

additionBtn.addEventListener("click", () => onRadioClick("addition"));
subtractionBtn.addEventListener("click", () => onRadioClick("subtraction"));
multiplicationBtn.addEventListener("click", () =>
  onRadioClick("multiplication")
);
divisionBtn.addEventListener("click", () => onRadioClick("division"));

function onRadioClick(operation) {
  if (
    operation === "addition" ||
    operation === "subtraction" ||
    operation === "division" ||
    operation === "multiplication"
  ) {
    operationClickCount++;
    if (operationClickCount > 1) {
      resetAndRecalc();
    }
  }
}

function resetAndRecalc() {
  firstInput.value = total;
  secondInput.value = "";
  answerDisplay.textContent = "";
}

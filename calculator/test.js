/* function addition() {
  const sum = fieldOne + fieldTwo;
  console.log(sum);
  answerDisplay.textContent = `Your answer is: ${sum}`;
}
function subtraction() {
  const sum = fieldOne - fieldTwo;
  console.log(sum);
  answerDisplay.textContent = `Your answer is: ${sum}`;
}
function multiplication() {
  const sum = fieldOne * fieldTwo;
  console.log(sum);
  answerDisplay.textContent = `Your answer is: ${sum}`;
}
function division() {
  const sum = fieldOne / fieldTwo;
  console.log(sum);
  answerDisplay.textContent = `Your answer is: ${sum}`;
}
 */

/* const rad = document.querySelector("#myRadio");

rad.onclick = function () {
  console.log("Hello World!");
}; */

const firstInput = document.querySelector("#firstInput");
const secondInput = document.querySelector("#secondInput");
const calcBtn = document.querySelector("#calcBtn");
const answerDisplay = document.querySelector("#answerDisplay");
const additionBtn = document.querySelector("#additionBtn");
const subtractionBtn = document.querySelector("#subtractionBtn");
const multiplicationBtn = document.querySelector("#multiplicationBtn");
const divisionBtn = document.querySelector("#divisionBtn");
const clearFields = document.querySelector("#clearFields");

let total = 0;
let additionClickCount = 0;
let subtractionClickCount = 0;
let multiplicationClickCount = 0;
let divisionClickCount = 0;

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
  additionClickCount = 0;
  subtractionClickCount = 0;
  multiplicationClickCount = 0;
  divisionClickCount = 0;
};

function addition() {
  let fieldOne = Number(firstInput.value);
  let fieldTwo = Number(secondInput.value);
  total = fieldOne + fieldTwo;
  console.log(total);
  answerDisplay.textContent = `Your answer is: ${total}`;
}

function subtraction() {
  let fieldOne = Number(firstInput.value);
  let fieldTwo = Number(secondInput.value);
  total = fieldOne - fieldTwo;
  console.log(total);
  answerDisplay.textContent = `Your answer is: ${total}`;
}

function multiplication() {
  let fieldOne = Number(firstInput.value);
  let fieldTwo = Number(secondInput.value);
  total = fieldOne * fieldTwo;
  console.log(total);
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
  console.log(total);
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

// Add event listeners for the radio buttons
additionBtn.addEventListener("click", () => handleRadioClick("addition"));
subtractionBtn.addEventListener("click", () => handleRadioClick("subtraction"));
multiplicationBtn.addEventListener("click", () =>
  handleRadioClick("multiplication")
);
divisionBtn.addEventListener("click", () => handleRadioClick("division"));

function handleRadioClick(operation) {
  if (operation === "addition") {
    additionClickCount++;
    if (additionClickCount > 1) {
      resetForNewCalculation();
    }
  } else if (operation === "subtraction") {
    subtractionClickCount++;
    if (subtractionClickCount > 1) {
      resetForNewCalculation();
    }
  } else if (operation === "multiplication") {
    multiplicationClickCount++;
    if (multiplicationClickCount > 1) {
      resetForNewCalculation();
    }
  } else if (operation === "division") {
    divisionClickCount++;
    if (divisionClickCount > 1) {
      resetForNewCalculation();
    }
  }
  console.log(
    `Radio button clicked for ${operation}: ${additionClickCount}, ${subtractionClickCount}, ${multiplicationClickCount}, ${divisionClickCount}`
  );
}

function resetForNewCalculation() {
  firstInput.value = total;
  secondInput.value = "";
  answerDisplay.textContent = "";
}

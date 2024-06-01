const firstInput = document.querySelector("#firstInput");

const secondInput = document.querySelector("#secondInput");

const calcBtn = document.querySelector("#calcBtn");
const answerDisplay = document.querySelector("#answerDisplay");
const additionBtn = document.querySelector("#additionBtn");
const subtractionBtn = document.querySelector("#subtractionBtn");
const multiplicationBtn = document.querySelector("#multiplicationBtn");
const divisionBtn = document.querySelector("#divisionBtn");

//Create a function for each operation and set the funtion to be called on click
// or you can just use if else
// set the operator icons to radio

calcBtn.onclick = function () {
  const inputOne = firstInput.value;
  const fieldOne = Number(inputOne);
  const inputTwo = secondInput.value;
  const fieldTwo = Number(inputTwo);

  if (inputOne === "" || inputTwo === "") {
    answerDisplay.textContent = "Please fill in both fields!";
  } else if (isNaN(fieldOne)) {
    answerDisplay.textContent = `${inputOne} is not a number`;
  } else if (isNaN(fieldTwo)) {
    answerDisplay.textContent = `${inputTwo} is not a number`;
  } else {
    if (
      !additionBtn.checked ||
      !subtractionBtn.checked ||
      !multiplicationBtn.checked ||
      !divisionBtn.checked
    ) {
      answerDisplay.textContent = `Please select an operator (+, -, x, /)`;
    }
    if (!isNaN(fieldOne)) {
      if (additionBtn.checked) {
        const sum = fieldOne + fieldTwo;
        console.log(sum);
        answerDisplay.textContent = `Your answer is: ${sum}`;
      }

      if (subtractionBtn.checked) {
        const sum = fieldOne - fieldTwo;
        console.log(sum);
        answerDisplay.textContent = `Your answer is: ${sum}`;
      }

      if (multiplicationBtn.checked) {
        const sum = fieldOne * fieldTwo;
        console.log(sum);
        answerDisplay.textContent = `Your answer is: ${sum}`;
      }

      if (divisionBtn.checked) {
        const sum = fieldOne / fieldTwo;
        console.log(sum);
        answerDisplay.textContent = `Your answer is: ${sum}`;
      }
    } else {
      answerDisplay.textContent = `invalid input`;
    }
  }
};

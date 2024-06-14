const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");

const rstBtn = document.querySelector("#rstBtn");
const result = document.querySelector("#result");
const allFields = document.querySelectorAll(".buttons");

let clickCount = 0;
let boardValues = Array(9).fill(null);
let xVal = [];
let oVal = [];
const winningCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [2, 5, 8],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];

allFields.forEach((selectedField, index) => {
  selectedField.addEventListener("click", function () {
    if (this.textContent !== "") {
      console.log("This button is already clicked.");
      return;
    }

    clickCount++;
    if (
      clickCount === 1 ||
      clickCount === 3 ||
      clickCount === 5 ||
      clickCount === 7 ||
      clickCount === 9
    ) {
      this.textContent = "X";
      boardValues[index] = "X";
    }
    if (
      clickCount === 2 ||
      clickCount === 4 ||
      clickCount === 6 ||
      clickCount === 8
    ) {
      this.textContent = "O";
      boardValues[index] = "O";
    }
    if (clickCount >= 9) {
      console.log("Game Over");
      result.textContent = "Game Over";
    }
    console.log(boardValues);
  });
});

rstBtn.onclick = function () {
  console.clear();
  btn1.textContent = "";
  btn2.textContent = "";
  btn3.textContent = "";
  btn4.textContent = "";
  btn5.textContent = "";
  btn6.textContent = "";
  btn7.textContent = "";
  btn8.textContent = "";
  btn9.textContent = "";
  clickCount = 0;
  boardValues = Array(9).fill(null);
  xVal = [];
  oVal = [];
  console.log("Reset button clicked");
  console.log(boardValues);
};

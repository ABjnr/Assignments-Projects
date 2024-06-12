const result = document.querySelector("#result");
const allFields = document.querySelectorAll(".buttons");

let clickCount = 0;
const boardValues = Array(9);
const xVal = [];
const oVal = [];

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

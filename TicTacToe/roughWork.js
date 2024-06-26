const allFields = document.querySelectorAll(".buttons");

let clickCount = 0;
const boardValues = Array(9).fill(null);

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
/* 
allFields.forEach((selectedField, index) => {
  selectedField.addEventListener("click", function () {
    if (this.textContent !== "") {
      console.log("This button is already clicked.");
      return;
    }

    clickCount++;

    if (clickCount % 2 !== 0) {
      this.textContent = "X";
      boardValues[index] = "X";
    } else {
      this.textContent = "O";
      boardValues[index] = "O";
    }

    console.log(boardValues);

    if (checkWin("X", boardValues)) {
      console.log("Player One Wins!");
    } else if (checkWin("O", boardValues)) {
      console.log("Player Two Wins!");
    }

    if (clickCount >= 9) {
      console.log("Game Over");
    }
  });
});

function checkWin(player, board) {
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (board[a] === player && board[b] === player && board[c] === player) {
      return true;
    }
  }
  return false;
}

 */

allFields.forEach((selectedField, index) => {
  selectedField.addEventListener("click", function () {
    if (boardValues[index] !== null) {
      console.log("This button is already clicked.");
      return;
    }
    clickCount++;

    const currentPlayer = clickCount % 2 === 0 ? "O" : "X";
    boardValues[index] = currentPlayer;
    this.textContent = currentPlayer;

    console.log(boardValues);
  });
});

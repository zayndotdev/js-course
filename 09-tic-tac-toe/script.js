const cells = document.querySelectorAll(".col");
const heading = document.querySelector("h1");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;
let winner;

const checkDraw = () => board.every((cell) => cell !== "");

const checkWinner = () => {
  // check rows
  if (
    (board[0] !== "" && board[0] === board[1] && board[1] === board[2]) ||
    (board[3] !== "" && board[3] === board[4] && board[4] === board[5]) ||
    (board[6] !== "" && board[6] === board[7] && board[7] === board[8]) ||
    (board[0] !== "" && board[0] === board[3] && board[3] === board[6]) ||
    (board[1] !== "" && board[1] === board[4] && board[4] === board[7]) ||
    (board[2] !== "" && board[2] === board[5] && board[5] === board[8]) ||
    (board[0] !== "" && board[0] === board[4] && board[4] === board[8]) ||
    (board[2] !== "" && board[2] === board[4] && board[4] === board[6])
  ) {
    winner = currentPlayer;
    heading.textContent = `${currentPlayer} Wins`;
  }
};

cells.forEach((cell) =>
  cell.addEventListener("click", (e) => {
    if (!gameOver) {
      if (e.target.textContent === "") {
        e.target.textContent = currentPlayer;
        board[e.target.id] = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        console.log(board);
      }
      if (checkDraw() && !winner) {
        gameOver = true;
        heading.textContent = "It's a Draw!";
      }
    }
  })
);

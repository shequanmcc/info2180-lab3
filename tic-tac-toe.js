// INFO2180 Lab 3 - Exercises 1–5
// Author: Shequan

window.addEventListener("DOMContentLoaded", function () {
  // -------- Query DOM --------
  const boardEl = document.getElementById("board");
  const squares = document.querySelectorAll("#board div");
  const status = document.getElementById("status");
  let newGameBtn = document.getElementById("new-game") || document.querySelector(".btn");

  // Debug logs to verify elements exist
  console.log({
    squaresCount: squares.length,
    hasStatus: !!status,
    hasButton: !!newGameBtn
  });

  // -------- Exercise 1: style cells --------
  squares.forEach(sq => sq.classList.add("square"));

  // -------- Exercise 3: hover feedback --------
  squares.forEach(square => {
    square.addEventListener("mouseenter", () => square.classList.add("hover"));
    square.addEventListener("mouseleave", () => square.classList.remove("hover"));
  });

  // -------- Game state --------
  let currentPlayer = "X";
  let gameOver = false;
  const board = Array(9).fill(null);
  const winningCombos = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  // -------- Exercise 2 & 4: place X/O + check winner --------
  squares.forEach((square, index) => {
    square.addEventListener("click", () => {
      if (gameOver) return;
      if (square.textContent !== "") return;

      square.textContent = currentPlayer;
      square.classList.add(currentPlayer);
      board[index] = currentPlayer;

      if (checkWinner(currentPlayer)) {
        if (status) {
          status.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
          status.classList.add("you-won");
        }
        gameOver = true;
        return;
      }

      // (optional draw)
      // if (board.every(c => c !== null)) { status.textContent = "It's a draw!"; gameOver = true; return; }

      currentPlayer = currentPlayer === "X" ? "O" : "X";
    });
  });

  function checkWinner(player) {
    return winningCombos.some(combo => combo.every(i => board[i] === player));
  }

  // -------- Exercise 5: New Game (click handler) --------
  const defaultStatus = status ? status.textContent : "";

  if (newGameBtn) {
    newGameBtn.addEventListener("click", () => {
      console.log("New Game clicked");
      // reset state
      currentPlayer = "X";
      gameOver = false;
      for (let i = 0; i < board.length; i++) board[i] = null;

      // clear UI
      squares.forEach(sq => {
        sq.textContent = "";
        sq.classList.remove("X", "O", "hover");
      });

      // reset status
      if (status) {
        status.textContent = defaultStatus;
        status.classList.remove("you-won");
      }
    });
  } else {
    console.error('New Game button not found. Ensure id="new-game" or class="btn" exists.');
  }
});

window.addEventListener("DOMContentLoaded", function () {
  const squares = document.querySelectorAll("#board div");
  const status = document.getElementById("status");

  squares.forEach(sq => sq.classList.add("square"));

  // Hover effect
  squares.forEach(function (square) {
    square.addEventListener("mouseenter", () => square.classList.add("hover"));
    square.addEventListener("mouseleave", () => square.classList.remove("hover"));
  });

  // Variables for game logic
  let currentPlayer = "X";
  let gameOver = false;
  const board = Array(9).fill(null);
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  // Handle click
  squares.forEach(function (square, index) {
    square.addEventListener("click", function () {
      if (gameOver) return;
      if (square.textContent === "") {
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);
        board[index] = currentPlayer;

        if (checkWinner(currentPlayer)) {
          status.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
          status.classList.add("you-won");
          gameOver = true;
          return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    });
  });

  // Winner checker
  function checkWinner(player) {
    return winningCombos.some(combo => combo.every(i => board[i] === player));
  }
});

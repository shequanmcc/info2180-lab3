// INFO2180 Lab 3 - Exercise 1 & 2
// Author: Shequan

window.addEventListener("DOMContentLoaded", function () {
  // Select all the <div> elements inside the board
  const squares = document.querySelectorAll("#board div");

  // Exercise 1: add the 'square' class to each board cell
  squares.forEach(function (square) {
    square.classList.add("square");
  });

  // Exercise 2 (part 1): add hover effect
  squares.forEach(function (square) {
    // When the mouse enters the square
    square.addEventListener("mouseenter", function () {
      square.classList.add("hover");
    });

    // When the mouse leaves the square
    square.addEventListener("mouseleave", function () {
      square.classList.remove("hover");
    });
  });

  // Exercise 2 (part 2): Add X or O on click
  let currentPlayer = "X"; // The first move will be X

  squares.forEach(function (square) {
    square.addEventListener("click", function () {
      // Only allow a move if this square is empty
      if (square.textContent === "") {
        // 1️⃣ Put X or O in the square
        square.textContent = currentPlayer;

        // 2️⃣ Style it by adding the class X or O
        square.classList.add(currentPlayer);

        // 3️⃣ Switch turns
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    });
  });
});

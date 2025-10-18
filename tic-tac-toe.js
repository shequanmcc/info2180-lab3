// INFO2180 Lab 3 - Exercise 1
// Author: Shequan McCalla
// Purpose: Add the "square" class to each board cell dynamically

window.addEventListener("DOMContentLoaded", function () {
  // Select all the <div> elements inside the board
  const squares = document.querySelectorAll("#board div");

  // Loop through each one and give it the 'square' class
  squares.forEach(function (square) {
    square.classList.add("square");
  });
});

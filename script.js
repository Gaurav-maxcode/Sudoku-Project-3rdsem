let mistakeCount = 0;

let presetInputArray = [
  [8, 0, 0, 0, 0, 9, 0, 0, 0],
  [0, 0, 6, 0, 0, 0, 0, 4, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 2],
  [0, 3, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 7, 8],
  [6, 0, 0, 0, 4, 0, 0, 0, 0],
  [0, 0, 0, 3, 0, 0, 6, 0, 0],
  [0, 2, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 9, 0, 0, 0, 0, 0, 1],
];

// Event listener for reset button
document.getElementById("resetbtn").addEventListener("click", function () {
  document.getElementById("cell_1_2").value = "";
  document.getElementById("cell_1_2").style.backgroundColor = "#212121";
  mistakeCount = 0;
  console.log(mistakeCount);
});

// Function to reset the game
function resetGame() {
  document.getElementById("cell_1_2").value = "";
  document.getElementById("cell_1_2").style.backgroundColor = "#212121";
  mistakeCount = 0;
}

let mistakeCount = 0;

const presetInputArray = [
  [0, 0, 0, 2, 6, 0, 7, 0, 1],
  [6, 8, 0, 0, 7, 0, 0, 9, 0],
  [1, 9, 0, 0, 0, 4, 5, 0, 0],

  [8, 2, 0, 1, 0, 0, 0, 4, 0],
  [0, 0, 4, 6, 0, 2, 9, 0, 0],
  [0, 5, 0, 0, 0, 3, 0, 2, 8],

  [0, 0, 9, 3, 0, 0, 0, 7, 4],
  [0, 4, 0, 0, 5, 0, 0, 3, 6],
  [7, 0, 3, 0, 1, 8, 0, 0, 0],
];

const solutionArray = [
  [4, 3, 5, 2, 6, 9, 7, 8, 1],
  [6, 8, 2, 5, 7, 1, 4, 9, 3],
  [1, 9, 7, 8, 3, 4, 5, 6, 2],

  [8, 2, 6, 1, 9, 5, 3, 4, 7],
  [3, 7, 4, 6, 8, 2, 9, 1, 5],
  [9, 5, 1, 7, 4, 3, 6, 2, 8],

  [5, 1, 9, 3, 2, 6, 8, 7, 4],
  [2, 4, 8, 9, 5, 7, 1, 3, 6],
  [7, 6, 3, 4, 1, 8, 2, 5, 9],
];

document.querySelectorAll(".input-number").forEach((input) => {
  input.addEventListener("input", function (event) {
    let id = event.target.id;
    let [_, row, col] = id.split("_");
    let r = parseInt(row) - 1;
    let c = parseInt(col) - 1;
    let value = event.target.value;
  });

  if (presetInputArray[r][c] == solutionArray[r][c]) {
    event.target.style.backgroundColor = "lightblue";
  } else {
    event.target.style.backgroundColor = "red";
    mistakeCount++;
    if (mistakeCount >= 3) {
      Swal.fire({
        title: "Game Over!",
        text: "You made 3 mistakes.",
        icon: "error",
        iconColor: "#ff4d4d",
        background: "#100f0fff",
        color: "#ffffff",
        confirmButtonText: "Try Again",
        confirmButtonColor: "red",
        width: "448px",
        padding: "24px",
      });
      resetGame();
    }
  }
});

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

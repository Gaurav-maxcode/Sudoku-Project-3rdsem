let mistakeCount = 0;

document.getElementById("cell_1_2").addEventListener("input", function (event) {
  let inputNumber = event.target.value;
  if (mistakeCount < 3) {
    if (inputNumber == 1) {
      document.getElementById("cell_1_2").style.backgroundColor = "lightblue";
    } else {
      document.getElementById("cell_1_2").style.backgroundColor = "red";
      if (inputNumber == " ") {
        mistakeCount = mistakeCount - 1;
      } else {
        mistakeCount = mistakeCount + 1;
      }
    }
  } else if (mistakeCount == 3) {
    alert("Game Over! You made 3 mistakes.");
    resetGame();
  }
  console.log(mistakeCount);
  console.log(inputNumber);
});

document.getElementById("resetbtn").addEventListener("click", function () {
  document.getElementById("cell_1_2").value = "";
  document.getElementById("cell_1_2").style.backgroundColor = "#212121";
  mistakeCount = 0;
  console.log(mistakeCount);
});

function resetGame() {
  document.getElementById("cell_1_2").value = "";
  document.getElementById("cell_1_2").style.backgroundColor = "#212121";
  mistakeCount = 0;
}

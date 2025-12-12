let mistakeCount = 0;

document.getElementById("cell_1_2").addEventListener("input", function (event) {
  let inputNumber = event.target.value;
  if (mistakeCount > 3) {
    if (inputNumber == 1) {
      document.getElementById("cell_1_2").style.backgroundColor = "lightblue";
    } else {
      document.getElementById("cell_1_2").style.backgroundColor = "red";
      mistakeCount++;
    }
  }
  console.log(mistakeCount);

  console.log(inputNumber);
});

const inputBox = document.querySelectorAll(".smallbox");
console.log(inputBox);

inputBox.addEventListener("click", function (e) {
  console.log(e.innerHtml());
});

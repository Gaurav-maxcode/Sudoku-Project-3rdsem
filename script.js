let inputNumber = document.getElementById("smallbox");
inputNumber.addEventListener("input", function () {
  // Allow only digits
  this.value = this.value.replace(/[^0-9]/g, "");
  // Limit to only 1 character
  if (this.value.length > 1) {
    this.value = this.value.slice(0, 1);
  }
});

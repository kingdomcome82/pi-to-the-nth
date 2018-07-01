function displayPi() {
  var decimalPlaces = document.querySelector('input');
  var displayParagraph = document.querySelector('p');

if (decimalPlaces.value < 0 | decimalPlaces.value > 40 | decimalPlaces.value === "") {
  displayParagraph.innerHTML = "Please enter a number between 0 and 40";
} else
  displayParagraph.innerHTML = Number(Math.PI).toFixed(decimalPlaces.value); }

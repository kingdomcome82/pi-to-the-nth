function displayPi() {
  var decimalPlaces = document.querySelector('input');
  var displayParagraph = document.querySelector('p');

  displayParagraph.innerHTML = Number(Math.PI).toFixed(decimalPlaces.value); }

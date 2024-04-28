
let input = document.getElementById("value");
document.getElementById('name-input').addEventListener('input', function () {
  var inputValue = this.value.trim();
  var nameOutput = document.getElementById('name-output');
  
  if (inputValue === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = inputValue;
  }
});
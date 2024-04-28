document.getElementById('validation-input').addEventListener('blur', function() {
  var inputValue = this.value.trim();
  var expectedLength = parseInt(this.getAttribute('data-length'), 10);
  var validationInput = document.getElementById('validation-input');

  if (inputValue.length === expectedLength) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
});
document.querySelector('.login-form').addEventListener('submit', function(event) {
  event.preventDefault(); 
  var emailInput = this.elements.email;
  var passwordInput = this.elements.password;
    
  if (emailInput.value === '' || passwordInput.value === '') {
    alert('Please fill in all fields.');
    return;
  }
    var formData = {
    email: emailInput.value,
    password: passwordInput.value
  };
   
  console.log(formData);
    this.reset();
});

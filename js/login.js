document.getElementById('login-button').addEventListener('click', function () {
  const userEmailField = document.getElementById('user-email');
  const userEmail = userEmailField.value;
  const userPasswordField = document.getElementById('password');
  const userPassword = userPasswordField.value;


  if (userEmail == 'admain@admain.com' && userPassword == 123456) {
    window.location.href="dashbord.html"
  }
})

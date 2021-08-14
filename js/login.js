document.getElementById('login-btn').addEventListener('click', function () {
    // get user email.
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);

    // get user Password.
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword);

    // check email & password.
    if (userEmail == 'alom@gmail.com' && userPassword == 'secret') {
        // console.log('main-user');
        window.location.href = 'banking.html';
    }

});


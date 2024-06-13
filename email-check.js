document.getElementById('contact-form').addEventListener('submit', function(event) {
    let email = document.getElementById('email').value;
    let confirmEmail = document.getElementById('confirm-email').value;
    let emailError = document.getElementById('email-error');

    if(email !== confirmEmail) {
        emailError.innerHTML = 'Emails do not match! Please try again.';
        event.preventDefault(); // Prevent form submission
    }else {
        emailError.innerHTML = '';
    }
});
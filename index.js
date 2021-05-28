const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const errorIcon = document.querySelectorAll('.container-two__error-icon');
const errorText = document.querySelectorAll('.container-two__error-text');

/* Code for invalid email or empty fields */

firstName.oninvalid = function(event) {
    event.preventDefault();
    invalidInput(0, firstName);
}

lastName.oninvalid = function(event) {
    event.preventDefault();
    invalidInput(1, lastName);
}

email.oninvalid = function(event) {
    event.preventDefault();
    invalidInput(2, email);
}

password.oninvalid = function(event) {
    event.preventDefault();
    invalidInput(3, password);
}

function invalidInput(index, field) {
    errorIcon[index].classList.remove('container-two__error-icon--hide');
    errorText[index].classList.remove('container-two__error-text--hide');
    field.classList.add('container-two__input--error');
}

/* Code for reseting fields after invalid input */

firstName.addEventListener('focus', function() {validInput(0, firstName)});
lastName.addEventListener('focus', function() {validInput(1, lastName)});
email.addEventListener('focus', function() {validInput(2, email)});
password.addEventListener('focus', function() {validInput(3, password)});


function validInput(index, field) {
    errorIcon[index].classList.add('container-two__error-icon--hide');
    errorText[index].classList.add('container-two__error-text--hide');
    field.classList.remove('container-two__input--error');
};
// username
let usernameInput = document.getElementById("InputUsername");
let usernameError = document.getElementById("username_error");
let emptyUsernameError = document.getElementById("empty_username");

// password
let passwordInput = document.getElementById("InputPassword");
let passwordError = document.getElementById("password_error");
let emptyPasswordError = document.getElementById("empty_password");

// email
let emailInput = document.getElementById("InputEmail");
let emailError = document.getElementById("email_error");
let emptyEmailError = document.getElementById("empty_email");

// submit
let submitButton = document.getElementById("submit-button");

// valid
let validClasses = document.getElementsByClassName("valid");
let invalidClasses = document.getElementsByClassName("error");

// Password Validation
const passwordVerify = (password) => {
  const regex =
    /^(?=.+[a-z])(?=.+[A-Z])(?=.+[0-9])(?=.+[\$\%\^\&\!@\#\*\(\)\+\=`~\?\>\<])/;
  return regex.test(password) && password.length >= 7;
};

// Text Validation (if input contains only text)
const textVerify = (text) => {
  const regex = /^[a-zA-Z]{3,}$/;
  return regex.test(text);
};

// Email Validation
const emailVerify = (input) => {
  const regex = /^[a-z0-9_]+@[a-z]{3,}\.[a-z\.]{3,}$/;
  return regex.test(input);
};

// For empty input - accepts(input,empty error for that input and other errors)
const emptyUpdate = (
  inputReference,
  emptyErrorReference,
  otherErrorReference
) => {
  if (!inputReference.value) {
    // input is empty or null
    emptyErrorReference.classList.remove("hide");
    otherErrorReference.classList.add("hide");
    inputReference.classList.add("error");
  } else {
    // input is not empty
    emptyErrorReference.add("hide");
  }
};

//For error styling and displaying error message
const errorUpdate = (inputReference, errorReference) => {
  errorReference.classList.remove("hide");
  inputReference.classList.remove("valid");
  inputReference.classList.add("error");
};

//For no errors
const validInput = (inputReference) => {
  inputReference.classList.remove("error");
  inputReference.classList.add("valid");
};

// username
usernameInput.addEventListener("input", () => {
  if (textVerify(usernameInput.value)) {
    // if validation returns true
    usernameError.classList.add("hide");
    validInput(usernameInput);
  } else {
    // for false
    errorUpdate(usernameInput, usernameError);
    // empty checker
    emptyUpdate(usernameInput, emptyUsernameError, usernameError);
  }
});

//Email
emailInput.addEventListener("input", () => {
  if (emailVerify(emailInput.value)) {
    emailError.classList.add("hide");
    validInput(emailInput);
  } else {
    errorUpdate(emailInput, emailError);
    emptyUpdate(emailInput, emptyEmailError, emailError);
  }
});

//Password
passwordInput.addEventListener("input", () => {
  if (passwordVerify(passwordInput.value)) {
    passwordError.classList.add("hide");
    validInput(passwordInput);
  } else {
    errorUpdate(passwordInput, passwordError);
    emptyUpdate(passwordInput, emptyPasswordError, passwordError);
  }
});

//Submit button
submitButton.addEventListener("click", () => {
  if (validClasses.length == 6 && invalidClasses.length == 0) {
    alert("Success");
  } else {
    alert("Error");
  }
});

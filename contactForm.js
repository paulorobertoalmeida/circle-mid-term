const fullNameInput = document.getElementById("full_name");
const lastNameInput = document.getElementById("phone_number");
const emailInput = document.getElementById("email");
const form = document.getElementById("text");
const buttonSubmit = document.getElementById("btn");


const fullNameError = document.getElementsByClassName("fullNameError")[0];
//const lastNameError = document.getElementsByClassName("lastNameError")[0];
const emailError = document.getElementsByClassName("emailError")[0];

//define and declare and empty errors object
let error = {};

/* This is a JavaScript event listener. It is a way to listen for an event. In this case, it is
listening for the form to be submitted. */
form.addEventListener("submit", function (e) {
  e.preventDefault();
//function to validate the form fields before submitting
  checkEmpty();
});

// validate empty fields and set error object
function checkEmpty() {
  //loop and remove all key and value fields in the errors object
  for (let key in error) {
    delete error[key];
  }
  //set all in firstname, lastname, email spans to display none
  fullNameError.style.display = "none";
  lastNameError.style.display = "none";
  emailError.style.display = "none";

  //remove all the error class "border-red-500 classes"
  firstNameInput.classList.remove("border-red-500");
  lastNameInput.classList.remove("border-red-500");
  emailInput.classList.remove("border-red-500");

//remove white spaces from every input Field
  const firstNameValue = firstNameInput.value.trim();
  const lastNameValue = lastNameInput.value.trim();
  const emailValue = emailInput.value.trim();

  //check if all inputs are empty then add new new error keys to the defined error object
  if (firstNameValue === "") {
    error.firstName = "First Name is required";
  }
  if (lastNameValue === "") {
    error.lastName = "Last Name is required";
  }
  if (emailValue === "") {
    error.email = "Email is required";
  }

  //validate the inputs firstName and lastName
  if (firstNameValue !== "") {
    if (!firstNameValue.match(/^[a-zA-Z0-9]+$/)) {
      error.firstName = "First Name must be letters only";
    }
  }
  if (lastNameValue !== "") {
    if (!lastNameValue.match(/^[a-zA-Z0-9]+$/)) {
      error.lastName = "Last Name must be letters only";
    }
  }
  if (emailValue !== "") {
    //validating an email
    if (!emailValue.match(/^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/)) {
      error.email = "Email must be a valid email";
    }
  }

  //if we have error add the error to the error message
  if (Object.keys(error).length > 0) {
    displayError();
  } else {
    //submit the form with a delay of 2 seconds
    //change the button innerText to submitting and add no-cursor class and disabled attribute to it
    buttonSubmit.value = "Submitting...";
    buttonSubmit.setAttribute("disabled", "disabled");

//set a delay of 2 seconds since we dont have an api endpoint to send the data to just mimic the process
    new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(submitForm());
      }, 2000);
    });
  }
}

//display errors respectivey to the span html classes
function displayError() {
  //set all errors to their respectivey and also changing hidden 
error containers to be a block.
  if (error.firstName) {
    firstNameInput.classList.add("border-red-500");
    fullNameError.style.display = "block";
    fullNameError.innerHTML = error.firstName;
  }
  if (error.lastName) {
    lastNameInput.classList.add("border-red-500");
    lastNameError.style.display = "block";
    lastNameError.innerHTML = error.lastName;
  }
  if (error.email) {
    //loop over the classes and add other classes
    emailInput.classList.add("border-red-500");
    emailError.style.display = "block";
    emailError.innerHTML = error.email;
  }
}

//submitting the form
function submitForm() {
//TODO: Add an API ENDPOINT to send the data.

  //show the values for now but later we going to add some api intergration
  console.log(firstNameInput.value);
  console.log(lastNameInput.value);
  console.log(emailInput.value);
  //reset the login buttonSubmit

//after 2 seconds is over change the input type button innerText and remove the disabled attribute.
  buttonSubmit.value = "Login Now";
  buttonSubmit.removeAttribute("disabled");

  //reset the form and clear all fields
  form.reset();
}
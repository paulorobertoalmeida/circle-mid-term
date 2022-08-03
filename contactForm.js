// const fullNameInput = document.getElementById("full_name"); //ok
// const lastNameInput = document.getElementById("phone_number"); //
// const emailInput = document.getElementById("email");
// const form = document.getElementById("text");
// const buttonSubmit = document.getElementById("btn");


// const fullNameError = document.getElementsByClassName("fullNameError")[0];
// const lastNameError = document.getElementsByClassName("lastNameError")[0];
// const emailError = document.getElementsByClassName("emailError")[0];

//define and declare and empty errors object
//let error = {};

const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  }

  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
  }

  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
  }

  if (password.value === 'password') {
    messages.push('Password cannot be password')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})
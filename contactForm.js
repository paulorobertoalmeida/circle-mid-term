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

// const name = document.getElementById('full_name')
// const phone = document.getElementById('phone_number')
// const email = document.getElementById('email')
// const form_message = document.getElementById('message')
// const errorElement = document.getElementById('error')
// const form = document.getElementById('form')


// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password2');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   validateInput();
// })

// //this function display the error; 
// const setError = ((element, message) => {
//   const inputControl = element.parentElement;
//   const errorDisplay = inputControl.querySelector('.error');

//   errorDisplay.innerText = message;
//   inputControl.classList.add('error');
//   inputControl.classList.remove('success');
// })

// // this message display the success of the function;
// const setSuccess = element => {
//   const inputControl = element.parentElement;
//   const errorDisplay = inputControl.querySelector('.error');

//   errorDisplay.innerText = "";
//   inputControl.classList.add('success');
//   inputControl.classList.remove('error');
// }

// //This part validates your email and certificate against unvalidated sequences of characters
// const isValidEmail = email => {
//   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// }

// const validateInputs = () => {
//   const validateName = name.value.trim()
//   const validateEmail = email.value.trim();

//   if (validateName === '') {
//     setError(name, "Name is not valid");
//   } else {
//     setSuccess(` hey ${name} is valid`);
//   }

//   if (isValidEmail === '') {
//     setError(email, "Your email is empty");
//   } else if (!isValidEmail(validateEmail)) {
//   } else {
//     setSuccess(`hey ${validateName} is correct`)
//   }

// }





// form.addEventListener('submit', (e) => { 
//   e.preventDefault();
//   let messages = []
//   if (name.value === '' || name.value == null) {
//     messages.push('Name is required')
//     //console.log(name)
//   }

//   if (phone.value.length == 9) {
//     messages.push('Your Number must be longer than 9 characters')
//     //console.log(phone)
//   }

//   if (phone.value.length >= 11) {
//     messages.push('Your Number must be less than 11 characters')
//     //console.log(phone)
//   }

//   if (email.value === 'email') {
//     messages.push('Email cannot be email')
//     //console.log(email)
//   }

//   if (form_message.length >= 10) {
//     messages.push('You need to type Something')
//     //console.log(form_message)
//   }

//   if (messages.length > 0) {
//     // e.preventDefault()
//     errorElement.innerText = messages.join(', ')
//   }
// })
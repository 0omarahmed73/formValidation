let form = document.querySelector('form')
console.log(form)
let username = document.querySelector('input[name = "username"]')
console.log(username)
let email = document.querySelector('input[name = "email"]')
console.log(email)
let password = document.querySelector('input[name = "password"]')
console.log(password)
let password2 = document.querySelector('input[name = "password2"]')
console.log(password2)

form.addEventListener('submit' , function(e){
  e.preventDefault();
  validate();
})

const setError = (element , message) => {
  element.parentElement.querySelector('.error').innerText = message;
  element.parentElement.classList.add('errorValid')
  element.parentElement.classList.remove('successValid');
}
const setSuccess = (element) => {
  element.parentElement.querySelector('.error').innerText = '';
  element.parentElement.classList.remove('errorValid')
  element.parentElement.classList.add('successValid');
}

function validate(){
  const usernameValue = username.value.trim();
  const emailValue =  email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  if (usernameValue === ''){
    setError(username , 'Username is required');
  }
  else {
    setSuccess(username)
  }
  if (emailValue === ''){
    setError(email , 'Email is required');
  }
  else if (!(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(emailValue.toLowerCase())){
    setError(email , 'Email is not valid');
  }
  else {
    setSuccess(email)
  }
  if (password === ''){
    setError(password , 'Password is required');
  }
  else if (!(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/).test(passwordValue)){
    setError(password , 'Password is not valid');
  }
  else {
    setSuccess(password)
  }
  
  if (password2Value === '' || password2Value !== passwordValue){
    setError(password2 , 'Passwords are not matched');
  }
  else {
    setSuccess(password2)
  }
}
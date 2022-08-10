const signUpForm = document.querySelector('.sign-up-form');
signUpForm.addEventListener('submit', signupFormHandler);

const signInForm = document.querySelector('.sign-in-form');
signInForm.addEventListener('submit', signinFormHandler);

function signupFormHandler(event) {
  event.preventDefault();
  const username = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  (username && email && password ) && postUser(username, email, password);
}
  
  
  
function signinFormHandler(event) {
  
  event.preventDefault();
  const loginEmail = document.querySelector('#email-signin').value.trim();
  const loginPassword = document.querySelector('#password-signin').value.trim();
  if (loginEmail && loginPassword ){ loginUser(loginEmail, loginPassword)};
}

async function postUser(username, email, password) {
  const userData = {
    username: username,
    email: email,
    password: password
  };
  try {
    const response = await httpPost(userData, '/api/users');
    console.log(response);
  } catch (error) { console.log(error); }
}

function loginUser(loginEmail, loginPassword) {
  const userData = {
    email: loginEmail,
    password: loginPassword
  };
  httpPost(userData, '/api/users/login').then(response => {response.ok ? window.location.href = '/' : console.log('Not Logged In');});
}



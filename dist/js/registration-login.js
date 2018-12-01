// const userName = document.getElementById('userName');
// const userPassword = document.getElementById('userPassword');
// const users = [];
// const registerButton = document.getElementById('registerButton');
// const loginName = document.getElementById('loginName');
// const loginPassword = document.getElementById('loginPassword');
// const loginButton = document.getElementById('loginButton');
// const localStorageUsersData = JSON.parse(localStorage.getItem('users'));
// const storedCredentials = localStorageUsersData.filter(obj => obj.userName === loginName.value);

// function storeUserData(event) {
//   event.preventDefault();
//   users.push({
//     userName: userName.value,
//     userPassword: userPassword.value,
//   });
//   localStorage.setItem('users', JSON.stringify(users));
//   userName.value = '';
//   userPassword.value = '';
// }

// function checkUserCredentials(event) {
//   event.preventDefault();
//   if (loginPassword.value === storedCredentials[0].userPassword) {
//     loginName.value = '';
//     loginPassword.value = '';
//     alert('You are loged in.');
//   } else {
//     alert('ERROR. Username or Password is incorrect');
//   }
// }

// registerButton.addEventListener('click', storeUserData);
// loginButton.addEventListener('click', checkUserCredentials);

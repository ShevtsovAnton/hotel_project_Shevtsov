const openBurgerButton = document.getElementById('burger-toggle');
const closeBurgerButton = document.getElementById('burger-close');
const burgerBackdrop = document.getElementById('burger-backdrop');
const burgerMenu = document.getElementById('burger-menu');
const burgerMenuItems = document.querySelectorAll('.burger__menu-item');

function toggle(e) {
  // e.preventDefault();
  // const n = document.getElementById(id);
  // const m = document.getElementById(id2);
  // const k = document.getElementById(id3);
  // if (n.getAttribute('aria-expanded') === 'false') {
  //   n.setAttribute('aria-expanded', 'true');
  //   m.setAttribute('aria-expanded', 'true');
  //   k.setAttribute('aria-expanded', 'true');
  // } else {
  //   n.setAttribute('aria-expanded', 'false');
  //   m.setAttribute('aria-expanded', 'false');
  //   k.setAttribute('aria-expanded', 'false');
  // }

  e.preventDefault(e);
  if (openBurgerButton.getAttribute('aria-expanded') === 'false') {
    openBurgerButton.setAttribute('aria-expanded', 'true');
    burgerMenu.setAttribute('aria-expanded', 'true');
    closeBurgerButton.setAttribute('aria-expanded', 'true');
  } else {
    openBurgerButton.setAttribute('aria-expanded', 'false');
    burgerMenu.setAttribute('aria-expanded', 'false');
    closeBurgerButton.setAttribute('aria-expanded', 'false');
  }
}

for (let i = 0; i < burgerMenuItems.length; i++) {
  console.log(`burger-item ${burgerMenuItems[i]}`);
  burgerMenuItems[i].addEventListener('click', (e) => toggle(e));
}

openBurgerButton.addEventListener('click', e => toggle(e));
closeBurgerButton.addEventListener('click', e => toggle(e));
burgerBackdrop.addEventListener('click', e => toggle(e));

// const slides = document.querySelectorAll('.carousel__item');
// let currentSlide = 0;
// // let playing = true;
// const next = document.getElementById('next');
// const previous = document.getElementById('previous');

// function goToSlide(n) {
//   slides[currentSlide].className = 'carousel__item';
//   currentSlide = (n + slides.length) % slides.length;
//   slides[currentSlide].className = 'carousel__item active';
// }

// function nextSlide(callback) {
//   goToSlide(currentSlide + 1);
//   if (callback) {
//     callback();
//   }
// }

// function previousSlide(callback) {
//   goToSlide(currentSlide - 1);
//   if (callback) {
//     callback();
//   }
// }

// let slideInterval = setInterval(nextSlide, 5000); // Set autoslide interval

// function pauseSlideshow() {
//   // playing = false;
//   clearInterval(slideInterval);
// }

// function playSlideshow() {
//   // playing = true;
//   slideInterval = setInterval(nextSlide, 5000);
// }

// next.onclick = () => {
//   pauseSlideshow();
//   nextSlide(() => playSlideshow());
// };

// previous.onclick = () => {
//   pauseSlideshow();
//   previousSlide(() => playSlideshow());
// };

// previous.onclick = () => {
//   pauseSlideshow();
//   previousSlide(() => playSlideshow());
// };


// const slides = document.querySelectorAll('.carousel__item');
// let currentSlide = 0;
// const next = document.getElementById('next');
// const previous = document.getElementById('previous');

// function goToSlide(n) {
//   slides[currentSlide].className = 'carousel__item';
//   currentSlide = (n + slides.length) % slides.length;
//   slides[currentSlide].className = 'carousel__item active';
// }

// function nextSlide() {
//   goToSlide(currentSlide + 1);
// }

// let slideInterval = setInterval(nextSlide, 3000);

// next.onclick = () => {
//   clearInterval(slideInterval);
//   goToSlide(currentSlide + 1);
//   slideInterval = setInterval(nextSlide, 3000);
// };

// previous.onclick = () => {
//   clearInterval(slideInterval);
//   goToSlide(currentSlide - 1);
//   slideInterval = setInterval(nextSlide, 3000);
// };

function carousel(slideClassName, nextButtonId, previousButtonId, interval) {
  const slides = document.querySelectorAll(`.${slideClassName}`);
  let currentSlide = 0;
  const next = document.getElementById(nextButtonId);
  const previous = document.getElementById(previousButtonId);

  function goToSlide(n) {
    slides[currentSlide].className = slideClassName;
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = `${slideClassName} active`;
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  let slideInterval = setInterval(nextSlide, interval);

  next.onclick = () => {
    clearInterval(slideInterval);
    goToSlide(currentSlide + 1);
    slideInterval = setInterval(nextSlide, interval);
  };

  previous.onclick = () => {
    clearInterval(slideInterval);
    goToSlide(currentSlide - 1);
    slideInterval = setInterval(nextSlide, interval);
  };
}

carousel('carousel__item', 'next', 'previous', 6000);
// carousel('mini-carousel__item', 'next-mini', 'previous-mini', 5000);


const userName = document.getElementById('userName');
const userPassword = document.getElementById('userPassword');
const users = [];
const registerButton = document.getElementById('registerButton');
const loginName = document.getElementById('loginName');
const loginPassword = document.getElementById('loginPassword');
const loginButton = document.getElementById('loginButton');
const localStorageUsersData = JSON.parse(localStorage.getItem('users'));
const storedCredentials = localStorageUsersData.filter(obj => obj.userName === loginName.value);

function storeUserData(event) {
  event.preventDefault();
  users.push({
    userName: userName.value,
    userPassword: userPassword.value,
  });
  localStorage.setItem('users', JSON.stringify(users));
  userName.value = '';
  userPassword.value = '';
}

function checkUserCredentials(event) {
  event.preventDefault();
  if (loginPassword.value === storedCredentials[0].userPassword) {
    loginName.value = '';
    loginPassword.value = '';
    alert('You are loged in.');
  } else {
    alert('ERROR. Username or Password is incorrect');
  }
}

registerButton.addEventListener('click', storeUserData);
loginButton.addEventListener('click', checkUserCredentials);

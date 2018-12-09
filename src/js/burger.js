const openBurgerButton = document.getElementById('burger-toggle');
const closeBurgerButton = document.getElementById('burger-close');
const burgerBackdrop = document.getElementById('burger-backdrop');
const burgerMenu = document.getElementById('burger-menu');
const burgerMenuItems = document.querySelectorAll('.burger__menu-item');
const burgerMenuAccomodation = document.getElementById('burgerMenuAccomodations');
const burgerDropdownList = document.getElementById('burgerDropdownList');


burgerMenuAccomodation.addEventListener('click', function(e) {
  e.preventDefault();
  console.log('clicked');
  if (burgerDropdownList.classList.contains('hidden')) {
    burgerDropdownList.classList.remove('hidden');
  } else {
    burgerDropdownList.classList.add('hidden');
  }
})

function toggle(e) {

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

openBurgerButton.addEventListener('click', e => toggle(e));
closeBurgerButton.addEventListener('click', e => toggle(e));
burgerBackdrop.addEventListener('click', e => toggle(e));

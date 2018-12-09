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

// for (let i = 0; i < burgerMenuItems.length; i++) {
//   console.log(`burger-item ${burgerMenuItems[i]}`);
//   burgerMenuItems[i].addEventListener('click', (e) => toggle(e));
// }

openBurgerButton.addEventListener('click', e => toggle(e));
closeBurgerButton.addEventListener('click', e => toggle(e));
burgerBackdrop.addEventListener('click', e => toggle(e));

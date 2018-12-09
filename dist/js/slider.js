const slideNextButtons = document.querySelectorAll('.slide__next');
const slidePreviousButtons = document.querySelectorAll('.slide__previous');
const slider = document.querySelector('.slider');
let counter = 0; 


for (let i = 0; i < slideNextButtons.length; i++) {
    slideNextButtons[i].addEventListener('click', function(event) {
        event.preventDefault();
        counter -= 100;
        if ((counter == -400) || (counter == 0)) {
            counter = 0;
        }
        slider.style.left = `${counter}%`;
    })
}

for (let i = 0; i < slidePreviousButtons.length; i++) {
    slidePreviousButtons[i].addEventListener('click', function(event) {
        event.preventDefault();
        counter += 100;
        if (counter == 100) {
            counter = -300;
        }
        slider.style.left = `${counter}%`;
    })
}

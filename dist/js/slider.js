const slideNextButton = document.querySelectorAll('.slide__next');
const slidePreviousButton = document.querySelectorAll('.slide__previous');
const slider = document.querySelector('.slider');
let counter = 0; 

slideNextButton.forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.preventDefault();
        counter -= 100;
        if ((counter == -400) || (counter == 0)) {
            counter = 0;
        }
        slider.style.left = `${counter}%`;
    })
})

slidePreviousButton.forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.preventDefault();
        counter += 100;
        if (counter == 100) {
            counter = -300;
        }
        slider.style.left = `${counter}%`;
    })
})
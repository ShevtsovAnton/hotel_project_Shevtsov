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

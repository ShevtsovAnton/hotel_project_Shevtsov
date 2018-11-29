function carousel(slideClassName, nextButtonId, previousButtonId) {
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

  let slideInterval = setInterval(nextSlide, 3000);

  next.onclick = () => {
    clearInterval(slideInterval);
    goToSlide(currentSlide + 1);
    slideInterval = setInterval(nextSlide, 3000);
  };

  previous.onclick = () => {
    clearInterval(slideInterval);
    goToSlide(currentSlide - 1);
    slideInterval = setInterval(nextSlide, 3000);
  };
}

carousel('carousel__item', 'next', 'previous');

// let currentIndex = 0;
// const totalSlides = document.querySelectorAll(".carousel-item").length;

// function showSlide(index) {
//   const carousel = document.getElementById("carousel");
//   const slideWidth = document.querySelector(".carousel-item").clientWidth;
//   const newPosition = -index * slideWidth;
//   carousel.style.transform = `translateX(${newPosition}px)`;
//   currentIndex = index;
// }

// function nextSlide() {
//   currentIndex = (currentIndex + 1) % totalSlides;
//   showSlide(currentIndex);
// }

// function prevSlide() {
//   currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//   showSlide(currentIndex);
// }

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;

  function updateCarousel() {
    carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
  }

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % carousel.children.length;
    updateCarousel();
  }

  function showPrevSlide() {
    currentIndex =
      (currentIndex - 1 + carousel.children.length) % carousel.children.length;
    updateCarousel();
  }

  nextBtn.addEventListener("click", showNextSlide);
  prevBtn.addEventListener("click", showPrevSlide);
});


document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".lap-carousel");
  const prevBtn = document.getElementById("lap-prevBtn");
  const nextBtn = document.getElementById("lap-nextBtn");

  let currentIndex = 0;

  function updateCarousel() {
    carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
  }

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % carousel.children.length;
    updateCarousel();
  }

  function showPrevSlide() {
    currentIndex =
      (currentIndex - 1 + carousel.children.length) % carousel.children.length;
    updateCarousel();
  }

  nextBtn.addEventListener("click", showNextSlide);
  prevBtn.addEventListener("click", showPrevSlide);
});

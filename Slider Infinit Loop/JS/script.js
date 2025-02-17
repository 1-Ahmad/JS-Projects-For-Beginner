let currentIndex = 1;
const slidesContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const slideWidth = 250;
slides.forEach((e) => {
  slidesContainer.appendChild(e.cloneNode(true));
});
const allSlides = document.querySelectorAll(".slide");
const totalAllSlides = allSlides.length;
slidesContainer.style.width = `${totalAllSlides * slideWidth}px`;
slidesContainer.style.transform = `translateX(${-slideWidth}px)`;
function updateSlidePosition() {
  slidesContainer.style.transition = "transform 0.5s ease-in-out";
  slidesContainer.style.transform = `translateX(${
    -currentIndex * slideWidth
  }px)`;
}
function nextSlide() {
  if (currentIndex >= totalSlides) {
    slidesContainer.style.transition = "none";
    currentIndex = 0;
    slidesContainer.style.transform = `translateX(${
      -currentIndex * slideWidth
    }px)`;
    setTimeout(() => {
      currentIndex++;
      updateSlidePosition();
    }, 50);
  } else {
    currentIndex++;
    updateSlidePosition();
  }
}
function prevSlide() {
  if (currentIndex <= 0) {
    slidesContainer.style.transition = "none";
    currentIndex = totalSlides;
    slidesContainer.style.transform = `translateX(${
      -currentIndex * slideWidth
    }px)`;
    setTimeout(() => {
      currentIndex--;
      updateSlidePosition();
    }, 50);
  } else {
    currentIndex--;
    updateSlidePosition();
  }
}

let autoSlide = setInterval(nextSlide, 3000);
function restartAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 3000);
}
document.querySelector(".next").addEventListener("click", () => {
  nextSlide();
  restartAutoSlide();
});
document.querySelector(".prev").addEventListener("click", () => {
  prevSlide();
  restartAutoSlide();
});

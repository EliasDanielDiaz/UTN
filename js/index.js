/* ============================
    CARRUSEL INDEX
============================ */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");

let index = 0;
let intervalo;

/* Mostrar slide */
function showSlide(i) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[i].classList.add("active");
  dots[i].classList.add("active");
}

/* Siguiente */
function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

/* Anterior */
function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

/* Auto-play */
function startAutoPlay() {
  intervalo = setInterval(nextSlide, 5000);
}

/* Detener autoplay cuando el usuario interactúa */
function stopAutoPlay() {
  clearInterval(intervalo);
}

/* Eventos */
btnNext.addEventListener("click", () => {
  stopAutoPlay();
  nextSlide();
  startAutoPlay();
});

btnPrev.addEventListener("click", () => {
  stopAutoPlay();
  prevSlide();
  startAutoPlay();
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    stopAutoPlay();
    index = i;
    showSlide(index);
    startAutoPlay();
  });
});

/* Iniciar */
showSlide(index);
startAutoPlay();

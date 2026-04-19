const archivoActual = window.location.pathname.split('/').pop();

const enlaces = document.querySelectorAll('nav ul li a');

enlaces.forEach(enlace => {
    const href = enlace.getAttribute('href');

    if (href === archivoActual) {
        enlace.setAttribute('aria-current', 'page');
    } else {
        enlace.removeAttribute('aria-current');
    }
});

// Carrusel Hero
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    let currentSlide = 0;
    let autoplayInterval;

    function showSlide(index) {
        // Ocultar todos los slides
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Mostrar el slide actual
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Botones
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Autoplay (cambia cada 5 segundos)
    function startAutoplay() {
        autoplayInterval = setInterval(nextSlide, 5000);
    }

    // Detener autoplay cuando el mouse está sobre el carrusel
    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
    carousel.addEventListener('mouseleave', startAutoplay);

    // Iniciar
    showSlide(0);
    startAutoplay();
});
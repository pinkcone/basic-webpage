const slider = document.querySelector('.slider');
const slides = slider.querySelector('.skins').getElementsByTagName('img');

let currentSlide = 0;
const slideInterval = 3000; // Interwał przesuwania w milisekundach
let slideTimer;

// Funkcja do przesuwania na poprzedni slajd
function previousSlide() {
    goToSlide(currentSlide - 1);
}

// Funkcja do przesuwania na następny slajd
function nextSlide() {
    goToSlide(currentSlide + 1);
}

// Funkcja do ustawiania widoczności slajdu
function goToSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

// Funkcja automatycznego przesuwania slajdów co określony interwał
function startSlideTimer() {
    slideTimer = setInterval(nextSlide, slideInterval);
}

// Rozpoczęcie automatycznego przesuwania slajdów po załadowaniu strony
window.addEventListener('load', () => {
    slides[0].style.display = 'block'; // Pierwsze zdjęcie widoczne od razu
    startSlideTimer();
});

// Zatrzymanie automatycznego przesuwania slajdów po najechaniu myszką na slajder
slider.addEventListener('mouseenter', () => {
    clearInterval(slideTimer);
});

// Wznowienie automatycznego przesuwania slajdów po opuszczeniu myszką slajdera
slider.addEventListener('mouseleave', startSlideTimer);
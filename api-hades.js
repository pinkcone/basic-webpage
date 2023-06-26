// Wybierz element HTML, w którym chcesz wyświetlić zdjęcie
const imageContainer = document.getElementById("image-container");

// Tablica z nazwami plików zdjęć zawodnika "9INE hades"
const hadesImages = [
    "hades1.jpg",
    "hades2.avif",
    "hades3.jpg",
    "hades4.jpg"
    // Dodaj tutaj inne nazwy plików zdjęć zawodnika "9INE hades"
];

// Funkcja generująca losowy indeks z zakresu tablicy hadesImages
function getRandomIndex() {
    return Math.floor(Math.random() * hadesImages.length);
}

// Funkcja generująca losowe zdjęcie zawodnika "9INE hades"
function generateRandomHadesImage() {
    // Wygeneruj losowy indeks
    const randomIndex = getRandomIndex();
    // Pobierz nazwę pliku na podstawie losowego indeksu
    const imageName = hadesImages[randomIndex];
    // Utwórz adres URL do pliku zdjęcia
    const imageUrl = `zdjecia/${imageName}`;
    // Utwórz nowy element obrazu i ustaw jego atrybut src na adres URL pliku zdjęcia
    const image = new Image();
    image.src = imageUrl;
    // Wyczyść poprzednie zawartości kontenera obrazu
    imageContainer.innerHTML = "";
    // Dodaj nowy element obrazu do kontenera obrazu
    imageContainer.appendChild(image);
}

// Utwórz funkcję obsługującą kliknięcie przycisku
function handleGenerateButtonClick() {
    generateRandomHadesImage();
}

// Wybierz element HTML przycisku
const generateButton = document.getElementById("generate-button");
// Dodaj nasłuchiwanie na kliknięcie przycisku
generateButton.addEventListener("click", handleGenerateButtonClick);

// Wywołaj funkcję generateRandomHadesImage() po załadowaniu strony
window.addEventListener("load", generateRandomHadesImage);

// Base de datos de colores
const colorDatabase = {
    "rojo": ["#FF0000", "#FF5733", "#cf2323","#fb8080", "#c48d8d"],
    "azul": ["#0000FF", "#3399FF", "#66CCFF", "#b8b8e2", "#a7a7fb"],
    "verde": ["#00FF00", "#33FF33", "#99FF99","#56a056","#a4eca4"],
    "naranja": ["#ffa500", "#e99f17", "#d4992c","#b88c3c","#e7c483"],
    "amarillo": ["#ffff00", "#e4e416", "#cdcd2c","#b7b741","#cdcd72"],
    "turquesa": ["#40e0d0", "#47c5b8", "#4ca299","#61a49e","#8fd4cd"],
    "gris": ["#808080", "#8f8e8e", "#a1a0a0","#b4b1b1","#cdcdcd"],
    "morado": ["#800080", "#9a009a", "#d60ed6","#e414e4","#f64ef6"],
    // ... (otros colores)
};

// Genera 50 colores y paletas aleatorios
for (let i = 1; i <= 100; i++) {
    const colorName = `Color${i}`;
    const colorPalette = [];

    // Genera 3 tonos para cada color
    for (let j = 1; j <= 3; j++) {
        const randomColor = generateRandomColor();
        colorPalette.push(randomColor);
    }

    colorDatabase[colorName] = colorPalette;
}

// Función para generar un color hexadecimal aleatorio
function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
const colorPalette = document.querySelector(".color-palette");
const generateButton = document.getElementById("generate-button");
const resetButton = document.getElementById("reset-button");

generateButton.addEventListener("click", generatePalette);
resetButton.addEventListener("click", resetPalette);

function generatePalette() {
    colorPalette.innerHTML = ""; // Limpiar la paleta anterior

    for (let i = 0; i < 5; i++) {
        const color = generateRandomColor();
        createColorBox(color);
    }
}
function resetPalette() {
    colorPalette.innerHTML = ""; // Limpiar la paleta actual
}

function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createColorBox(color) {
    const colorBox = document.createElement("div");
    colorBox.className = "color-box";
    colorBox.style.backgroundColor = color;
    
    // Agrega un evento para mostrar el código de color al hacer clic
    colorBox.addEventListener("click", () => {
        showColorCode(color);
    });
    
    colorPalette.appendChild(colorBox);
}

function showColorCode(color) {
    // Primero, eliminamos todos los elementos de clase 'color-code' existentes
    const existingColorCodes = document.querySelectorAll(".color-code");
    existingColorCodes.forEach((element) => {
        element.remove();
    });

    // Luego, creamos y agregamos el código de color para el color seleccionado
    const colorCodeElement = document.createElement("div");
    colorCodeElement.textContent = color;
    colorCodeElement.className = "color-code";

    // Agregamos el código de color debajo de la paleta
    colorPalette.appendChild(colorCodeElement);

    // Eliminamos el código de color después de unos segundos (por ejemplo, 8 segundos)
    setTimeout(() => {
        colorPalette.removeChild(colorCodeElement);
    }, 8000); // Puedes ajustar este valor según tus preferencias
}
const colorInput = document.getElementById("color-input");
const searchButton = document.getElementById("search-button");
const messageContainer = document.getElementById("message-container");

searchButton.addEventListener("click", searchPalettes);

function searchPalettes() {
    const color = colorInput.value.toLowerCase();
    const palettes = colorDatabase[color];

    if (palettes) {
        displayPalettes(palettes);
        clearMessage(); // Limpia el mensaje de error
    } else {
        showMessage("Color no encontrado en la base de datos.");
        clearPalettes();

        // Establece el tiempo para que el mensaje desaparezca después de 3 segundos (3000 milisegundos)
        setTimeout(clearMessage, 3000); // Puedes ajustar el tiempo aquí
    }
}

function displayPalettes(palettes) {
    const colorPalette = document.querySelector(".color-palette");
    colorPalette.innerHTML = ""; // Limpiar la paleta anterior

    palettes.forEach((color) => {
        createColorBox(color);
    });
}

function showMessage(message) {
    messageContainer.textContent = message;
    messageContainer.classList.add("show"); // Agrega la clase 'show' para mostrar el mensaje
}

function clearMessage() {
    messageContainer.textContent = "";
    messageContainer.classList.remove("show"); // Quita la clase 'show' para ocultar el mensaje
}

function clearPalettes() {
    const colorPalette = document.querySelector(".color-palette");
    colorPalette.innerHTML = ""; // Limpiar la paleta
}



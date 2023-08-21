const ideas = {
    programacion: [
        "Desarrolla una aplicación web para gestionar tareas.",
        "Crea un juego simple usando HTML5 y JavaScript.",
        "Aprende un nuevo marco de trabajo (framework) de programación.",
        "Escribe un artículo técnico sobre un tema de programación.",
    ],
    "inteligencia artificial": [
        "Investiga y escribe sobre los fundamentos de la inteligencia artificial.",
        "Desarrolla un chatbot con capacidades de procesamiento de lenguaje natural.",
        "Explora algoritmos de aprendizaje automático para resolver un problema.",
        "Crea una demostración interactiva de una red neuronal.",
    ],
    diseño: [
        "Crea un logotipo para una marca imaginaria.",
        "Diseña una interfaz de usuario para una aplicación de productividad.",
        "Explora el diseño de experiencias de usuario (UX) para un sitio web.",
        "Crea un póster para un evento cultural o social.",
        "Diseña una portada de libro para un libro ficticio.",
        "Desarrolla un prototipo interactivo de una aplicación móvil.",
        "Rediseña la interfaz de usuario de una aplicación popular.",
        "Diseña una tarjeta de presentación creativa.",
    ],
    creatividad:[
        "Crea ideas interesantes sobre algo que te guste",
        "Convierte tus pensamiento en trabajos",
        "Haz presentacion de propuestas",
        "Demuestra tu capacidad creativa"
    ],
    // Agrega más palabras clave y sus ideas correspondientes aquí
};

const btnGenerar = document.getElementById("btnGenerar");
const mostrarIdea = document.getElementById("mostrarIdea");

btnGenerar.addEventListener("click", generarIdea);

function generarIdea() {
    const palabraClave = document.getElementById("palabraClave").value.toLowerCase();
    
    if (ideas[palabraClave]) {
        const ideasParaPalabraClave = ideas[palabraClave];
        const indiceAleatorio = Math.floor(Math.random() * ideasParaPalabraClave.length);
        mostrarIdea.textContent = ideasParaPalabraClave[indiceAleatorio];
    } else {
        mostrarIdea.textContent = "No se encontraron ideas para esta palabra clave.";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".menu-item");
    const secciones = document.querySelectorAll(".contenedor");

    menuItems.forEach((item, index) => {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            mostrarSeccion(index);
        });
    });

    function mostrarSeccion(index) {
        secciones.forEach((seccion, seccionIndex) => {
            if (seccionIndex === index) {
                seccion.classList.remove("oculto");
            } else {
                seccion.classList.add("oculto");
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Obtener elementos del DOM
    const relojElement = document.getElementById("reloj");
    const direccionIpElement = document.getElementById("direccion-ip");

    // Mostrar la hora actual
    function mostrarHora() {
        const fecha = new Date();
        const hora = fecha.toLocaleTimeString();
        relojElement.textContent = `Hora: ${hora}`;
    }

    // Mostrar la dirección IP
    function mostrarDireccionIp() {
        fetch("https://api.ipify.org?format=json")
            .then(response => response.json())
            .then(data => {
                const direccionIp = data.ip;
                direccionIpElement.textContent = `IP: ${direccionIp}`;
            })
            .catch(error => {
                console.error("Error al obtener la dirección IP:", error);
            });
    }

    // Actualizar la hora y dirección IP cada segundo
    setInterval(() => {
        mostrarHora();
        mostrarDireccionIp();
    }, 1000);


});

document.addEventListener("DOMContentLoaded", function() {
    // Obtener elementos del DOM
    const palabraClaveInput = document.getElementById("palabraClave");
    const btnGenerar = document.getElementById("btnGenerar");
    const mostrarIdea = document.getElementById("mostrarIdea");

    // Datos de ejemplo para autocompletado
    const palabrasSugeridas = ["programacion", "inteligencia artificial", "diseño", "creatividad", "tecnología"];

    // Inicializar Awesomplete en el campo de entrada
    new Awesomplete(palabraClaveInput, {
        list: palabrasSugeridas,
        minChars: 2, // Mostrar sugerencias después de ingresar al menos 2 caracteres
    });

    
});
document.addEventListener("DOMContentLoaded", function() {
    // Obtener elementos del DOM
    const palabraClaveInput = document.getElementById("palabraClave");
    const btnGenerar = document.getElementById("btnGenerar");
    const btnRestablecer = document.getElementById("btnRestablecer");
    const mostrarIdea = document.getElementById("mostrarIdea");

    // Datos de ejemplo para autocompletado
    const palabrasSugeridas = ["programación", "inteligencia artificial", "diseño", "creatividad", "tecnología"];

    // Inicializar Awesomplete en el campo de entrada
    const awesomplete = new Awesomplete(palabraClaveInput, {
        list: palabrasSugeridas,
        minChars: 2, // Mostrar sugerencias después de ingresar al menos 2 caracteres
    });

    // Función para restablecer el campo de entrada y el área de texto
    btnRestablecer.addEventListener("click", function() {
        palabraClaveInput.value = "";
        mostrarIdea.textContent = "";
        awesomplete.evaluate(); // Actualizar las sugerencias
    });

    
});
document.addEventListener("DOMContentLoaded", function() {
    // Obtener elementos del DOM
    const palabraClaveInput = document.getElementById("palabraClave");
    const btnGenerar = document.getElementById("btnGenerar");
    const btnRestablecer = document.getElementById("btnRestablecer");
    const mostrarIdea = document.getElementById("mostrarIdea");
    const loader = document.getElementById("pageLoader"); // Elemento del loader
    const fechaActual = new Date(); // Obtener la fecha actual

    // Configurar el calendario con la fecha actual marcada
    flatpickr("#calendar", {
        defaultDate: fechaActual,
        inline: true, // Mostrar el calendario en línea
        dateFormat: "Y-m-d", // Formato de fecha
    });

    // Ocultar el loader después de que la página se haya cargado
    window.addEventListener("load", function() {
        loader.style.display = "none";
    });

    
});

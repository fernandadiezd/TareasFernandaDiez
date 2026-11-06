// ===== Votación: ¿gato o perro? =====

// Mensaje en la consola para comprobar que el archivo cargó
console.log("script.js cargado");

// Variables que guardan los votos (empiezan en 0)
let votosGato = 0;
let votosPerro = 0;

// Buscamos los elementos del HTML por su id
const botonGato = document.querySelector("#boton-gato");
const botonPerro = document.querySelector("#boton-perro");
const resultado = document.querySelector("#resultado");

// Función que escribe el resultado en la página
function mostrarResultado() {
    let total = votosGato + votosPerro;
    resultado.textContent = `Gatos: ${votosGato} · Perros: ${votosPerro} · Total: ${total}`;
    console.log(`Votos actualizados. Total: ${total}`);
}

// Cuando se hace clic en el botón de gato, sumamos un voto
botonGato.addEventListener("click", function () {
    votosGato++;
    mostrarResultado();
});

// Cuando se hace clic en el botón de perro, sumamos un voto
botonPerro.addEventListener("click", function () {
    votosPerro++;
    mostrarResultado();
});

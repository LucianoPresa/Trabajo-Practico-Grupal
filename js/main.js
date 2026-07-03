const botonModo = document.getElementById("btn-dark");

botonModo.addEventListener("click", () => {
    
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        botonModo.textContent = "Modo claro";
    } else {
        botonModo.textContent = "Modo oscuro";
    }
});
// =================
// OCULTAR ELEMENTO
// =================

const botonLeer = document.getElementById("btn-leer");
const textoOculto = document.getElementById("texto-extra");

botonLeer.addEventListener("click", () => {
    
        textoOculto.classList.toggle("d-none");

    if (!textoOculto.classList.contains("d-none")) {
        botonLeer.textContent = "Leer menos";
    } else {
        botonLeer.textContent = "Leer más";
    }
});
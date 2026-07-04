const botonModo = document.getElementById("btn-dark");

botonModo.addEventListener("click", () => {
    
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        botonModo.textContent = "🌞 Modo claro";
    } else {
        botonModo.textContent = "🌙 Modo oscuro";
    }
});

// =================
// CONTADOR
// =================
let numero = 0;
const contador = setInterval(() => {
    numero++;
    const span = document.getElementById("contador-rescates");
    span.textContent = numero;
}, Math.random() * 5000);

// =================
// OCULTAR ELEMENTO
// =================

const botonLeer = document.getElementById("btn-leer");
if (botonLeer) {
  const textoOculto = document.getElementById("texto-extra");
  botonLeer.addEventListener("click", () => {
    textoOculto.classList.toggle("d-none");
    botonLeer.textContent = textoOculto.classList.contains("d-none") ? "Leer más" : "Leer menos";
  });
}
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
const span = document.getElementById("contador-rescates");
function contador() {
    if (span) {
        setTimeout(sumadorContador,Math.random() * 2500)
    }
}
function sumadorContador() {
    numero++;
    span.textContent = numero    
    contador()
}
contador()
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
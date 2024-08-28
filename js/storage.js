// Esto es sacado directamente del codigo del profe

let formulario = document.querySelector('#formulario');
let nombre = document.getElementById('nombre');
let edad = document.getElementById('edad');
let email = document.getElementById('email');


formulario.addEventListener("submit", (e) => {
    let form = e.target;

    const nombreStorage = form.children[0].value;
    const edadStorage = form.children[1].value;
    const emailStorage = form.children[2].value;

    localStorage.setItem("nombre", nombreStorage);
    localStorage.setItem("edad", edadStorage);
    localStorage.setItem("email", emailStorage);

})

nombre.innerHTML = localStorage.getItem("nombre");
edad.innerHTML = localStorage.getItem("edad");
email.innerHTML = localStorage.getItem("email");

for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
}

const clearLS = document.getElementById("clearLS");

clearLS.addEventListener("click", () => {
    localStorage.clear();
    sessionStorage.clear();
})

// Para que funcionen los botones de auto, motos y bicicletas

document.getElementById('eventoAutos').addEventListener('click', guardarAutos);
document.getElementById('eventoMotos').addEventListener('click', guardarMotos);
document.getElementById('eventoBicicletas').addEventListener('click', guardarBicicletas);

function guardarAutos() {
    const autos = [auto1, auto2]; // Agrega más opciones aquí
    localStorage.setItem('autos', JSON.stringify(autos));
}

function guardarMotos() {
    const motos = [moto1, moto2]; // Agrega más opciones aquí
    localStorage.setItem('motos', JSON.stringify(motos));
}

function guardarBicicletas() {
    const bicicletas = [bici1, bici2]; // Agrega más opciones aquí
    localStorage.setItem('bicicletas', JSON.stringify(bicicletas));
}



const autosStorage = localStorage.getItem('autos');
const motosStorage = localStorage.getItem('motos');
const bicicletasStorage = localStorage.getItem('bicicletas');
const autos = JSON.parse(autosStorage);
const motos = JSON.parse(motosStorage);
const bicicletas = JSON.parse(bicicletasStorage);
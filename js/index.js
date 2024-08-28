// En esta entrega estoy usando la entrega 1 pero modificada porque tenia unos errores con una alerta.
// Le agregue que se sume el IVA a los precios base y que me de mas datos en el console.log.
let ingreseUnNumero;

function solicitarNumero() {
    let numero;
    do {
        numero = parseInt(prompt("Ingrese un producto que busque: \n 1- Autos \n 2- Motos \n 3- Bicicletas \n 4- Otros" ));
        if (numero < 1 || numero > 4) {
            alert("Opción inválida. Por favor, ingrese un número entre 1 y 4.");
        }
    } while (numero < 1 || numero > 4);
    return numero;
}

function agregarIVA(precio) {
    return precio * 1.21;
}

function Autos(marca, color, precio, modelo) {
    this.marca = marca;
    this.color = color;
    this.precio = "$" + agregarIVA(precio);
    this.modelo = modelo;
}

function Motos(marca, color, precio, modelo) {
    this.marca = marca;
    this.color = color;
    this.precio = "$" + agregarIVA(precio);
    this.modelo = modelo;
}

function Bicis(marca, color, precio, modelo) {
    this.marca = marca;
    this.color = color;
    this.precio = "$" + agregarIVA(precio);
    this.modelo = modelo;
}


const auto1 = new Autos("Ford", "Azul", 800000, 2024); // Tendria que agregar mas opciones para que sirva mejor el filtro
const auto2 = new Autos("Toyota", "Gris", 40000, 2024);

const moto1 = new Motos("Neiman Marcus", "Negro", 140000, "Fighter");
const moto2 = new Motos("Yamaha", "Rojo", 120000, "BMS Chopper");

const bici1 = new Bicis("Kawasaki", "Celeste", 800, "GRX600");
const bici2 = new Bicis("Bianchi", "Rojo", 1000, "MTB Tourney");

ingreseUnNumero = solicitarNumero();

function filtrarPorMarca(marca, array) {
    return array.filter(function(element) {
        return element.marca === marca;
    });
}

function opciones() { 
    let marca;
    let resultados;
    switch (ingreseUnNumero) {
        case 1:
            alert("Usted seleccionó la opción 1: Autos");
            marca = prompt("Ingrese la marca que busca: \n-Ford\n-Toyota");
            resultados = filtrarPorMarca(marca, [auto1, auto2]);
            console.log("Autos encontrados:");
            break;
        case 2:
            alert("Usted seleccionó la opción 2: Motos");
            marca = prompt("Ingrese la marca que busca: \n-Neiman Marcus\n-Yamaha");
            resultados = filtrarPorMarca(marca, [moto1, moto2]);
            console.log("Motos encontradas:");
            break;
        case 3:
            alert("Usted seleccionó la opción 3: Bicicletas");
            marca = prompt("Ingrese la marca que busca: \n-Kawasaki\n-Bianchi");
            resultados = filtrarPorMarca(marca, [bici1, bici2]);
            console.log("Bicicletas encontradas:");
            break;
        case 4:
            alert("Usted seleccionó la opción 4: Otros");
            console.log("No hay más opciones.");
            break;
        default:
            ingreseUnNumero = solicitarNumero();
            opciones();
            break;
    }

    if (resultados) {
        resultados.forEach(function(resultado) {
            console.log(resultado);
        });
    }
    // Aca queria hacer que la info se muestre tambien en pantalla
    if (resultados) {
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = ''; 
        resultados.forEach(function(resultado) {
            const texto = `Marca: ${resultado.marca}, Color: ${resultado.color}, Precio: ${resultado.precio}, Modelo: ${resultado.modelo}`;
            resultadoDiv.innerHTML += `<p>${texto}</p>`; 
        });
    }
}

opciones();

//  De aca para adelante son cosas nuevas para la entrega.
//  Cree otro js para los storage.
//  Capaz hay algunas cosas de mas porque lo hice en diferentes dias y estuve un poco atrasado.

const cuerpo = document.body;
const botonOscurecer = document.querySelector('#cambiarNegro');
const botonBlanco = document.querySelector('#cambiarBlanco');

botonOscurecer.addEventListener("click", () => {
    cuerpo.style.backgroundColor = "darkgray";
})

botonBlanco.onclick = () => { cuerpo.style.backgroundColor = "white" };


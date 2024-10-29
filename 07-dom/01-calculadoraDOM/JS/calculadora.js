console.log("Aplicación calculadora");

// Guardamos el boton en una variable
let botonSumar = document.getElementById("btn_sumar");
// Añadimos un listener al boton cuando haga click y ejecute la funcion sumar
botonSumar.addEventListener("click", sumar); 

function sumar() {
    // Obtenemos todo el formulario y lo guardamos en una variable
    let formulario = document.getElementById("formulario");
    console.log(formulario);

    // Obtenemos los valores de nuestro formulario a traves de su "name"
    let operacionA = formulario["opA"];
    console.log(operacionA);
    let operacionB = formulario["opB"];
    console.log(operacionB);

    // Para obtener su valor atacamos a su value
    console.log("Operador A: " + operacionA.value);
    console.log("Operador B: " + operacionB.value);

    // Parseamos lo que nos hayan metido números
    let resultado = parseInt(operacionA.value) + Number(operacionB.value);

    // Obtenemos la caja de resultado
    let elemento = document.getElementById("resultado");
    if (isNaN(resultado)) {
        // Si no introduce números
        elemento.innerHTML = "Datos introducidos no númericos";

        // Opción 1 - Directamente 
        // elemento.style.background = "red";
        // elemento.style.color = "whitesmoke"

        // Opción 2 - Clases
        if (elemento.classList.contains("normal")) { // Si tiene la clase normal
            elemento.classList.remove("normal"); // Eliminamos la clase
        }
        elemento.classList.add("alerta"); // Añadimos la clase alerta

    } else {
        elemento.innerHTML = `El resultado de la suma es: ${resultado}`;

        // Opción 2 - Clases
        if (elemento.classList.contains("alerta")) { // Si tiene la clase alerta
            elemento.classList.remove("alerta"); // Eliminamos la clase
        }
        elemento.classList.add("normal"); // Añadimos la clase normal
    }


    // Opción 2 - Recorre el array
    console.log("Recorreo el array del formulario - Opción 1");
    for (let i = 0; i < formulario.length; i++) {
        console.log(formulario[i]);
        console.log(formulario[i].value);
    }

    // Opción 3 - Recorrer el array
    console.log("Recorreo el array del formulario - Opción 2");
    let formularioTotal = document.forms["formulario"];
    console.log(formularioTotal);
    let texto = "";
    for (let element of formularioTotal) {
        console.log(`Elemento: ${element}`);
        texto += element.value; + "<br>";
    }
    console.log(texto);
    document.getElementById("resultado2").innerHTML = texto;

}
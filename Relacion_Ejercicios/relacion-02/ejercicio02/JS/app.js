let boton1 = document.getElementById("boton1");
boton1.addEventListener("click", mostrarValores);

function mostrarValores() {
    let tabla = document.getElementById("tabla");
    let widthTabla = tabla.offsetWidth; // obtengo la anchura de la tabla
    let heightTabla = tabla.offsetHeight; // obtengo la altura de la tabla

    alert("Anchura: " + widthTabla + "px Altura: " + heightTabla + "px");
    
    widthTabla = prompt("Indica una nueva anchura");
    heightTabla = prompt("Indica una nueva altura");

    tabla.style.width = widthTabla + "px"; // indicamos la nueva anchura a la tabla
    tabla.style.height = heightTabla + "px"; // indicamos la nueva altura a la tabla
}

let boton2 = document.getElementById("boton2");
boton2.addEventListener("click", mostrarBorde);

function mostrarBorde() {
    let tabla = document.getElementById("tabla");
    let bordeTabla = window.getComputedStyle(tabla).borderWidth; // obtenemos el tamaño del borde de la tabla

    alert("El borde de la tabla es: " + bordeTabla);

    bordeTabla = prompt("Indica un nuevo tamaño para el borde");
    tabla.style.border = bordeTabla + "px solid black"; // indicamos el nuevo tamaño del borde
}

let boton3 = document.getElementById("boton3");
boton3.addEventListener("click", cambiarAlineacion);

let posicion = 0;
function cambiarAlineacion() {
    let tabla = document.getElementById("tabla");
    
    switch (posicion) {
        case 0:
            tabla.style.margin = "0";
            tabla.style.marginLeft = "auto";
            posicion++;
            break;
        case 1:
            tabla.style.marginLeft = "0";
            tabla.style.marginRight = "auto";
            posicion++;
            break;
        case 2:
            tabla.style.marginRight = "0";
            tabla.style.margin = "auto";
            posicion = 0;
            break;
    }
}
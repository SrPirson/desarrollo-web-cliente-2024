document.getElementById("crear").addEventListener("click", crear);
document.getElementById("modificar").addEventListener("click", modificar);
document.getElementById("eliminar").addEventListener("click", eliminar);
document.getElementById("consultar").addEventListener("click", consultar);

// Sesión Storage
/* function crear() {
    sessionStorage.setItem("usuario1", "Pepe");
    sessionStorage.setItem("usuario2", "Sussy");
    consultar();
}

function modificar() {
    sessionStorage.setItem("usuario1", "Juan");
    sessionStorage.setItem("usuario2", "Gala");
}

function consultar() {
    let valor = sessionStorage.getItem("usuario");
    if (valor === null) {
        valor = "No existe la clave";
        
    }
    document.getElementById("resultado").innerHTML = valor;
}

function eliminar() {
    sessionStorage.removeItem("usuario");
}
 */


// Local Storage
/* function crear() {
    localStorage.setItem("usuario1", "Pepe");
    localStorage.setItem("usuario2", "Sussy");
    consultar();
}

function modificar() {
    localStorage.setItem("usuario1", "Juan");
    localStorage.setItem("usuario2", "Gala");
}

function consultar() {
    let valor1 = localStorage.getItem("usuario1");
    let valor2 = localStorage.getItem("usuario2");
    if (valor1 === null) {
        valor1 = "El usuario1 no existe la clave";
        
    }
    if (valor2 === null) {
        valor2 = "El usuario2 no existe la clave";
        
    }
    document.getElementById("resultado").innerHTML = valor1 + "<br>" + valor2;
}

function eliminar() {
    localStorage.removeItem("usuario1");
    localStorage.removeItem("usuario2");
    consultar();
}
 */


// Cookies
function crear() {
    document.cookie = "usuario1=Pepe; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
    document.cookie = "usuario2=Sussy; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
    consultar();
}

function modificar() {
    document.cookie = "usuario1=Juan";
    document.cookie = "usuario2=Gala";
}

function consultar() {
    let valor1 = document.cookie;
    if (valor1 === "") {
        valor1 = "No existe la clave";
        
    }
    document.getElementById("resultado").innerHTML = valor1;
}

function eliminar() {
    document.cookie = "usuario1=Pepe; expires=Thu, 18 Dec 1900 12:00:00 UTC; path=/";
    document.cookie = "usuario2=Sussy; expires=Thu, 18 Dec 1900 12:00:00 UTC; path=/";
    consultar();
}
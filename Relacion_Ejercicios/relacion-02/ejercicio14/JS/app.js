let apartados = document.getElementsByClassName("apartado");
let subapartados = document.getElementsByClassName("subapartados");

// Inicializamos todos los subapartados en "none"
for (let i = 0; i < subapartados.length; i++) {
    subapartados[i].style.display = "none";
}

for (let i = 0; i < apartados.length-1; i++) { // -1 para no acceder a el ultimo elemento ya que está vacio
    apartados[i].onclick = function() {
        let subapartado = subapartados[i]; // Guardamos el subapartado de esa sección

        for (let j = 0; j < subapartados.length; j++) {
            if (subapartados[j] != subapartado) { // Solo cerramos los que no son el actual
                subapartados[j].style.display = "none";
            }
        }

        // Verificamos si el subapartado correspondiente está abierto o cerrado
        if (subapartado.style.display == "none") {
            subapartado.style.display = "block";
            console.log("Me he abierto");
        } else {
            subapartado.style.display = "none";
            console.log("Me he cerrado");
        }
    }
}
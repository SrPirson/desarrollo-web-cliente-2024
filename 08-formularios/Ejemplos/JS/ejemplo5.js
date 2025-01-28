let btnBorrar = document.getElementById("borrar");
let textArea = document.getElementById("textArea");

btnBorrar.addEventListener("click", pregBorrar);

function pregBorrar() {
    btnBorrar = window.confirm("¿Está seguro de que desea borrar el mensaje?");

    if (btnBorrar) {
        textArea.value = "";
    } else {
        alert("No se ha borrado el mensaje");
    }

}


textArea.addEventListener("change", )
let contador = document.getElementsByTagName("cantidad");
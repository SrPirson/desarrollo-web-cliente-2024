let uno = document.getElementById("uno");
uno.addEventListener("mouseover", mostrarTodo);

function mostrarTodo() {
    let dos = document.getElementById("dos");
    let tres = document.getElementById("tres");

    dos.style.visibility = "visible";
    tres.style.display = "grid";
}
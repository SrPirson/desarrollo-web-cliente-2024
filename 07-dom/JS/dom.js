function inicioDOM(){
    console.log("DOM cagado");

    // Una vez cargado el DOM ya tenemos el document de nuestro HTML
    document.body.style.background = "Moccasin";

    // Para guardar la etiqueta con el id "title" en una variable
    let titulo = document.getElementById("title");

    // Para ver todo el contenido de la etiqueta
    console.log(titulo);
    // Para ver el contenido de esa etiqueta usamos .innerHTML
    console.log(titulo.innerHTML);
    console.log(titulo.textContent);
    // Para ver el tamaño total del contenido
    console.log(titulo.textContent.length);
}
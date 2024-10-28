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

    console.log("________________________________________________");

    // getElementsByName - busca por nombre(name)
    let up_name = document.getElementsByName("up");

    // Para ver los elementos del array ya que hay más de un elemento con el nombre "up"
    console.log(up_name);
    console.log(up_name[0]);
    console.log(up_name[1]);
    // Para ver el tipo de etiqueta
    console.log(up_name[0].tagName);
    console.log(up_name[1].tagName);

    console.log("________________________________________________");

    // getElementByTagName - busca por etiqueta(tag)
    let parrafos = document.getElementsByTagName("p");

    // Para ver el array completo
    console.log(parrafos);

    // Para ver la cantidad de parrafos que tenemos en el array
    console.log(`Número de párrafos que tengo: ${parrafos.length}`);
    // Para recorrer el array y mostrar su contenido por consola
    for (let i = 0; i < parrafos.length; i++) {

        if (i == 3) {
            // Para cambiar el texto de una etiqueta
            parrafos[i].innerHTML = "Hola soy un parrafo cambiado"
        }

        console.log(`Parrafo ${i+1}: ${parrafos[i].innerHTML}.`);
    }

    console.log("________________________________________________");

    // getElementByClassName - busca por clase(class)
    let parrafos2 = document.getElementsByClassName("parrafos");
    for (let i = 0; i < parrafos2.length; i++) {

        if (i == 3) {
            // Para cambiar el texto de una etiqueta
            parrafos2[i].innerHTML = "Hola soy un parrafo cambiado"
        }

        console.log(`Parrafo ${i+1}: ${parrafos2[i].innerHTML}.`);
    }

    console.log("________________________________________________");

    // querySelector() - devuelve el primero que encuentre de TODOS
    let parrafos3 = document.querySelector("p.parrafos");
    console.log(parrafos3);

    parrafos3 = document.querySelector("section.parrafos");
    console.log(parrafos3);

    parrafos3 = document.querySelector(".projects p");
    console.log(parrafos3);
    
    console.log("________________________________________________");

    // querySelectorAll() - devuelve todo lo que encuentre en un array
    let parrafos4 = document.querySelectorAll("p.parrafos");
    console.log(`Número de elementos que tengo: ${parrafos4.length}`);
    for (let i = 0; i < parrafos4.length; i++) {
        console.log(`Elemento ${i+1}: ${parrafos4[i].innerHTML}`);
    }

    console.log("________________________________________________");

    // Selecciono el DOM parcialmente
    let sectionProjects = document.getElementById("proyectos");
    console.log(sectionProjects);
    let parrafos5 = sectionProjects.querySelectorAll("p.parrafos");
    console.log(`Número de elementos que tengo: ${parrafos5.length}`)
    for (let i = 0; i < parrafos5.length; i++) {
        console.log(`Elemento ${i+1}: ${parrafos5[i].innerHTML}`);
    }
}

let estado = false;
function cambioCabecera(cabecera){
    // if (!estado) {
    //     cabecera.style.color = "red";
    //     estado = true;
    // } else {
    //     cabecera.style.color = "black";
    //     estado = false;
    // }

    // Si color esta en rojo, cambialo a negro, si esta en negro cambialo a rojo.
    cabecera.style.color = (cabecera.style.color === 'red') ? 'black' : 'red';
    
}


// Opcion 1 llamada a eventos desde JS

function cambioSubtitulo(elemento) {
    elemento.style.color = (elemento.style.color === 'cyan') ? 'pink' : 'cyan';
}

let elemento = document.getElementById("subtitle");

elemento.onclick = function() {
    cambioSubtitulo(elemento);
};


// Opcion 2 lo mas utilizado

let title3 = document.getElementById("subsubtitle");
//title3.addEventListener('click', cambioSubsubtitulo); // Utilizaremos click en la parte JS y onclick en la parte HTML
title3.addEventListener('dblclick', cambioSubsubtitulo);

function cambioSubsubtitulo(){
    let cambio = document.getElementById('subsubtitle');
    cambio.style.color = (cambio.style.color === 'fuchsia') ? 'darkorchid' : 'fuchsia';
}


// Forma 1
let c1 = document.getElementById("caja1");
c1.addEventListener("click", cambioClase1);

function cambioClase1() {
    if (c1.classList.contains("caja--negra")) { // classList genera un array de los elementos de la clase.
        c1.classList.remove("caja--negra");
        c1.classList.add("caja--roja");
    } else if (c1.classList.contains("caja--roja")) {
        c1.classList.remove("caja--roja");
        c1.classList.add("caja--negra");
    }
}

// Forma 2
let c2 = document.getElementById("caja2");
c2.addEventListener("click", cambioClase2);

function cambioClase2() {
    if (c2.classList.contains("caja--negra")) {
        c2.classList.replace("caja--negra", "caja--roja");
    } else if (c2.classList.contains("caja--roja")) {
        c2.classList.replace("caja--roja", "caja--negra");
    }
}

// Forma 3
let c3 = document.getElementById("caja3");
c3.addEventListener("click", cambioClase3);

function cambioClase3() {
    c3.classList.toggle("caja--negra");
    c3.classList.toggle("caja--roja");
}
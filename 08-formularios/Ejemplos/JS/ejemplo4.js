let si = document.getElementById("si");
let no = document.getElementById("no");

si.addEventListener("click", function(){
    let boton = document.getElementById("enviar");
    boton.hidden = false;
});

no.addEventListener("click", function(){
    let boton = document.getElementById("enviar");
    boton.hidden = true;
});
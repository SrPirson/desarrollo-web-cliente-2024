let btnCorrer = document.getElementById("correr");
btnCorrer.addEventListener("click", iniciarCarrera);

function iniciarCarrera(){
    let corredores = document.querySelectorAll("div");
    let timer;

    let corredor1 = corredores[0];
    let corredor2 = corredores[1];
    let corredor3 = corredores[2];
    let corredor4 = corredores[3];

    let velocidades = calcularVelocidades(corredores.length);
    let final = false;
    console.log(velocidades);

    let posicion1 = parseFloat(corredor1.style.getPropertyValue("left"));

    // función a ejecutar y tiempo que se va a ejecutar esa función
    timer = setInterval( function(){
        if (!final) {
            
            console.log(posicion1);
            // posicion1 = posicion1 + velocidades[0] + "px";
            corredor1.style.setProperty("left", posicion1);
            // corredor2.style.setProperty("left", (corredor2.style.getPropertyValue("left") + velocidades[1]) + "px");
            // corredor3.style.setProperty("left", (corredor3.style.getPropertyValue("left") + velocidades[2]) + "px");
            // corredor4.style.setProperty("left", (corredor4.style.getPropertyValue("left") + velocidades[3]) + "px");
        } else {
            clearInterval(timer); // para limpiar la variable y que deje de correr
        }

        if (corredor1.style.getPropertyValue("left") >= 1080) {
            final = true;
            alert("Ha ganado Corredor 1");
        }
        if (corredor2.style.getPropertyValue("left") >= 1080) {
            final = true;
            alert("Ha ganado Corredor 2");
        }
        if (corredor3.style.getPropertyValue("left") >= 1080) {
            final = true;
            alert("Ha ganado Corredor 3");
        }
        if (corredor4.style.getPropertyValue("left") >= 1080) {
            final = true;
            alert("Ha ganado Corredor 4");
        }
    }, 50);

}

function calcularVelocidades(tam) {
    let velocidades = [];
    for (let i = 0; i < tam; i++) {
        velocidades.push(parseInt(Math.random() * 5 + 1));
    }
    return velocidades;
}
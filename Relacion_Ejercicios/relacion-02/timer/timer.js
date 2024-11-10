window.onload = function(){

    let timer;

    let contador=0;
    document.getElementsByTagName("button")[0].onclick = function(){
        document.getElementsByTagName("button")[0].innerHTML = "Empezar";
        document.getElementsByTagName("button")[0].disabled = true;

        timer = setInterval(function(){
            let div = document.querySelector("div");
            contador++;
            div.innerText = contador;
            
        },1000);
    }

    document.getElementsByTagName("button")[1].onclick = function(){
        clearInterval(timer);
        document.getElementsByTagName("button")[0].innerHTML = "Continuar";
        document.getElementsByTagName("button")[0].disabled = false;
    }

    document.getElementsByTagName("button")[2].onclick = function(){
        clearInterval(timer);
        document.getElementsByTagName("button")[0].disabled = false;
        document.getElementsByTagName("button")[0].innerHTML = "Empezar";
        contador = 0;
        let div = document.querySelector("div");
        div.innerText = 0;
    }

}


//SETTIMEOUT - > SE ESPERA UNA CANTIDAD DE SEGUNDO Y ACCIONA ES COMO UN TEMPORIZADOR


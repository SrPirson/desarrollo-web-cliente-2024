let sumar = document.getElementById("suma");
sumar.addEventListener("click", sumatoria);

function sumatoria() {
    let cajon = document.getElementById("wow");
    let num = parseInt(cajon.innerHTML);
    num++;
    cajon.innerHTML = num;
}

let restar = document.getElementById("resta");
restar.addEventListener("click", restatoria);

function restatoria() {
    let cajon = document.getElementById("wow");
    let num = parseInt(cajon.innerHTML);
    num--;
    cajon.innerHTML = num;
}
let num = parseInt(prompt("Introduce un número positivo: "));

while(num < 0){
    alert("ERROR: Número negativo.")
    num = parseInt(prompt("Introduce un número positivo: "));
}
let divisores = "";
let sumaCuadrados = 0;
for (let i = 1; i <= num; i++) {
    if(num % i == 0){
        if(i == num){
            divisores += "y " + i + ".";
        } else {
            divisores += i + ", ";
        }
        
        sumaCuadrados += i * i;
    }
    
}

let cuadrado = Math.sqrt(sumaCuadrados);


alert("Divisores de " + num + " son: " + divisores);
alert("La suma de los cuadrados es: " + sumaCuadrados);
if(cuadrado == Math.floor(cuadrado)){
    alert(sumaCuadrados + " es cuadrado");
} else {
    alert(sumaCuadrados + " no es cuadrado");
}
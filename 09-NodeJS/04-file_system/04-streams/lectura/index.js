const fs = require("fs");
const readline = require("readline");


const stream = fs.createReadStream("./config/prueba.md", "utf-8");
let body = "";

// Suscribimos a los eventos predefinidos

// Evento que se ejecuta solamente la primera vez que se reciba el elemento data
stream.once("data", () => {
    console.log("Empieza la lectura");
});

// Evento que se ejecuta todas las veces que recibamos el elemento data
stream.on("data", chunk => {
    console.log("Recibo datos...");
    body += chunk;
});

// Para capturar el evento cuando termina
stream.on("end", () => {
    console.log(`Body: ${body.length}`);
});
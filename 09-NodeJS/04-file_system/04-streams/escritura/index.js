const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface(process.stdin, process.stdout); // Entrada y salida estandar

rl.question("¿Como te llamas?\n", (answer) => {
    const stream = fs.createWriteStream(`./${answer}.md`); // Creamos el fichero con el nombre que indiquen

    rl.setPrompt("¿Qué quieres decir? (exit si quieres salir)\n"); // Para cargar el texto
    rl.prompt(); // Escribimos lo que nos dicen

    rl.on("line", (data) => { // Evento para que cada vez que se escribe una linea 
        if (data.toLowerCase().trim() === "exit") {
            stream.close();
            rl.close();
        } else {
            stream.write(`${data}\n`); // Indicamos que se escriba en el fichero creado los que vayamos escribiendo
            rl.prompt();
        }
    });
});

rl.on("close", () => {
    console.log("Se termina la escritura");
})
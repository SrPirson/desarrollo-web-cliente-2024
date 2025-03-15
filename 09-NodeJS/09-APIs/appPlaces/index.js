const http = require("http");

const app = require("./src/app"); // Nos traemos la aplicación completa del app

// Cofiguración del fichero de entorno (.env)
require("dotenv").config(); // Leer el fichero .env sacar susvariables y colocarlar en proxex.env

// Configuración de la BBDD
require("./src/config/db");

const server = http.createServer(app); // Le paramos la aplicación para que gestiones las peticiones el servidor

const PORT = process.env.PORT || 3000;
server.listen(PORT);

server.on("listening", () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
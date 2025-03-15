/* 
    Primero que necesitamos son las librerias express, dotenv y cors
    npm install express dotenv cors
*/

const express = require("express"); // Requerimos express
const cors = require("cors");

const app = express();

// Configuracion App Express
app.use(cors()); // Nos permite desde cualquier dominio atacar a la API que estemos configurando aquí
app.use(express.json()); // Nos permite recibir peticiones en formato json

// /api/places
// Vamos a definir las peticiones GET POST DELETE PUT

// Indicamos que todas las rutas que empiecen por /api se gestionen en el fichero de api en routes (delegamos la ruta al fichero)
app.use("/api", require("./routes/api"));


module.exports = app; // Exportamos la aplicaión de express para poder usarla desde otro sitio
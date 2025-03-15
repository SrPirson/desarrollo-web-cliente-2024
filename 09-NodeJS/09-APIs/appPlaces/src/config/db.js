// npm install mysql2 para instalar la libreria de mysql
// Dentro de config crearemos todos los ficheros de configuración para sistemas externos como el email o cualqueir API que necesite configuración previa

const mysql = require("mysql2");

// Creamos un pool de conexiones y le pasamos las opciones de conexión a la bbdd
const pool = mysql.createPool({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT, 
    database: process.env.DB_NAME 
});

// Creamos una variable global para exportar la bbdd
global.db = pool.promise(); // Lo ponemos en formato promesa para que no tengamos problemas
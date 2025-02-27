const http = require("http");
const fsPromises = require("fs/promises");
const fs = require("fs");
const path = require("path"); // Librerios para trabajar con rutas

const server = http.createServer(async (req, res) => {
    if (req.url === "/") { // Comprobamos si la petición es la web principal

        const data = await fsPromises.readFile("./public/index.html", "utf-8"); // Leemos el fichero
        res.writeHead(200, {"Content-Type": "text/html"}); // Mandamos el codigo de bien y indicamos la cabecera de html
        res.end(data); // Mostramos el html

    } else if (req.url.match(/.css$/)) { // Expresión regular para todos los ficheros que acaben en .css

        const cssPath = path.join(__dirname, "public", req.url); // La libreria se encarga de unir todas las partes de la url y que no haya problemas de compatibilidad
        const stream = fs.createReadStream(cssPath, "utf-8");
        res.writeHead(200, {"Content-Type": "text/css"}) // Mandamos el codigo de bien y indicamos la cabecera de css
        stream.pipe(res); // Funcion pipe devuelve poco a poco hacia la salida 

    } else if (req.url.match(/.jpg$/)) {

        const jpgPath = path.join(__dirname, "public", req.url); 
        const stream = fs.createReadStream(jpgPath);
        res.writeHead(200, {"Content-Type": "image/jpeg"}) 
        stream.pipe(res); 

    } else { // Cuando entre con otra URL que no sea la indicada mostramos mensaje de error

        res.writeHead(404, {"Content-Type": "text/plain"}); // Mandamos el codigo de error y indicamos la cabecera de texto plano
        res.end("404 Not Found");
        
    }
});

server.listen(3000);
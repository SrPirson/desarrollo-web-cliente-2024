const http = require("http");

const server = http.createServer((req, res) => { // req lo que nos envia el cliente, res la respuesta que damos
    console.log("Método", req.method);
    console.log("Url", req.url);
    console.log("Headers", req.headers);    
    
    res.end("Hola server");
});

server.listen(3000); // Para que el servidor escuche en ese puerto que indicamos
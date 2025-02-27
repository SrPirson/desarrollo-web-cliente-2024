const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    
    if (req.method === "GET") {
        // Retornar formulario
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("./public/formulario.html", "utf-8").pipe(res); // Stream de lectura y enviandolo de vuelta al navegador
    } else if (req.method === "POST") {
        // Gestionar el valor del formulario
        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {
            res.end(body);
        })
    }

}).listen(3000);
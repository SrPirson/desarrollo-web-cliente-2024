const fs = require("fs"); // Requerimos el modulo de File System
const fsPromise = require("fs/promises"); // Para realizar con promesas debemos importar


// readdir nos devuelve un array con todo lo que haya en un documento.

// Síncrona
const files = fs.readdirSync("../../../01-progbasica"); // Le indicamos la ruta que queremos leer
console.log("SYNC", files);

// Asíncrona con callback
fs.readdir("../../../01-progbasica", (err, files)=>{
    console.log(err);
    console.log("ASYNC", files);
});

// Asíncrona con promesas
fsPromise.readdir("../../../01-progbasica")
    .then(files => console.log("PROMISE", files))
    .catch(err => console.log(err));

// Async-await
(async () => {
    const filesP = await fsPromise.readdir("../../../01-progbasica");
    console.log("AWAIT", filesP);
})();

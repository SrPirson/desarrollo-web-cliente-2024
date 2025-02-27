const fs = require("fs/promises");
const fsSync = require("fs");

(async () => { // async | await
    try { 
        if (!fsSync.existsSync("./config")) { // Controlamos si existe o no la carpeta
            await fs.mkdir("./config"); // Creamos el directorio config
        } else {
            console.log("El directorio ya existe");
            
        }

        await fs.appendFile("./config/prueba.md", "Contenido del fichero");
        
    } catch (error) {
        console.log(error);
    }
    
})();

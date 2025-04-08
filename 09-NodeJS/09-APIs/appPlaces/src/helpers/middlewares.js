const jwt = require("jsonwebtoken"); // Importar la librería jsonwebtoken para manejar tokens JWT

const User = require("../models/user.model"); // Importar el modelo de usuario para acceder a la base de datos

const checkToken = async (req, res, next) => { 
    // Comprobar si el token existe en la petición (headers).
    if (!req.headers["authorization"]) {
        return res.json({ fatal: "Debes incluir la cabecera de autorización" });
    }

    const token = req.headers["authorization"]; // Extraer el token de la cabecera de autorización
    // Comprobar si el token es valido y no está caducado.
    let obj;
    try {
        obj = jwt.verify(token, process.env.SECRET_KEY);
    } catch (error) {
        return res.json({ fatal: error.message }); // Si el token no es válido, devolver un error
    }

    const [users] = await User.getById(obj.user_id);
    req.user = users[0]; // Obtener el usuario de la base de datos utilizando el id del token

    console.log(req.user);
    
    

    next(); // Si todo es correcto, pasamos al siguiente middleware o controlador
}

module.exports = { 
    checkToken 
}; // Exportamos el middleware
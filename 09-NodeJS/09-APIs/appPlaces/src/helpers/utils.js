const jwt = require('jsonwebtoken');
const dayjs = require("dayjs");

const createToken = (user) => {
    const obj = {
        user_id: user.id, // id del usuario
        exp: dayjs().add(5, "minutes").unix(), // Expira en 5 minutos
    };

    return jwt.sign(obj, process.env.SECRET_KEY); // Firmamos el token con la clave secreta
};

module.exports = { 
    createToken 
};
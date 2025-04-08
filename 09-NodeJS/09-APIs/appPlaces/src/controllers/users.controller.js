const bcrypt = require('bcryptjs'); // Librería para encriptar contraseñas

const User = require('../models/user.model');
const { createToken } = require('../helpers/utils');

const register = async (req, res) => {

    req.body.password = bcrypt.hashSync(req.body.password, 8); // Encriptamos la contraseña con bcrypt

    try {
        const [result] = await User.insert(req.body);
        res.json(result); // Devolvemos el resultado de la consulta
    } catch (error) {
        res.json({ fatal: error.message }); // En caso de error, devolvemos el mensaje de error
    }
    
};

const login = async (req, res) => {

    const { email, password } = req.body; // Extraemos el email y la contraseña de la petición

    const [users] = await User.getByEmail(email); // Array de usuarios
    if (users.length === 0) {
        return res.json({ error: "Usuario y/o contraseña son inválidos"}); // Si no existe el usuario, devolvemos un error
    }

    const user = users[0]; // Obtenemos el primer usuario del array
    const equals = bcrypt.compare(password, user.password); // Comparamos la contraseña introducida con la contraseña encriptada (Booleano)
    if(!equals) {
        return res.json({ error: "Usuario y/o contraseña son inválidos"}); // Si no coinciden, devolvemos un error
    }

    res.json({ 
        success: "Login correcto", // Si coinciden, devolvemos un mensaje de éxito
        token: createToken(user), // Creamos el token con la función createToken
    }); 
}

module.exports = { register, login };
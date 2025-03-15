// Libreria de metodos para gestionar las peticiones

// Importante que la respuesta sea en .json para que sea en formato json

const Place = require("../models/place.model"); // Importamos el modelo de place para usarlo
const getAllPlaces = async (req, res) => {
    //res.json("Recuperamos todos los places");
    try { // Lo metemos dentro de un try catch por si hay algun error no se caiga el servidor
        const [places] = await Place.getAll(); // Destructuring de los datos de la BBDD
        res.json(places);
    } catch (error) {
        // Siempre las respuestas tienen que ser en formato json
        res.status(503).json({fatal: error.message})
    }
    
};

const createPlace = async (req, res) => {
    //res.json("Creamos un nuevo place");
    try {
        const [result] = await Place.insert(req.body);
        const [place] = await Place.getById(result.insertId); // el result nos devuelve un insertId que usamos para identificarlo y mostrar de forma más visual el resultado final
        res.json(place);
    } catch (error) {
        res.status(503).json({fatal: error.message})
    }
   
};

const updatePlace = (req, res) => {
    res.json("Actualizamos un place");
};

const deletePlace = (req, res) => {
    res.json("Borramos un place");
};

// Exportamos todos los metodos para poder usarlos
module.exports = {
    getAllPlaces, createPlace, updatePlace, deletePlace
};
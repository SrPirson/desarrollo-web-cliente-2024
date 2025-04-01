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

const updatePlace = async (req, res) => {
    try {
        const { placeId } = req.params; // Obtenemos el id de places

        await Place.updateById(placeId, req.body); // indicamos que queremos modificar con su respectiva id

        const [places] = await Place.getById(placeId); //Creamos una petición usando el select de la modificación


        res.json(places[0]); // Al usar una petición SELECT siempre devuelve un array, aunque sea de 1
    } catch (error) {
        res.status(503).json({faltal: error.message});
    }
    
};

const deletePlace = async (req, res) => {
    const { placeId } = req.params;

    try {
        await Place.deleteById(placeId);

        res.json({success: "Se ha borrado el place."});
    } catch (error) {
        res.status(503).json({faltal: error.message});
    }
    
};

// Exportamos todos los metodos para poder usarlos
module.exports = {
    getAllPlaces, createPlace, updatePlace, deletePlace
};
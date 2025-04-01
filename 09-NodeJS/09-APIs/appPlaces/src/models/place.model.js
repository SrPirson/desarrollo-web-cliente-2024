/* 
    Dentro de models tendremos una libreria de todas la querys que vayamos utilizando
    Es una libreria de metodos que ejecutaremos diferentes querys
*/

// Variable para obtener los datos
const getAll = () => {
    return db.query("SELECT * FROM places");
};


// Variable para la insercción de un nuevo dato
const insert = ({title, description, size, address, postal_code, price_per_month}) => { // de indicamos que debe obtener un objetos con los datos que debe introducir
    return db.query(
        "INSERT INTO places (title, description, size, address, postal_code, price_per_month, created_at, update_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [title, description, size, address, postal_code, price_per_month, new Date(), new Date()]
    )
};


// Para obtener la id del objeto que necesitemos
const getById = (placeId) => {
    return db.query("SELECT * FROM places WHERE id = ?",
    [placeId]);
}


// Query de actualización || recibe la id y todos los parametros de la tabla
const updateById = (placeId, {title, description, size, address, postal_code, price_per_month}) => {
    return db.query(
        'UPDATE places SET title = ?, description = ?, size = ?, address = ?, postal_code = ?, price_per_month = ?, update_at = ? WHERE id = ?',
        [title, description, size, address, postal_code, price_per_month, new Date(), placeId]
    );
}


// Creamos la funcion de borrar por id
const deleteById = (placeId) => {
    return db.query("DELETE FROM places WHERE id = ?", [placeId]);
}


module.exports = {
    getAll, insert, getById, updateById, deleteById
};
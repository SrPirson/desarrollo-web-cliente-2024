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


//
const getById = (placeId) => {
    return db.query("SELECT * FROM places WHERE id = ?",
    [placeId]);
}

module.exports = {
    getAll, insert, getById
};
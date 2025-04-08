const insert = ({ username, email, password }) => {
    return db.query(
        "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
        [username, email, password]
    );
};

const getByEmail = (email) => {
    return db.query("SELECT * FROM users WHERE email = ?", [email]);
};

const getById = (userId) => {
    return db.query("SELECT * FROM users WHERE id = ?", [userId]);
}

module.exports = {
    insert, getByEmail, getById
};
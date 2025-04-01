const insert = ({ username, email, password }) => {
    return db.query(
        "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
        [username, email, password]
    );
}

module.exports = {
    insert
}
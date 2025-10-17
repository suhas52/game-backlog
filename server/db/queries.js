const pool = require('./pool');

async function getAllGames() {
    const { rows } = await pool.query("SELECT * FROM games");
    return rows;
};

async function addNewGame(title, release_date, start_date = null, end_date = null, publisher_id = null, description = null, cover=null) {
    await pool.query("INSERT INTO games (title, release_date, start_date, end_date, publisher_id) VALUES ($1, $2, $3, $4, $5, $6, $7)"
        , [title, release_date, start_date, end_date, publisher_id, description, cover]);
}

async function deleteGame(gameid) {
    await pool.query("DELETE FROM games WHERE id = $1", [gameid]);
}

async function addPublisher(publisher_name) {
    await pool.query("INSERT INTO publishers (publisher) VALUES ($1)", [publisher_name]);
}

async function getPublishers() {
    const { rows } = await pool.query("SELECT * FROM publishers");
    return rows;
}

module.exports = {
    getAllGames,
    addNewGame,
    deleteGame,
    addPublisher,
    getPublishers
};
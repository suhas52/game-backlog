const { Pool } = require('pg');

module.exports = new Pool({
    host: "localhost",
    user: "suhas",
    database: "game_backlog",
    password: "Suhas9980",
    port: 5432
});
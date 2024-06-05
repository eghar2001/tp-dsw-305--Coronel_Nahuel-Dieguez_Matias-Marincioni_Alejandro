const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    port:3000,
    database: 'shopnowdb',
    user: 'root',
    password: 'root',
});

module.exports = connections;
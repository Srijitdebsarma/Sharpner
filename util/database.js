const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',  //in delta database
    password: `9475332@sD`,
});

module.exports = pool.promise();
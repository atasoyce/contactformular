const mysql = require('mysql2/promise');


const connectionParameters = mysql.createPool({
    host: 'localhost',
    database:'sessions',
    user: 'sessionUser',
    password: 'sessionPassword',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


exports.connectionParameters = connectionParameters;
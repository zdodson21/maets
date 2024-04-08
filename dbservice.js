const mssql = require('mssql');

const sqlConfig = {
    user: 'adminCNFG',
    password: 'admin',
    database: '461DB',
    server: 'localhost',
    options: {
        trustServerCertificate: true
    }
};

const pool = new mssql.ConnectionPool(sqlConfig);

pool.connect(error => {
    if (error) {
        console.log(error);
    } else {
        console.log('Connected!')
    }
});
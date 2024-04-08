const mssql = require('mssql');

const sqlConfig = {
    user: 'adminCNFG',
    password: 'admin',
    database: 'Demo',
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

let instance = null;

class DbService {
    static getDbServiceInstance() {
        return instance ? instance : new DbService();
    }
}

// https://stackoverflow.com/questions/43355971/create-local-sql-server-database
// Follow the above later, see if this works. If not, may need to use a different video as this one does not teach me what I need to do

// Connect to server name 'localhost' in MSSQL Server
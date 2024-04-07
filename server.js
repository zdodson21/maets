// Utilized Node.js tutorial video by Jinquan Zhang
// test server using 'npx nodemon server.js'

const express = require('express');
const cors = require('cors');
const server = express();

server.use(cors()); // Helps with back end <-> front end interaction
server.use(express.json()); // data can be shown in JSON format
server.use(express.static('.')); // show front end information to browser

// test
server.get('/test', (req, res) => {
    console.log('test');
});

// sign in
server.post('/signin', (req, res) => {

});


// log in
server.post('/login', (req, res) => {

});

server.listen(3000, () => console.log('server is running...'));
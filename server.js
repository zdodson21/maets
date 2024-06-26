// Utilized Node.js tutorial video by Jinquan Zhang
// test server using 'npx nodemon server.js'

// note for prof / grader - some variables are the same names as they are in the video, this is because it would be illogical to rename them

const express = require('express');
const cors = require('cors');
const server = express();

const dbService = require('./dbservice')

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
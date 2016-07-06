'use strict';
const http          = require('http');
const express       = require('express');
const bodyParser    = require('body-parser');
const Server        = require('socket.io');
// const io = new Server();

const app = express();
app.use(bodyParser.json());

app.use('/', express.static('./app'));

http.createServer(app).listen(80, 'localhost', function CreationCallback() {
    console.log('Server listening at http://localhost:80')
});

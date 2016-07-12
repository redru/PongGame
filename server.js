'use strict';
const http              = require('http');
const express           = require('express');
const bodyParser        = require('body-parser');
const Server            = require('socket.io');

const Match             = require('./core/MatchEngine');
const Authentication    = require('./core/Authentication');
// const io = new Server();

const app = express();
app.use(bodyParser.json());

app.use('/', express.static('./app'));

app.post('/register', function Register(req, res) {
    const username = req.body.username;

    if (!Match.isConnectedUser(username)) {
        return Promise.resolve(Match.register(username)).then(function(user) {
            return Authentication.generateToken({id: user.id, username: user.username}).then(function(token, err) {
                return err ? Promise.reject(err) : Promise.resolve({ user: user, token: token});
            });
        }).then(function(data) {
            console.log('Connected user', data.user.username);

            res.header('JWT', data.token);
            return res.status(200).json({ status: 0, result: data.user.username });
        }).catch(function(reason) {
            console.log(reason);
            return res.status(200).json({ status: 1, result: null });
        });
    } else {
        return res.status(200).json({ status: 1, result: null });
    }
});

http.createServer(app).listen(80, 'localhost', function CreationCallback() {
    console.log('Server listening at http://localhost:80')
});

'use strict';
const io                = require('socket.io');

const Match             = require('./MatchEngine');
const Authentication    = require('./Authentication');

const Communication = function(server) {
    const ioServer = io(server);
    const sockets = [ ];

    ioServer.on('connection', function(socket) {
        var user;
        sockets.push(socket);

        socket.on('JWT', function(data) {
            Authentication.getPayload(data.JWT).then(function(payload) {
                user = Match.getConnectedUser(payload.username);
                console.log('Valid token for player', payload.username);
            });
        });

        socket.on('disconnect', function() {
            const username = user.username;
            Match.unregister(username);
            console.log('Unregistered player:', username);
        });
    });

    function emitUserRegistered(username) {
        sockets.forEach(function(socket) {
            socket.emit('userRegistered', { users: Match.getUsersList() });
        });
    }

    return {
        emitUserRegistered: emitUserRegistered
    };
};

module.exports = Communication;

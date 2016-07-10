'use strict';
const crypto        = require('crypto');

const MatchEngine = function() {
    this._connectedUsers = [];
};

MatchEngine.prototype.register = function(username) {
    this._connectedUsers.push(new User(username));
    return this._connectedUsers[this._connectedUsers.length - 1];
};

MatchEngine.prototype.unregister = function(username) {
    delete this._connectedUsers[username];
};

MatchEngine.prototype.isConnectedUser = function(username) {
    for(let i = 0; i < this._connectedUsers.length; i++) {
        if (this._connectedUsers[i].username == username)
            return true;
    }

    return false;
};

MatchEngine.prototype.isConnectedUserCookie = function(userId) {
    for(let i = 0; i < this._connectedUsers.length; i++) {
        if (this._connectedUsers[i].id == userId)
            return true;
    }

    return false;
};

MatchEngine.prototype.getConnectedUser = function(username) {
    return this._connectedUsers[username];
};

const User = function(username) {
    this.username = username;
    this.connectionDate = new Date();
    this.gamesPlayed = 0;

    const hash = crypto.createHash('sha256');
    hash.update(username + this.connectionDate.getTime(), 'utf8');
    this.id = hash.digest('hex');
};

module.exports = new MatchEngine();

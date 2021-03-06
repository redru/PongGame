'use strict';
const jwt           = require('jsonwebtoken');

const secret = 'aaa';
const jwtOpt = {
    algorithm: 'HS256',
    expiresIn: 60 /* seconds */ * 20 /* minuts */
};

function _generateToken(payload) {
    return new Promise(function(resolve, reject) {
        jwt.sign(payload, secret, jwtOpt, function(err, token) {
            return err ? reject(err) : resolve(token);
        });
    });
}

function _getPayload(token) {
    return new Promise(function(resolve, reject) {
        jwt.verify(token, secret, function(err, payload) {
            return err ? reject(err) : resolve(payload);
        });
    })
}

function _isValidToken(req, res, next) {

}

module.exports = {
    generateToken: _generateToken,
    isValidToken: _isValidToken,
    getPayload: _getPayload
};

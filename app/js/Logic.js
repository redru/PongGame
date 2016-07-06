'use strict';
const gameBoard = $('#gameBoard')[0];
var drawCtx = gameBoard.getContext('2d');

var player = new GameObject('Player');
player.pos = { posX: 50, posY: 50 };
player.size = { sizeX: 100, sizeY: 50 };

$(document).ready(function DocumentReady() {
    drawCtx.fillStyle = "#FF0000";
    drawCtx.fillRect(player.pos.posX, player.pos.posY, player.size.sizeX, player.size.sizeY);
});

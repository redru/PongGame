'use strict';

var board = new Board('gameBoard', GAME_SURFACE.width, GAME_SURFACE.height);
var player = new Player('Player', 50, 50, PLAYER.width, PLAYER.height);

$(document).ready(function DocumentReady() {
    board.surface.mousemove(function(event) {
        player.pos = { posX: 50, posY: event.offsetY };
    });

    startGameLoop();
});

function startGameLoop() {
    setInterval(function MainGameLoop() {
        board.clear();
        player.draw(board.context);
    }, SLEEP_TIME);
}

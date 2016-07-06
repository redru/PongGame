'use strict';

var board = new Board('gameBoard', GAME_SURFACE.width, GAME_SURFACE.height);
var player = new Player('Player', PLAYER_SELF.posX, PLAYER_SELF.posY, PLAYER_SELF.width, PLAYER_SELF.height, PLAYER_SELF.color);
var contestant = new Player('Contestant', PLAYER_CONTESTANT.posX, PLAYER_CONTESTANT.posY, PLAYER_CONTESTANT.width, PLAYER_CONTESTANT.height, PLAYER_CONTESTANT.color);
var ball = new Ball('Ball', BALL.posX, BALL.posY, BALL.width, BALL.color);

var gameEngine = null;
var newPos = null;

$(document).ready(function DocumentReady() {
    gameEngine = new GameEngine(FPS, true);
    gameEngine.drawCallback = DrawCallback;
    gameEngine.preDrawCallback = PreDrawCallback;

    board.surface.mousemove(function(event) {
        newPos = { posX: PLAYER_SELF.posX, posY: (event.offsetY - PLAYER_SELF.height / 2) };

        if (newPos.posY >= board.height - PLAYER_SELF.height)
            newPos.posY = board.height - PLAYER_SELF.height;
        else if (newPos.posY < 0)
            newPos.posY = 0;

        player.pos = newPos;
    });

    gameEngine.start();
});

function PreDrawCallback() {
    ball.move(2, 2);
}

function DrawCallback() {
    board.clear();
    ball.draw(board.context);
    player.draw(board.context);
    contestant.draw(board.context);
}

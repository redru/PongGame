'use strict';
const FPS = 45;
const SLEEP_TIME = 1000 / FPS;

const GAME_SURFACE = {
    width: 1280,
    height: 720
};

const PLAYER_SELF = {
    width: 20,
    height: 75,
    posX: 50,
    posY: 50,
    color: '#0000FF'
};

const PLAYER_CONTESTANT = {
    width: 20,
    height: 75,
    posX: GAME_SURFACE.width - 20 - 50,
    posY: GAME_SURFACE.height - 75 - 50,
    color: '#FF0000'
};

const BALL = {
    width: 20,
    height: 20,
    posX: (GAME_SURFACE.width / 2) - (20 / 2),
    posY: (GAME_SURFACE.height / 2) - (20 / 2),
    color: '#00FF00'
}

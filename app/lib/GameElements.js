class Board {
    constructor(id, width, height) {
        this._id = id;
        this._surface = $('#' + id);
        this._ctx = this._surface[0].getContext('2d');
        this._width = width ? width : 0;
        this._height = height ? height : 0;

        this.update();
    }

    update() {
        this._surface.attr('width', this._width);
        this._surface.attr('height', this._height);
    }

    clear() {
        this._ctx.fillStyle = '#FFFFFF';
        this._ctx.fillRect(0, 0, this._width, this._height);
    }

    get context() {
        return this._ctx;
    }

    get surface() {
        return this._surface;
    }

    set size(size) {
        this._width = size.width ? size.width : this._width;
        this._height = size.height ? size.height : this._height;
        this.update();
    }

    get size() {
        return { width: this._width, height: this._height };
    }

    set width(width) {
        this._width = width;
        this.update();
    }

    get width() {
        return this._width;
    }

    set height(height) {
        this._height = height;
        this.update();
    }

    get height() {
        return this._height;
    }
}

class GameObject {
    constructor(name, posX, posY, width, height) {
        this._name = name;
        this._posX = posX ? posX : 0;
        this._posY = posY ? posY : 0;
        this._width = width ? width : 0;
        this._height = height ? height : 0;
    }

    move(offsetX, offsetY) {
        this._posX += offsetX;
        this._posY += offsetY;
    }

    set name(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set pos(pos) {
        this._posX = pos.posX ? pos.posX : this._posX;
        this._posY = pos.posY ? pos.posY : this._posY;
    }

    get pos() {
        return { posX: this._posX, posY: this._posY };
    }

    get posX() {
        return this._posX;
    }

    get posY() {
        return this._posY;
    }

    set size(size) {
        this._width = size.width ? size.width : this._width;
        this._height = size.height ? size.height : this._height;
    }

    get size() {
        return { width: this._width, height: this._height };
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }
}

class Timer {
    constructor() {
        this._before = 0;
        this._after = 0;
    }

    set start(startTime) {
        this._before = startTime;
    }

    set end(endTime) {
        this._after = endTime;
    }

    get elapsed() {
        return this._after - this._before;
    }
}

class GameEngine {
    constructor(fps, dev) {
        this._preDrawCallback = function() { };
        this._drawCallback = function() { };
        this._postDrawCallback = function() { };
        this._nextTicSleepTime = 0;
        this._timeDebitStock = 0;
        this._fps = fps ? fps : 15;
        this._sleepTime = 1000 / this._fps;
        this._timePassed = 0;
        this._dev = dev ? dev : false;
        this._timer = new Timer();

        if (this._dev)
            this._devStats = this.setupDevEnv();
    }

    setupDevEnv() {
        $('body').append('<div style="float: left;">FPS: <span id="fps"></span> - SLEEP TIME: <span id="sleepTime"></span> - TIME PASSED: <span id="timePassed"></span></div>');
        return {
            fps: $('#fps'),
            sleepTime: $('#sleepTime'),
            timePassed: $('#timePassed')
        }
    }

    start() {
        this.nextTic(0);
    }

    nextTic(time) {
        setTimeout(() => {
            this._timer.start = Date.now();

            this._preDrawCallback();
            this._drawCallback();
            this._postDrawCallback();

            this._timer.end = Date.now();
            this._nextTicSleepTime = this._sleepTime - this._timeDebitStock - (this._timer.elapsed / 1000);

            if (this._nextTicSleepTime < 0) {
                this._timeDebitStock -= this._nextTicSleepTime;
                this.nextTic(0);
            } else if (this._timeDebitStock != 0) {
                if (this._nextTicSleepTime > this._timeDebitStock) {
                    this._nextTicSleepTime -= this._timeDebitStock;
                    this._timeDebitStock = 0;
                    this.nextTic(this._nextTicSleepTime);
                } else if (this._nextTicSleepTime < this._timeDebitStock) {
                    this._timeDebitStock -= this._nextTicSleepTime;
                    this.nextTic(0);
                }
            } else {
                this.nextTic(this._nextTicSleepTime);
            }

            this._timePassed += this._sleepTime;

            if (this._devStats) {
                this._devStats.fps.html(this._fps);
                this._devStats.sleepTime.html(Math.floor(this._nextTicSleepTime) + ' ms');
                this._devStats.timePassed.html(Math.floor(this._timePassed + this._timeDebitStock) + ' ms');
            }
        }, time);
    }

    set preDrawCallback(cb) {
        this._preDrawCallback = cb;
    }

    set drawCallback(cb) {
        this._drawCallback = cb;
    }

    set postDrawCallback(cb) {
        this._postDrawCallback = cb;
    }
}

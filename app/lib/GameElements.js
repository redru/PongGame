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

    set height(height) {
        this._height = height;
        this.update();
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

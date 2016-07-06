class Player extends GameObject {
    constructor(name, posX, posY, width, height) {
        super(name, posX, posY, width, height);
    }

    draw(ctx) {
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(this._posX, this._posY, this._width, this._height);
    }
}
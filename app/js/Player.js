class Player extends GameObject {
    constructor(name, posX, posY, width, height, color) {
        super(name, posX, posY, width, height);

        this._color = color ? color : '#000000';
    }

    draw(ctx) {
        ctx.fillStyle = this._color;
        ctx.fillRect(this._posX, this._posY, this._width, this._height);
    }
}

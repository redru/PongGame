class Ball extends GameObject {
    constructor(name, posX, posY, width, color) {
        super(name, posX, posY, width, 0);

        this._color = color ? color : '#000000';
    }

    draw(ctx) {
        ctx.fillStyle = this._color;
        ctx.beginPath();
        ctx.arc(this._posX, this._posY, this._width, 0, 2 * Math.PI);
        ctx.fill();
    }
}

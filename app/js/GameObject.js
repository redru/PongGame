class GameObject {
    constructor(name) {
        this.name = name;
        this.posX = 0;
        this.posY = 0;
        this.sizeX = 0;
        this.sizeY = 0;
    }

    get pos() {
        return { posX: this.posX, posY: this.posY };
    }

    set pos(newPos) {
        this.posX = newPos.posX;
        this.posY = newPos.posY;
    }

    get size() {
        return { sizeX: this.sizeX, sizeY: this.sizeY };
    }

    set size(newPos) {
        this.sizeX = newPos.sizeX;
        this.sizeY = newPos.sizeY;
    }
}

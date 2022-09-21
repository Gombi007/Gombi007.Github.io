//map
export class Track {
    constructor() {
        this.imgFence = new Image();
        this.imgFence.src = './track/wood-fence.png';

        this.x = 500;
        this.y = 250;
        this.width = 300;
        this.height = 300;
    }
    update(playerMovementX) {
        this.playerMovementX = playerMovementX;
        this.fixedX = this.x + this.playerMovementX;

    }
    draw(ctx) {
        ctx.drawImage(this.imgFence, this.fixedX, this.y, this.width, this.height);
    }
    collison(startX) {
        if (this.x - startX >= 0 && this.x - startX <= 20) {
            return true
        }
        return false;



    }
}


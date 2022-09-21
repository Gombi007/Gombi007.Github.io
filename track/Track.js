//map
export class Track {
    constructor() {
        this.imgFence = new Image();
        this.imgFence.src = './track/wood-fence.png';

        this.x = 500;
        this.y = 225;
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
    collison(playerCollisonRectangle) {

        if (playerCollisonRectangle.downY > 150) {
            return false
        }

        if (this.x - playerCollisonRectangle.rightX >= 0 && this.x - playerCollisonRectangle.rightX <= 20) {
            return true
        }
        return false;
    }
}


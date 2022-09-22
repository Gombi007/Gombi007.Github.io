//track
class WoodFenceBlocker {
    constructor(image, randomXPosition) {
        this.imgFence = image;
        this.x = randomXPosition;
        this.y = 225;
        this.width = 300;
        this.height = 300;
    }
    update(playerMovementX, playerMovementY) {
        this.playerMovementX = playerMovementX;
        this.playerMovementY = playerMovementY;
        // fixing the place of blocker from player
        this.fixedX = this.x + this.playerMovementX;
    }
    draw(ctx) {
        ctx.drawImage(this.imgFence, this.fixedX, this.y, this.width, this.height);
    }
}


let woodFence1 = new Image();
woodFence1.src = './track/wood-fence.png';
let woodFenceBlocker1 = new WoodFenceBlocker(woodFence1, 750);

let woodFence2 = new Image();
woodFence2.src = './track/wood-fence.png';
let woodFenceBlocker2 = new WoodFenceBlocker(woodFence1, 1500);

let woodFence3 = new Image();
woodFence2.src = './track/wood-fence.png';
let woodFenceBlocker3 = new WoodFenceBlocker(woodFence1, 2000);

export let woodFenceBlockerObjects = [woodFenceBlocker1, woodFenceBlocker2, woodFenceBlocker3];


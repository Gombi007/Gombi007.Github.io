//track
class WoodFenceBlocker {
    constructor(image, randomXPosition, randomYPosition) {
        this.imgFence = image;
        this.x = randomXPosition;
        this.y = randomYPosition;
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
let woodFenceBlocker1 = new WoodFenceBlocker(woodFence1, 750, 225);

let woodFence2 = new Image();
woodFence2.src = './track/wood-fence.png';
let woodFenceBlocker2 = new WoodFenceBlocker(woodFence1, 1500, 225);

let woodFence3 = new Image();
woodFence2.src = './track/wood-fence.png';
let woodFenceBlocker3 = new WoodFenceBlocker(woodFence1, 2000, 225);

let doghouse = new Image();
doghouse.src = './track/dog_house.png';
let doghouseBlocker = new WoodFenceBlocker(doghouse, 0, 200);

export let woodFenceBlockerObjects = [woodFenceBlocker1, woodFenceBlocker2, woodFenceBlocker3, doghouseBlocker];


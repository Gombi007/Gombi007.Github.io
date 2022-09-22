//track
class Blocker {
    constructor(image, randomXPosition, randomYPosition, width, height) {
        this.imgFence = image;
        this.x = randomXPosition;
        this.y = randomYPosition;
        this.width = width;
        this.height = height;
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
let woodFenceBlocker1 = new Blocker(woodFence1, 750, 225, 300, 300);

let woodFence2 = new Image();
woodFence2.src = './track/wood-fence.png';
let woodFenceBlocker2 = new Blocker(woodFence1, 1500, 225, 300, 300);

let woodFence3 = new Image();
woodFence2.src = './track/wood-fence.png';
let woodFenceBlocker3 = new Blocker(woodFence1, 2000, 225, 300, 300);

let doghouse = new Image();
doghouse.src = './track/dog_house.png';
let doghouseBlocker = new Blocker(doghouse, 0, 200, 300, 300);

let rock1 = new Image();
rock1.src = './track/rock1.png';
let rock1Blocker = new Blocker(rock1, 2500, 190, 370, 370);

export let blockerObjects = [woodFenceBlocker1, woodFenceBlocker2, woodFenceBlocker3, doghouseBlocker, rock1Blocker];


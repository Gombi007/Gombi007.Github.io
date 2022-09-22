import { UNIT_OF_MOVEMENT_X, UNIT_OF_MOVEMENT_Y } from "../script.js";

//map
class WoodFenceBlocker {
    constructor(image, UNIT_OF_MOVEMENT_X, UNIT_OF_MOVEMENT_Y, randomXPosition) {
        this.unitOfMovementX = UNIT_OF_MOVEMENT_X;
        this.unitOfMovementY = UNIT_OF_MOVEMENT_Y;
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
let woodFenceBlocker1 = new WoodFenceBlocker(woodFence1, 30, 180, 700);

let woodFence2 = new Image();
woodFence2.src = './track/wood-fence.png';
let woodFenceBlocker2 = new WoodFenceBlocker(woodFence1, 30, 180, 1500);

export let woodFenceBlockerObjects = [woodFenceBlocker1, woodFenceBlocker2];


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

let doghouse = new Image();
doghouse.src = './track/dog_house.png';
let doghouseBlocker = new Blocker(doghouse, 0, 200, 300, 300);

let woodFence1 = new Image();
woodFence1.src = './track/wood-fence.png';
let woodFenceBlocker1 = new Blocker(woodFence1, 750, 250, 300, 300);

let rock1 = new Image();
rock1.src = './track/rock1.png';
let rock1Blocker = new Blocker(rock1, 1500, 190, 340, 360);

let woodFence2 = new Image();
woodFence2.src = './track/wood-fence.png';
let woodFenceBlocker2 = new Blocker(woodFence1, 2200, 225, 300, 300);

let woodFence3 = new Image();
woodFence2.src = './track/wood-fence.png';
let woodFenceBlocker3 = new Blocker(woodFence1, 2650, 225, 300, 300);

let endOfTrack = new Image();
endOfTrack.src = './track/four_wood-fences.png';
let endOfTrackBlocker = new Blocker(endOfTrack, 3600, -70, 400, 700);


export let blockerObjects = [doghouseBlocker, woodFenceBlocker1, rock1Blocker, woodFenceBlocker2, woodFenceBlocker3, endOfTrackBlocker];

export function saveAllBlockerPositions() {
    let blockerPositionsOnTheTrack = { forward: { width: [], height: [] }, back: { width: [], height: [] } }
    blockerObjects.forEach((obj) => {
        blockerPositionsOnTheTrack.forward.width.push((obj.x - 390) * -1);
        blockerPositionsOnTheTrack.forward.height.push(obj.height * -1);

        blockerPositionsOnTheTrack.back.width.push((obj.x - 120) * -1);
        blockerPositionsOnTheTrack.back.height.push(obj.height * -1);
    });
    return blockerPositionsOnTheTrack;
}

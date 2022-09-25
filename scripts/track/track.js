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
doghouse.src = './pictures/track/dog_house.png';
let doghouseBlocker = new Blocker(doghouse, 0, 400, 300, 300);

let woodFence1 = new Image();
woodFence1.src = './pictures/track/wood-fence.png';
let woodFenceBlocker1 = new Blocker(woodFence1, 750, 450, 300, 300);

let rock1 = new Image();
rock1.src = './pictures/track/rock1.png';
let rock1Blocker = new Blocker(rock1, 1500, 390, 300, 360);

let woodFence2 = new Image();
woodFence2.src = './pictures/track/wood-fence.png';
let woodFenceBlocker2 = new Blocker(woodFence1, 2200, 425, 300, 300);

let woodFence3 = new Image();
woodFence2.src = './pictures/track/wood-fence.png';
let woodFenceBlocker3 = new Blocker(woodFence1, 2650, 425, 300, 300);


let rock2 = new Image();
rock2.src = './pictures/track/rock1.png';
let rock2Blocker = new Blocker(rock1, 3200, 390, 300, 360);

let rock3 = new Image();
rock3.src = './pictures/track/rock1.png';
let rock3Blocker = new Blocker(rock1, 3600, 390, 300, 360);


let woodFence4 = new Image();
woodFence4.src = './pictures/track/wood-fence.png';
let woodFenceBlocker4 = new Blocker(woodFence1, 4200, 425, 300, 300);

let woodFence5 = new Image();
woodFence5.src = './pictures/track/wood-fence.png';
let woodFenceBlocker5 = new Blocker(woodFence1, 4900, 425, 300, 300);

let rock4 = new Image();
rock4.src = './pictures/track/rock1.png';
let rock4Blocker = new Blocker(rock1, 5700, 390, 300, 360);

let woodFence6 = new Image();
woodFence6.src = './pictures/track/wood-fence.png';
let woodFenceBlocker6 = new Blocker(woodFence1, 6300, 425, 300, 300);

let woodFence7 = new Image();
woodFence7.src = './pictures/track/wood-fence.png';
let woodFenceBlocker7 = new Blocker(woodFence1, 7000, 425, 300, 300);

let woodFence8 = new Image();
woodFence8.src = './pictures/track/wood-fence.png';
let woodFenceBlocker8 = new Blocker(woodFence1, 7700, 425, 300, 300);

let endOfTrack = new Image();
endOfTrack.src = './pictures/track/four_wood-fences.png';
let endOfTrackBlocker = new Blocker(endOfTrack, 8500, 100, 400, 700);


export let blockerObjects = [doghouseBlocker, woodFenceBlocker1, rock1Blocker, woodFenceBlocker2,
    woodFenceBlocker3, rock2Blocker, rock3Blocker, woodFenceBlocker4, woodFenceBlocker5, rock4Blocker, woodFenceBlocker6,
    woodFenceBlocker7, woodFenceBlocker8, endOfTrackBlocker];

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

//map
export class Track {
    constructor(UNIT_OF_MOVEMENT_X, UNIT_OF_MOVEMENT_Y) {
        this.unitOfMovementX = UNIT_OF_MOVEMENT_X;
        this.unitOfMovementY = UNIT_OF_MOVEMENT_Y;
        this.imgFence = new Image();
        this.imgFence.src = './track/wood-fence.png';
        this.x = 700;
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
    collison() {
        let blockerDirection = { left: false, right: false };
        let distanceBetweenPlayerAndBlocekr = this.fixedX + this.playerMovementX;

        // if you jump, you can go
        if (-this.playerMovementY > 170) {
            blockerDirection.left = false;
            blockerDirection.right = false;
            return blockerDirection;
        }
        // block the player when go Forward
        if (distanceBetweenPlayerAndBlocekr < 100 && distanceBetweenPlayerAndBlocekr > 0) {
            blockerDirection.left = false;
            blockerDirection.right = true;
            return blockerDirection;
        }
        // block the player when go Back
        if (distanceBetweenPlayerAndBlocekr < -100 && distanceBetweenPlayerAndBlocekr > -500) {
            blockerDirection.left = true;
            blockerDirection.right = false;
            return blockerDirection;
        }

        blockerDirection.left = false;
        blockerDirection.right = false;
        return blockerDirection;
    }

}


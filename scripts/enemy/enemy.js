class Enemy {
    constructor(x, y, enemyState, movementAreaXDistance, runForwardAnimations, runBackAnimations, isOnTheGroundEnenemy, speedX) {
        this.enemyState = enemyState;
        this.x = x;
        this.y = y;
        this.width = 150;
        this.height = 150;
        this.enemyImage = new Image();
        this.runForwardAnimations = runForwardAnimations;
        this.runBackAnimations = runBackAnimations;
        this.isStepForward = true;
        this.movementAreaXDistanceCounter = 0;
        this.movementAreaXDistance = movementAreaXDistance;
        this.isOnTheGroundEnenemy = isOnTheGroundEnenemy;
        this.speedX = speedX;
    }
    moveX(playerMovementX, playerMovementY) {
        this.playerMovementY = playerMovementY;
        this.fixedX = this.x + playerMovementX;
        if (this.movementAreaXDistanceCounter === this.movementAreaXDistance) {
            this.isStepForward = !this.isStepForward;
        }

        if (this.isStepForward) {
            this.fixedX += this.movementAreaXDistanceCounter * this.speedX;
        } else {
            this.fixedX += (this.movementAreaXDistance * this.speedX) - (this.movementAreaXDistanceCounter * this.speedX);
        }
    }

    update(enemyFrameStepper) {
        if (this.isStepForward) {
            this.enemyImage.src = this.runForwardAnimations[enemyFrameStepper];
        }

        if (!this.isStepForward) {
            this.enemyImage.src = this.runBackAnimations[enemyFrameStepper];
        }
    }

    draw(ctx) {
        ctx.drawImage(this.enemyImage, this.fixedX, this.y, this.width, this.height);
    }
    isCollison(isDizzy) {
        let currentXPosition = this.fixedX - 460;
        let isPlyarInEnemyRange = currentXPosition <= 10 && currentXPosition >= -10;

        if (this.isOnTheGroundEnenemy) {
            if (this.playerMovementY === 0 && !isDizzy && isPlyarInEnemyRange) {
                return true;
            }
        } else {
            if (this.playerMovementY < 0 && !isDizzy && isPlyarInEnemyRange) {
                return true;
            }
        }
    }
}
// enemy cube
let cubeForward = [
    './pictures/enemy/skeleton/skeleton-03_run_00.png',
    './pictures/enemy/skeleton/skeleton-03_run_01.png',
    './pictures/enemy/skeleton/skeleton-03_run_03.png',
    './pictures/enemy/skeleton/skeleton-03_run_04.png',
    './pictures/enemy/skeleton/skeleton-03_run_05.png',
    './pictures/enemy/skeleton/skeleton-03_run_06.png',
    './pictures/enemy/skeleton/skeleton-03_run_07.png',
    './pictures/enemy/skeleton/skeleton-03_run_08.png',
    './pictures/enemy/skeleton/skeleton-03_run_09.png',
    './pictures/enemy/skeleton/skeleton-03_run_10.png',
    './pictures/enemy/skeleton/skeleton-03_run_11.png',
    './pictures/enemy/skeleton/skeleton-03_run_12.png',
];
let cubeBack = [
    './pictures/enemy/skeleton/skeleton-03_run_13.png',
    './pictures/enemy/skeleton/skeleton-03_run_14.png',
    './pictures/enemy/skeleton/skeleton-03_run_15.png',
    './pictures/enemy/skeleton/skeleton-03_run_16.png',
    './pictures/enemy/skeleton/skeleton-03_run_17.png',
    './pictures/enemy/skeleton/skeleton-03_run_18.png',
    './pictures/enemy/skeleton/skeleton-03_run_19.png',
    './pictures/enemy/skeleton/skeleton-03_run_20.png',
    './pictures/enemy/skeleton/skeleton-03_run_21.png',
    './pictures/enemy/skeleton/skeleton-03_run_22.png',
    './pictures/enemy/skeleton/skeleton-03_run_23.png',
    './pictures/enemy/skeleton/skeleton-03_run_24.png',
];
let cube1 = new Enemy(920, 520, 0, 480, cubeForward, cubeBack, true, 1);
let cube2 = new Enemy(2350, 520, 0, 300, cubeForward, cubeBack, true, 1);
let cube3 = new Enemy(5900, 520, 0, 400, cubeForward, cubeBack, true, 1);
let cube4 = new Enemy(4350, 520, 0, 550, cubeForward, cubeBack, true, 1);

//enemy ghost
let ghostForward = [
    './pictures/enemy/ghost/skeleton-animation_17.png',
    './pictures/enemy/ghost/skeleton-animation_18.png',
    './pictures/enemy/ghost/skeleton-animation_19.png',
    './pictures/enemy/ghost/skeleton-animation_20.png',
    './pictures/enemy/ghost/skeleton-animation_21.png',
    './pictures/enemy/ghost/skeleton-animation_22.png',
    './pictures/enemy/ghost/skeleton-animation_23.png',
    './pictures/enemy/ghost/skeleton-animation_24.png',
    './pictures/enemy/ghost/skeleton-animation_25.png',
    './pictures/enemy/ghost/skeleton-animation_26.png',
    './pictures/enemy/ghost/skeleton-animation_27.png',
    './pictures/enemy/ghost/skeleton-animation_28.png',
];
let ghostBack = [
    './pictures/enemy/ghost/skeleton-animation_01.png',
    './pictures/enemy/ghost/skeleton-animation_02.png',
    './pictures/enemy/ghost/skeleton-animation_03.png',
    './pictures/enemy/ghost/skeleton-animation_04.png',
    './pictures/enemy/ghost/skeleton-animation_05.png',
    './pictures/enemy/ghost/skeleton-animation_06.png',
    './pictures/enemy/ghost/skeleton-animation_07.png',
    './pictures/enemy/ghost/skeleton-animation_08.png',
    './pictures/enemy/ghost/skeleton-animation_09.png',
    './pictures/enemy/ghost/skeleton-animation_10.png',
    './pictures/enemy/ghost/skeleton-animation_11.png',
    './pictures/enemy/ghost/skeleton-animation_12.png',

];
let ghost1 = new Enemy(300, 320, 0, 1000, ghostForward, ghostBack, false, 8);

export let enemies = [cube1, cube2, cube3, cube4, ghost1];
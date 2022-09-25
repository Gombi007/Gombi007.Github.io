class Enemy {
    constructor(x, y, enemyState, movementAreaXDistance) {
        this.enemyState = enemyState;
        this.x = x;
        this.y = y;
        this.width = 150;
        this.height = 150;
        this.enemyImage = new Image();
        this.runForwardAnimations = [
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
        this.runBackAnimations = [
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
        this.isStepForward = true;
        this.movementAreaXDistanceCounter = 0;
        this.movementAreaXDistance = movementAreaXDistance;
    }
    moveX(playerMovementX, playerMovementY) {
        this.playerMovementY = playerMovementY;
        this.fixedX = this.x + playerMovementX;
        if (this.movementAreaXDistanceCounter === this.movementAreaXDistance) {
            this.isStepForward = !this.isStepForward;
        }

        if (this.isStepForward) {
            this.fixedX += this.movementAreaXDistanceCounter * 1;
        } else {
            this.fixedX += this.movementAreaXDistance - this.movementAreaXDistanceCounter * 1;
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
        if (this.playerMovementY === 0 && !isDizzy && isPlyarInEnemyRange) {
            return true;
        }
    }
}

let enemy1 = new Enemy(920, 520, 0, 480);
let enemy2 = new Enemy(2350, 520, 0, 300);
let enemy3 = new Enemy(5900, 520, 0, 400);
let enemy4 = new Enemy(4350, 520, 0, 550);

export let enemies = [enemy1, enemy2, enemy3, enemy4];
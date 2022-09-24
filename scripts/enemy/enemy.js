export class Enemy {
    constructor(enemyState) {
        this.enemyState = enemyState;
        this.width = 100;
        this.height = 100;
        this.movementX = 0;
        this.movementY = 0;
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
        this.movementX = 900;
        this.isStepForward = true;
    }
    moveX(distanceCounter, playerMovementX) {
        this.fixedX = this.movementX + playerMovementX;

        if (distanceCounter == 0) {
            this.isStepForward = !this.isStepForward;
        }
        this.fixedX += distanceCounter * 1;
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
        ctx.drawImage(this.enemyImage, this.fixedX, 520, 150, 150);
    }

}
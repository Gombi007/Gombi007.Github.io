export class Enemy {
    constructor(enemyState) {
        this.enemyState = enemyState;
        this.width = 100;
        this.height = 100;
        this.movementX = 0;
        this.movementY = 0;
        this.enemyImage = new Image();
        this.animations = [
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
        this.enemyImage.src = this.animations[enemyState];
        this.movementX = 900;
    }
    moveX(enemyFrameStepper, playerMovementX) {
        this.fixedX = this.movementX + playerMovementX;
        this.fixedX += enemyFrameStepper * 1;

    }

    update(enemyFrameStepper) {
        this.enemyImage.src = this.animations[enemyFrameStepper];
    }

    draw(ctx) {
        ctx.drawImage(this.enemyImage, this.fixedX, 520, 150, 150);
    }

}
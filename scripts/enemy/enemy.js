class Enemy {
    constructor(enemyState) {
        this.enemyState = enemyState;
        this.width = 100;
        this.height = 100;
        this.movementX = 0;
        this.movementY = 0;
        this.enemyImage = new Image();
        this.enemyImage.src = this.animations[enemyState];
        this.animations = [
            './pictures/enemy/skeleton/skeleton-03_run_00.png',
        ];
    }

}
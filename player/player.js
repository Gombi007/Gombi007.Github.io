export class Player {
  constructor(playerState) {
    this.playerImage = new Image();
    this.playerImage.src = "./player/shadow_dog.png";
    this.spriteWidth = 575;
    this.spriteHeight = 523;
    this.playerMovementX = 0;
    this.playerMovementY = 0;
    this.playerState = playerState;
    this.animations = [
      {
        frame: 7,
        name: "idle",
        positionsX: [],
        positionsY: [],
      },
      {
        frame: 7,
        name: "jump",
        positionsX: [],
        positionsY: [],
      },
      {
        frame: 7,
        name: "fall",
        positionsX: [],
        positionsY: [],
      },
      {
        frame: 9,
        name: "run",
        positionsX: [],
        positionsY: [],
      },
      {
        frame: 11,
        name: "dizzy",
        positionsX: [],
        positionsY: [],
      },
      {
        frame: 5,
        name: "sit",
        positionsX: [],
        positionsY: [],
      },
      {
        frame: 7,
        name: "roll",
        positionsX: [],
        positionsY: [],
      },
      {
        frame: 7,
        name: "bite",
        positionsX: [],
        positionsY: [],
      },
      {
        frame: 12,
        name: "ko",
        positionsX: [],
        positionsY: [],
      },
      {
        frame: 4,
        name: "gethit",
        positionsX: [],
        positionsY: [],
      },
      {
        frame: 7,
        name: "idle-reverse",
        positionsX: [],
        positionsY: [],
      },
      {
        frame: 9,
        name: "run-reverse",
        positionsX: [],
        positionsY: [],
      },
    ];
    this.allAnimationFramePosition();
  }
  getPositionX(frameStepper) {
    return this.animations[this.playerState].positionsX[frameStepper];
  }
  getPositionY() {
    return this.animations[this.playerState].positionsY[0];
  }

  getMaxFrameIndex() {
    return this.animations[this.playerState].frame - 1;
  }

  allAnimationFramePosition() {
    this.animations.forEach((row, index) => {
      row.positionsY.push(index * this.spriteHeight);
      for (let i = 0; i < row.frame; i++) {
        row.positionsX.push(i * this.spriteWidth);
      }
    });
  }

  selectPlayerState(name) {
    let result;
    this.animations.forEach((model, index) => {
      if (model.name == name) {
        result = index;
      }
    });
    return result;
  }

  draw(ctx, frameStepper) {
    ctx.drawImage(
      this.playerImage,
      this.getPositionX(frameStepper),
      this.getPositionY(this.playerState),
      this.spriteWidth,
      this.spriteHeight,
      200,
      this.playerMovementY + 260,
      this.spriteWidth * 0.4,
      this.spriteHeight * 0.4
    );
  }
}
export class Player {
  constructor(playerState) {
    this.playerImage = new Image();
    this.playerImage.src = './player/shadow_dog.png';
    this.audioRun = new Audio('./player/sounds/dog_walk.wav');
    this.audioJump = new Audio('./player/sounds/dog_jump.wav');
    this.audioBreath = new Audio('./player/sounds/dog_breath.wav');
    this.audioBite = new Audio('./player/sounds/dog_bite.wav');
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
    this.playSounds();
    ctx.drawImage(
      this.playerImage,
      this.getPositionX(frameStepper),
      this.getPositionY(this.playerState),
      this.spriteWidth,
      this.spriteHeight,
      300,
      this.playerMovementY + 260,
      this.spriteWidth * 0.4,
      this.spriteHeight * 0.4
    );
  }

  playSounds() {
    this.playerState === 0 || this.playerState === 5 || this.playerState === 7
      || this.playerState === 1 ? this.audioRun.pause() : null;
    this.playerState === 0 ? this.audioBreath.pause() : null;

    this.playerState === 3 || this.playerState === 11 ? this.audioRun.play() : null;
    this.playerState === 1 ? this.audioJump.play() : null;
    this.playerState === 5 ? this.audioBreath.play() : null;
    this.playerState === 7 ? this.audioBite.play() : null;
  }
}


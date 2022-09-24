import { Player } from "./scripts/player/player.js";
import { Enemy } from "./scripts/enemy/enemy.js";
import { Hud } from "./scripts/HUD/hud.js";
import { blockerObjects, saveAllBlockerPositions } from "./scripts/track/track.js";
import { gameObjects as backgrounds } from "./scripts/background/background.js";
import { KeyboardController } from "./scripts/control/control.js";


/* @type {HTMLCanvasElement} */
let BROWSER_WINDOW_WIDTH = window.innerWidth > 1000 ? 1500 : window.innerWidth;
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = BROWSER_WINDOW_WIDTH);
const CANVAS_HEIGHT = (canvas.height = 700);

let UNIT_OF_MOVEMENT_X = 30;
let UNIT_OF_MOVEMENT_Y = 180;
let SPEED = 6;
let GAME_FRAME = 0;
let gameOver = null;
const hud = new Hud(ctx);
const player = new Player(0);
let PLAYER_FRAME_STEPPER = 0;
const enemy = new Enemy(0);
let ENEMY_FRAME_STEEPER = 0;
let isClearFORWARD = true;
let isClearBACK = true;
let blockerPositions = saveAllBlockerPositions();

function animate() {

  hud.removeALife = false;
  isClearFORWARD = true;
  isClearBACK = true;
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  isClearFORWARD = isCollison('forward', player.playerMovementX, player.playerMovementY, blockerPositions).forward;
  isClearBACK = isCollison('back', player.playerMovementX, player.playerMovementY, blockerPositions).back;

  //render backgrounds
  backgrounds.forEach((background) => {
    background.update(player.playerMovementX);
    background.draw(ctx);
  });

  //Test text 
  if (player.playerMovementX < -2500) {
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("END OF THE TRACK", canvas.width / 2, 50);
  }

  //render track
  blockerObjects.forEach(obj => {
    obj.update(player.playerMovementX, player.playerMovementY);
    obj.draw(ctx);
  });

  //render player
  player.draw(ctx, PLAYER_FRAME_STEPPER);
  if (GAME_FRAME % SPEED == 0) {
    if (PLAYER_FRAME_STEPPER < player.getMaxFrameIndex()) {
      PLAYER_FRAME_STEPPER++;
    } else {
      PLAYER_FRAME_STEPPER = 0;
    }
  }

  //render enemy
  enemy.moveX(player.playerMovementX, player.playerMovementY);
  enemy.update(ENEMY_FRAME_STEEPER);
  enemy.draw(ctx);
  if (enemy.isCollison(player.playerState === 4)) {
    hud.removeALife = true;
    player.playerState = 4;
    setTimeout(() => {
      if (player.playerState === 4) {
        player.playerState = 0;
      }
    }, 2000)
  }

  if (enemy.movementAreaXDistanceCounter < enemy.movementAreaXDistance) {
    enemy.movementAreaXDistanceCounter++;
  } else {
    enemy.movementAreaXDistanceCounter = 0;
  }

  //game speed
  if (GAME_FRAME % SPEED == 0) {
    if (ENEMY_FRAME_STEEPER < enemy.runForwardAnimations.length - 1) {
      ENEMY_FRAME_STEEPER++;
    } else {
      ENEMY_FRAME_STEEPER = 0;
    }
  }
  GAME_FRAME++;

  gameOver = requestAnimationFrame(animate);

  if (hud.isGameOver()) {
    cancelAnimationFrame(gameOver);
    restart();
  }
  //render hud
  hud.draw(player.playerState);

}
animate();

function restart() {
  let div = document.getElementById('restart');

  let para = document.createElement("p");
  para.id = 'gameOver';
  para.innerHTML = 'Game Over'

  let btn = document.createElement("button");
  btn.innerHTML = "Restart";
  btn.addEventListener("click", () => {
    location.reload();
  });

  div.appendChild(para);
  div.appendChild(btn);
}

//control
document.getElementById("slider").addEventListener("change", (event) => {
  switch (event.target.value) {
    case '1':
      SPEED = 10;
      UNIT_OF_MOVEMENT_X -= 15;
      break;
    case '3':
      SPEED = 3;
      UNIT_OF_MOVEMENT_X += 15;
      break;
    default:
      SPEED = 6;
      UNIT_OF_MOVEMENT_X = 30;
  }
});


document.getElementById("animations").addEventListener("change", (event) => {
  player.playerState = player.selectPlayerState(event.target.value);
});

const keyboard = new KeyboardController(player, {
  ArrowLeft: () => {
    if (player.playerMovementX < 0 && isClearBACK) {
      player.playerMovementX += UNIT_OF_MOVEMENT_X;
      player.playerState = 11;
    }
  },
  ArrowRight: () => {
    if (isClearFORWARD) {
      player.playerMovementX -= UNIT_OF_MOVEMENT_X;
      player.playerState = 3
    }
  },
  ArrowUp: () => {
    if (player.playerMovementY == 0) {
      player.playerState = 1;
      player.playerMovementY -= UNIT_OF_MOVEMENT_Y;
    }

  },
  ArrowDown: () => {
    player.playerState = 5;
    keyboard.blur();
  },
  Space: () => {
    player.playerState = 7;
    keyboard.blur();
  },
}, 40);

function isCollison(direction, playerCurrentPositionX, playerCurrentPositionY, blockerPositions) {
  let clearDirections = { forward: true, back: true };

  if (direction === 'forward') {
    for (let i = 0; i < blockerPositions.forward.width.length; i++) {
      const positionWidth = blockerPositions.forward.width[i];
      const positionHeight = blockerPositions.forward.height[i];
      //block player when front of the blcoker and the player on the ground
      if ((playerCurrentPositionY == 0 && playerCurrentPositionX < (positionWidth + 20) && playerCurrentPositionX > (positionWidth - 20))) {
        clearDirections.forward = false;
      }
      //block player when front of the blcoker and the player in the air and the blocker is higher than jump
      if (playerCurrentPositionY < 0 && positionHeight < (playerCurrentPositionY * 2) && playerCurrentPositionX < (positionWidth + 20) && playerCurrentPositionX > (positionWidth - 20)) {
        clearDirections.forward = false;
      }
    }
    return clearDirections;
  }

  if (direction === 'back') {
    for (let i = 0; i < blockerPositions.back.width.length; i++) {
      const positionWidth = blockerPositions.back.width[i];
      const positionHeight = blockerPositions.back.height[i];
      //block player when front of the blcoker and the player on the ground   
      if ((playerCurrentPositionY == 0 && playerCurrentPositionX < (positionWidth + 20) && playerCurrentPositionX > (positionWidth - 30))) {
        clearDirections.back = false;
      }
      //block player when front of the blcoker and the player in the air and the blocker is higher than jump
      if (playerCurrentPositionY < 0 && positionHeight < (playerCurrentPositionY * 2) && playerCurrentPositionX < (positionWidth + 20) && playerCurrentPositionX > (positionWidth - 20)) {
        clearDirections.back = false;
      }
    }
    return clearDirections;
  }
}


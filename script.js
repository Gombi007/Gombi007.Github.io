import { Player } from "./player/player.js";
import { woodFenceBlockerObjects } from "./track/track.js";
import { gameObjects as backgrounds } from "./background/background.js";
import { KeyboardController } from "./control/control.js";

/* @type {HTMLCanvasElement} */
let BROWSER_WINDOW_WIDTH = window.innerWidth > 1000 ? 1000 : window.innerWidth;
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = BROWSER_WINDOW_WIDTH);
const CANVAS_HEIGHT = (canvas.height = 500);

export let UNIT_OF_MOVEMENT_X = 30;
export let UNIT_OF_MOVEMENT_Y = 180;
let SPEED = 6;
let GAME_FRAME = 0;
let FRAME_STEPPER = 0;
const player = new Player(0);
let blockerFORWARD = false;
let blockerBACK = false;

function animate() {
  blockerFORWARD = false;
  blockerBACK = false;
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  blockerFORWARD = isCollison('forward', player.playerMovementX, player.playerMovementY, woodFenceBlockerObjects).forward;
  blockerBACK = isCollison('back', player.playerMovementX, player.playerMovementY, woodFenceBlockerObjects).back;

  //render backgrounds
  backgrounds.forEach((background) => {
    background.update(player.playerMovementX);
    background.draw(ctx);
  });

  //render track
  woodFenceBlockerObjects.forEach(obj => {
    obj.update(player.playerMovementX, player.playerMovementY);
    obj.draw(ctx);
  });


  //render player
  player.draw(ctx, FRAME_STEPPER);

  if (GAME_FRAME % SPEED == 0) {
    if (FRAME_STEPPER < player.getMaxFrameIndex()) {
      FRAME_STEPPER++;
    } else {
      FRAME_STEPPER = 0;
    }
  }

  GAME_FRAME++;
  requestAnimationFrame(animate);
}
animate();

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
    if (player.playerMovementX < 0 && !blockerBACK) {
      player.playerMovementX += UNIT_OF_MOVEMENT_X;
      player.playerState = 11;
    }
  },
  ArrowRight: () => {
    if (!blockerFORWARD) {
      player.playerMovementX -= UNIT_OF_MOVEMENT_X;
      player.playerState = 3
    }
  },
  ArrowUp: () => {
    if (player.playerMovementY == 0) {
      player.playerState = 1;
      player.playerMovementY -= UNIT_OF_MOVEMENT_Y;
    } else if (player.playerMovementY === (player.playerMovementY - UNIT_OF_MOVEMENT_Y)) {
      player.playerMovementY = 0;
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

function isCollison(direction, playerCurrentPositionX, playerCurrentPositionY, blockerObjects) {
  let blockerDirection = { forward: false, back: false };

  // if you jump, you can go  
  if (playerCurrentPositionY < -170) {
    blockerDirection.forward = false;
    blockerDirection.back = false;
    return blockerDirection;
  }

  // save all blocker postion
  let blockerPositionsOnTheTrack = { forward: [], back: [] }
  blockerObjects.forEach((obj) => {
    blockerPositionsOnTheTrack.forward.push((obj.x - 390) * -1);
    blockerPositionsOnTheTrack.back.push((obj.x - 120) * -1);
  });

  // block the player when go Forward
  if (direction === 'forward') {
    for (const position of blockerPositionsOnTheTrack.forward) {
      if (playerCurrentPositionX < (position + 20) && playerCurrentPositionX > position) {
        blockerDirection.forward = true;
        blockerDirection.back = false;
      }
    }
  }

  // block the player when go Back
  if (direction === 'back') {
    for (const position of blockerPositionsOnTheTrack.back) {
      if ((playerCurrentPositionX < (position + 20) && playerCurrentPositionX > position)) {
        blockerDirection.forward = false;
        blockerDirection.back = true;
      }
    }
  }
  return blockerDirection;
}


import { Player } from "./player/player.js";
import { blockerObjects } from "./track/track.js";
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
let isClearFORWARD = true;
let isClearBACK = true;

function animate() {
  isClearFORWARD = true;
  isClearBACK = true;
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  isClearFORWARD = isCollison('forward', player.playerMovementX, player.playerMovementY, blockerObjects).forward;
  isClearBACK = isCollison('back', player.playerMovementX, player.playerMovementY, blockerObjects).back;

  //render backgrounds
  backgrounds.forEach((background) => {
    background.update(player.playerMovementX);
    background.draw(ctx);
  });

  //render track
  blockerObjects.forEach(obj => {
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
  let clearDirections = { forward: true, back: true };

  // save all blocker postion
  let blockerPositionsOnTheTrack = { forward: { width: [], height: [] }, back: { width: [], height: [] } }
  blockerObjects.forEach((obj) => {
    blockerPositionsOnTheTrack.forward.width.push((obj.x - 390) * -1);
    blockerPositionsOnTheTrack.forward.height.push(obj.height * -1);

    blockerPositionsOnTheTrack.back.width.push((obj.x - 120) * -1);
    blockerPositionsOnTheTrack.back.height.push(obj.height * -1);
  });

  if (direction === 'forward') {
    for (let i = 0; i < blockerPositionsOnTheTrack.forward.width.length; i++) {
      const positionWidth = blockerPositionsOnTheTrack.forward.width[i];
      const positionHeight = blockerPositionsOnTheTrack.forward.height[i];
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
    for (let i = 0; i < blockerPositionsOnTheTrack.back.width.length; i++) {
      const positionWidth = blockerPositionsOnTheTrack.back.width[i];
      const positionHeight = blockerPositionsOnTheTrack.back.height[i];
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


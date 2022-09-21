import { Player } from "./player/player.js";
import { Track } from "./track/track.js";
import { gameObjects as backgrounds } from "./background/background.js";
import { KeyboardController } from "./control/control.js";

/* @type {HTMLCanvasElement} */
let BROWSER_WINDOW_WIDTH = window.innerWidth > 1000 ? 1000 : window.innerWidth;
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = BROWSER_WINDOW_WIDTH);
const CANVAS_HEIGHT = (canvas.height = 500);

let UNIT_OF_MOVEMENT_X = 30;
let UNIT_OF_MOVEMENT_Y = 160;
let SPEED = 6;
let GAME_FRAME = 0;
let FRAME_STEPPER = 0;
const player = new Player(0);
const track = new Track();
let playerBlocker = false;

function animate() {
  playerBlocker = false;
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  //render backgrounds
  backgrounds.forEach((background) => {
    background.update(player.playerMovementX);
    background.draw(ctx);
  });

  //render track
  track.update(player.playerMovementX)
  track.draw(ctx);
  if (track.collison(player.getCollisonRectangle().startX) === true) {
    playerBlocker = true;
  }


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
    if (player.playerMovementX < 0) {
      player.playerMovementX += UNIT_OF_MOVEMENT_X;
      player.playerState = 11;
    }
  },
  ArrowRight: () => {
    if (!playerBlocker) {
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





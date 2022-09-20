import { Player } from "./player/player.js";
import { gameObjects as backgrounds } from "./background/background.js";
import { KeyboardController } from "./control/control.js";

/* @type {HTMLCanvasElement} */
let BROWSER_WINDOW_WIDTH = window.innerWidth > 1000 ? 1000 : window.innerWidth;
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = BROWSER_WINDOW_WIDTH);
const CANVAS_HEIGHT = (canvas.height = 500);

let PLAYER_STATE = 0;
let PLAYER_RUNNING_SPEED = 16;
let SPEED = 6;
let GAME_FRAME = 0;
let FRAME_STEPPER = 0;
const player = new Player(0);

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  //render backgrounds
  backgrounds.forEach((background) => {
    background.update(player.playerMovementX);
    background.draw(ctx);
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
document.getElementById("animations").addEventListener("change", (event) => {
  PLAYER_STATE = player.selectPlayerState(event.target.value);
});

const keyboard = new KeyboardController(player, {
  ArrowLeft: () => {
    if (player.playerMovementX < 0) {
      player.playerMovementX += 30;
      player.playerState = 11;
    }
  },
  ArrowRight: () => {
    player.playerMovementX -= 30;
    player.playerState = 3
  },
  ArrowUp: () => {
    if (player.playerMovementY == 0) {
      player.playerMovementY -= 200;
      player.playerState = 1;
    }
  },
  ArrowDown: () => {
    player.playerState = 5;
  }
}, 40);


/*
document.getElementById("slider").addEventListener("change", (event) => {
  SPEED = 12 / event.target.value;
  PLAYER_RUNNING_SPEED = event.target.value * 8;
});
*/



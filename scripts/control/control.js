export class KeyboardController {
  constructor(player, keys, repeat) {
    this.player = player;
    this.keys = keys;
    this.repeat = repeat;
    this.timers = {};

    document.onkeydown = event => this.keydown(event);
    document.onkeyup = event => this.keyup(event);
    window.onblur = () => this.blur;
  }

  keydown(event) {
    event.stopPropagation();
    const code = event.code;

    if (!(code in this.keys)) return true;
    if (!(code in this.timers)) {
      this.timers[code] = null;
      this.keys[code]();
      if (this.repeat) this.timers[code] = setInterval(this.keys[code], this.repeat);
    }

    return false;
  }

  keyup(event) {
    const code = event.code;

    if (code === 'ArrowUp') {
      this.player.playerMovementY = 0;
      this.player.playerState = 2;
    }

    if (code in this.timers) {
      if (this.timers[code]) clearInterval(this.timers[code]);
      delete this.timers[code];
    }

    if (Object.keys(this.timers).length === 0) {
      setTimeout(() => {
        this.player.playerState = 0;
      }, 150);
    }

  }

  blur() {
    for (let key in this.timers)
      if (this.timers[key]) clearInterval(this.timers[key]);
    this.timers = {};
  }
}


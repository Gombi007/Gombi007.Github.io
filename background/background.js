//background
class Layer {
  constructor(image, speedModifier) {
    this.x = 0;
    this.y = 0;
    this.width = 1667;
    this.height = 700;
    this.image = image;
    this.speedModifier = speedModifier;
  }
  update(playerMovementX) {
    this.playerMovementX = playerMovementX;
    this.x = (playerMovementX * this.speedModifier) % this.width;
  }
  draw(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
  }
}

const backgroundLayer1 = new Image();
backgroundLayer1.src = "background/layer-1.png";
const layer1 = new Layer(backgroundLayer1, 0.2);

const backgroundLayer2 = new Image();
backgroundLayer2.src = "background/layer-2.png";
const layer2 = new Layer(backgroundLayer2, 0.5);

const backgroundLayer3 = new Image();
backgroundLayer3.src = "background/layer-3.png";
const layer3 = new Layer(backgroundLayer3, 0.7);

const backgroundLayer4 = new Image();
backgroundLayer4.src = "background/layer-4.png";
const layer4 = new Layer(backgroundLayer4, 0.7);

const backgroundLayer5 = new Image();
backgroundLayer5.src = "background/layer-5.png";
const layer5 = new Layer(backgroundLayer5, 1);

export const gameObjects = [layer1, layer2, layer3, layer4, layer5];

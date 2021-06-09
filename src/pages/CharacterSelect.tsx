import React from "react";
import Page from "../atomic-design/templates/Page";
import useCanvas from "../test/useCanvas";
import underwaterImage from "../assets/images/underwater.jpg";
import waterBubbleImage from "../assets/images/water_bubble.png";
import DemoAnimations from "../test/DemoAnimations";

function drawFillImage(img: HTMLImageElement, ctx: CanvasRenderingContext2D) {
  const canvas = ctx.canvas;
  var scale = Math.max(canvas.width / img.width, canvas.height / img.height);
  var x = canvas.width / 2 - (img.width / 2) * scale;
  var y = canvas.height / 2 - (img.height / 2) * scale;
  ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max + 1);
}

function getRandomFloat(max: number) {
  return Math.random() * max + 1;
}

class Bubble {
  img: HTMLImageElement;
  location!: { x: number; y: number };
  size: { height: number; width: number };
  wind!: number;
  speed!: number;
  frame: number = 1;
  constructor(img: HTMLImageElement, size?: { height: number; width: number }) {
    this.img = img;
    this.size = size || { height: 15, width: 15 };
    this.reset();
  }

  reset() {
    this.wind = getRandomFloat(1) - 1.5;
    this.speed = getRandomFloat(5) + 1;
    this.location = {
      x: getRandomFloat(window.innerWidth),
      y: window.innerHeight,
    };
    this.frame = 1;
    return this;
  }
  move() {
    if (
      this.location.y < 0 ||
      this.location.x < 0 ||
      this.location.x > window.innerWidth
    ) {
      this.reset();
    }
    this.frame++;
    this.location.x += this.wind;
    this.location.y -= this.speed;
  }
  render(ctx: CanvasRenderingContext2D) {
    if (this.img) {
      this.move();
      ctx.drawImage(
        this.img,
        this.location.x,
        this.location.y,
        this.size.height,
        this.size.width
      );
    }
  }
}

type WaterBubbleConfig = {
  number?: number;
};

const bubbles: Bubble[] = [];

function drawWaterBubbles(
  ctx: CanvasRenderingContext2D,
  config?: WaterBubbleConfig
) {
  const numberOfBubbles = config?.number || 5;
  //   applyBackgroundColor(ctx);
  const bubbleImage = new Image();
  bubbleImage.src = waterBubbleImage;

  bubbleImage.onload = () => {
    for (let i = 0; i < numberOfBubbles; i++) {
      const sz = getRandomFloat(30);
      const bubble = new Bubble(bubbleImage, {
        height: sz,
        width: sz,
      });
      bubble.render(ctx);
      bubbles.push(bubble);
    }
  };
}

function applyBackgroundColor(ctx: CanvasRenderingContext2D) {
  console.log("applying", ctx.canvas.width, ctx.canvas.height);
  ctx.save();
  ctx.fillStyle = "rgba(255,0,200,1)";
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.restore();
}

export const Canvas = () => {
  const drawBackground = (
    ctx: CanvasRenderingContext2D,
    frameCount: number
  ) => {
    const backgroundImage = new Image();
    backgroundImage.src = underwaterImage;
    backgroundImage.onload = () => {
      drawFillImage(backgroundImage, ctx);
    };
  };

  const drawInteractive = (
    ctx: CanvasRenderingContext2D,
    frameCount: number
  ) => {
    if (frameCount === 1) {
      drawWaterBubbles(ctx, { number: 50 });
    }
    bubbles.forEach((bubble) => bubble.render(ctx));
  };

  const backgroundRef = useCanvas(drawBackground);
  const interactiveRef = useCanvas(drawInteractive, {
    isFullScreen: true,
    animate: true,
  });
  return (
    <Page>
      <h1 className="text-xl fixed z-20 top-1/3">Select Your Character</h1>
      <canvas className="w-full h-full fixed z-10" ref={backgroundRef}>
        Your browser doesn't support HTML canvas
      </canvas>
      <canvas className="w-full h-full fixed z-20" ref={interactiveRef}>
        Your browser doesn't support HTML canvas
      </canvas>
      <DemoAnimations />
    </Page>
  );
};

export default Canvas;

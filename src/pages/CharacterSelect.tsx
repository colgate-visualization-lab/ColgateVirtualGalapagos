import React from "react";
import Page from "../atomic-design/templates/Page";
import useCanvas from "../test/useCanvas";
const underwaterImage = "/images/character_select_background.png";
const waterBubbleImage = "/images/water_bubble.png";
import Carousel from "../atomic-design/molecules/Carousel/Carousel";
const characterSheet = "/sprites/attacking_soldier.png";
import { Text } from "../atomic-design/atoms";
import { Character } from "../atomic-design/organisms";

const birdSheet = "/sprites/bird.png";
const blueBirdSheet = "/sprites/blue_bird.png";

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
  if (bubbles.length) return;
  const numberOfBubbles = config?.number || 5;
  //   applyBackgroundColor(ctx);
  const bubbleImage = new window.Image();
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
    const backgroundImage = new window.Image();
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

  const handleCharacterSelect = (name: string) => {};

  return (
    <Page>
      <div className="fixed z-20 top-1/3">
        <Text
          text="Select Your Character"
          color="text-dark"
          type="heading"
          size="lg"
        />
      </div>
      <canvas className="w-full h-full fixed z-10" ref={backgroundRef}>
        Your browser doesn't support HTML canvas
      </canvas>
      <canvas className="w-full h-full fixed z-20" ref={interactiveRef}>
        Your browser doesn't support HTML canvas
      </canvas>
      <Carousel className="fixed z-20" onSelect={() => handleCharacterSelect}>
        <Character
          title="Cool Character 1"
          filename={characterSheet}
          bounds={{ x: 0, y: 0, width: 516, height: 306 }}
          frame={{ width: 172, height: 153 }}
          speed={200}
        />
        <Character
          title="Birdie"
          filename={birdSheet}
          initialFrame={0}
          bounds={{ x: 0, y: 0, width: 1029, height: 903 }}
          frame={{ width: 343, height: 301 }}
          speed={200}
          scale={{ x: 0.8, y: 0.55 }}
        />
        <Character
          title="Cool Character 2"
          filename={characterSheet}
          bounds={{ x: 0, y: 0, width: 516, height: 306 }}
          frame={{ width: 172, height: 153 }}
          speed={200}
        />
        <Character
          title="Blue Birdie"
          initialFrame={0}
          filename={blueBirdSheet}
          bounds={{ x: 0, y: 0, width: 1029, height: 903 }}
          frame={{ width: 343, height: 301 }}
          speed={250}
          scale={{ x: 0.8, y: 0.55 }}
        />
      </Carousel>
    </Page>
  );
};

export default Canvas;

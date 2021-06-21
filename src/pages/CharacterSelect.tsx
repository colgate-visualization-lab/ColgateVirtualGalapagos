import React, { memo, ReactElement, useState } from "react";
import Page from "../atomic-design/templates/Page";
import useCanvas from "../test/useCanvas";
const waterBubbleImage = "/images/water_bubble.png";
import Carousel from "../atomic-design/molecules/Carousel/Carousel";
import { Text } from "../atomic-design/atoms";
import { Character } from "../atomic-design/organisms";
import { drawCanvasBackgroundImage } from "../utils";
import characterList from "../utils/characterList";
import { CharacterType, useGameContext } from "../contexts/GameContext";
import Button from "../atomic-design/atoms/Button/Button";
import { useTransitionContext } from "../contexts/TransitionContext";

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

export const Canvas = memo(() => {
  const drawInteractive = (
    ctx: CanvasRenderingContext2D,
    frameCount: number
  ) => {
    if (frameCount === 1) {
      drawWaterBubbles(ctx, { number: 50 });
    }
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    bubbles.forEach((bubble) => bubble.render(ctx));
  };

  const [character, setCharacter] = useState<CharacterType>();
  const { characters, addCharacter } = useGameContext();
  const { startTransition } = useTransitionContext();

  const backgroundRef = useCanvas((ctx: CanvasRenderingContext2D) => {
    drawCanvasBackgroundImage(ctx, "/images/underwater.jpg");
  });
  const interactiveRef = useCanvas(drawInteractive, {
    isFullScreen: true,
    animate: true,
  });

  const handleCharacterSelect = (name: string) => {
    const selectedCharacter = characterList.find(
      (character: CharacterType) => character.name === name
    );
    if (selectedCharacter) {
      addCharacter(selectedCharacter);
      setCharacter(selectedCharacter);
    }
  };

  return (
    <Page>
      <canvas className="w-full h-full fixed z-10" ref={backgroundRef}>
        Your browser doesn't support HTML canvas
      </canvas>
      <canvas
        className="w-full h-full opacity-30 fixed z-20"
        ref={interactiveRef}
      >
        Your browser doesn't support HTML canvas
      </canvas>
      {character ? (
        <div className="z-20 h-60 animate-fade-in">
          <Character
            name={character.name}
            speech={character.quotes && character.quotes[0]}
            {...character.spriteConfig}
          />
          <Button
            size="lg"
            variant="wooden"
            onClick={() => startTransition("/mysteries")}
          >
            <Text text="Onwards!" color="text-dark" />
          </Button>
        </div>
      ) : (
        <>
          <div className="fixed z-20 top-1/3">
            <Text
              text="Select Your Buddy"
              color="text-dark"
              type="heading"
              size="lg"
            />
          </div>
          <Carousel className="fixed z-20">
            {characterList.map((character: CharacterType) => (
              <Character
                onClick={handleCharacterSelect}
                key={character.name}
                name={character.name}
                info={character.quotes && character.quotes[0]}
                {...character.spriteConfig}
              />
            ))}
          </Carousel>
        </>
      )}
    </Page>
  );
});

export default Canvas;

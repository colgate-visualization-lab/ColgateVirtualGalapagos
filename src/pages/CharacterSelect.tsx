import React, { memo, useCallback, useState } from "react";
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
  const [allCharacters] = useState(() =>
    characterList.filter((ch: CharacterType) => ch.role === "buddy")
  );
  const [character, setCharacter] = useState<CharacterType>(allCharacters[0]);
  const { characters, addCharacter } = useGameContext();
  const { startTransition } = useTransitionContext();
  const [confirmed, setConfirmed] = useState(false);

  //[TODO] There might be a potential race condition here?
  // What if Mysteries page mounts before character is set into state?
  const confirmSelection = () => {
    addCharacter(character);
    startTransition("/mysteries");
  };

  const updateCurrentCharacter = useCallback(
    (idx: number) => setCharacter(allCharacters[idx]),
    [allCharacters]
  );
  return (
    <Page>
      <Background />
      {confirmed ? (
        <div className="z-20 h-60 animate-fade-in">
          <Character
            className="-scale-x-100"
            name={character.name}
            speech={
              (character.situationalQuotes?.pick &&
                character.situationalQuotes?.pick[0]) ||
              (character.quotes && character.quotes[0])
            }
            speechPosition="top"
          />
          <div className="flex">
            <Button
              size="lg"
              variant="wooden"
              className="opacity-80"
              onClick={() => setConfirmed(false)}
            >
              <Text text="Pick Again" color="text-dark" />
            </Button>
            <Button
              size="lg"
              className="ml-2"
              variant="wooden"
              onClick={confirmSelection}
            >
              <Text text="Onwards!" color="text-dark" />
            </Button>
          </div>
        </div>
      ) : (
        <>
          <div className="relative z-20 -translate-y-32">
            <Text
              text="Select Your Buddy"
              color="text-dark"
              type="heading"
              size="lg"
            />
          </div>
          <Carousel
            onChange={updateCurrentCharacter}
            className="relative z-20 animate-fade-in"
          >
            {allCharacters.map((character: CharacterType) => (
              <Character
                key={character.name}
                name={character.name}
                info={character.quotes && character.quotes[0]}
                {...character.spriteConfig}
              />
            ))}
          </Carousel>
          <Button
            className="translate-y-28"
            size="lg"
            variant="wooden"
            onClick={() => setConfirmed(true)}
          >
            <Text
              text={"Pick " + character.displayName || character.name}
              color="text-dark"
            />
          </Button>
        </>
      )}
    </Page>
  );
});

const Background = memo(() => {
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

  const backgroundRef = useCanvas(
    (ctx: CanvasRenderingContext2D) => {
      drawCanvasBackgroundImage(ctx, "/images/underwater.jpg");
    },
    { isFullScreen: true }
  );
  const interactiveRef = useCanvas(drawInteractive, {
    isFullScreen: true,
    animate: true,
  });

  return (
    <>
      <canvas className="w-full h-full fixed z-10" ref={backgroundRef}>
        Your browser doesn't support HTML canvas
      </canvas>
      <canvas
        className="w-full h-full opacity-30 fixed z-20"
        ref={interactiveRef}
      >
        Your browser doesn't support HTML canvas
      </canvas>
    </>
  );
});

export default Canvas;

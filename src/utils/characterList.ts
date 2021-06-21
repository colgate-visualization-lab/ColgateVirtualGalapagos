import { CharacterType } from "../contexts/GameContext";

const characters: CharacterType[] = [
  {
    name: "lordOfLight",
    quotes: ["I will fight for you!"],

    spriteConfig: {
      fileName: "/sprites/attacking_soldier.png",
      bounds: { x: 0, y: 0, width: 516, height: 306 },
      frame: { width: 172, height: 153 },
      speed: 200,
    },
  },
  {
    name: "blueBirdie",
    quotes: ["I am blue and will assist you."],
    spriteConfig: {
      fileName: "/sprites/blue_bird.png",
      bounds: { x: 0, y: 0, width: 1029, height: 903 },
      frame: { width: 343, height: 301 },
      speed: 200,
      scale: { x: 0.8, y: 0.55 },
    },
  },
  {
    name: "lordOfLight2",
    quotes: ["I will also fight for you"],
    spriteConfig: {
      fileName: "/sprites/attacking_soldier.png",
      bounds: { x: 0, y: 0, width: 516, height: 306 },
      frame: { width: 172, height: 153 },
      speed: 200,
    },
  },

  {
    name: "greenBirdie",
    quotes: ["I am green and I fly."],
    spriteConfig: {
      fileName: "/sprites/bird.png",
      bounds: { x: 0, y: 0, width: 1029, height: 903 },
      frame: { width: 343, height: 301 },
      speed: 250,
      scale: { x: 0.8, y: 0.55 },
    },
  },
];
export default characters;

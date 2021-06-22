import { CharacterType } from "../contexts/GameContext";

const characters: CharacterType[] = [
  {
    name: "lordOfLight",
    displayName: "Lord Of Light",
    quotes: ["I will fight for you!"],
    situationalQuotes: {
      pick: [
        "Thanks for picking me as your buddy! I'd be glad to show you around.",
      ],
    },
    spriteConfig: {
      fileName: "/sprites/attacking_soldier.png",
      bounds: { x: 0, y: 0, width: 516, height: 306 },
      frame: { width: 172, height: 153 },
      speed: 200,
    },
  },
  {
    name: "blueBirdie",
    displayName: "Blue Birdie",
    quotes: ["I am blue and will assist you."],

    situationalQuotes: {
      pick: ["Blue birdie is glad you picked her as your buddy!"],
    },
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
    displayName: "Lord Of Light II",
    quotes: ["I will also fight for you"],
    situationalQuotes: {
      pick: [
        "I thought the second Lord would go unnoticed. You shall not regret this.",
      ],
    },
    spriteConfig: {
      fileName: "/sprites/attacking_soldier.png",
      bounds: { x: 0, y: 0, width: 516, height: 306 },
      frame: { width: 172, height: 153 },
      speed: 200,
    },
  },

  {
    name: "greenBirdie",
    displayName: "Green Birdie",
    quotes: ["I am green and I fly."],
    situationalQuotes: {
      pick: ["I'll fly around and help you spot things!"],
    },
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

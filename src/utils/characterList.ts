import { CharacterType } from "../contexts/GameContext";

const characterList: CharacterType[] = [
  {
    name: "carlos",
    displayName: "Carlos",
    quotes: ["I will fight for you!"],
    situationalQuotes: {
      pick: [
        "Hi, I am Carlos. Thanks for picking me as your buddy! I'd be glad to show you around.",
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
    name: "adriana",
    displayName: "Adriana",
    quotes: ["I am blue, and I will assist you."],

    situationalQuotes: {
      pick: ["Adriana is glad you picked her as your buddy!"],
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
    name: "alberto",
    displayName: "Alberto",
    quotes: ["I am green and I fly."],
    situationalQuotes: {
      pick: [
        "Hi there. I am Alberto. I'll fly around and help you spot things!",
      ],
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
export default characterList;

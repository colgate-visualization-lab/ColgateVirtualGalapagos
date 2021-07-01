import { CharacterType } from "../contexts/GameContext";

const characterList: CharacterType[] = [
  {
    name: "sula",
    displayName: "Sula",
    quotes: ["I am Sula, the diety Booby"],
    spriteConfig: {
      fileName: "/sprites/bird.png",
      bounds: { x: 0, y: 0, width: 1029, height: 903 },
      frame: { width: 343, height: 301 },
      speed: 250,
      scale: { x: 0.8, y: 0.55 },
    },
  },
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
    name: "dan",
    displayName: "Dan",
    quotes: ["I Dr. Dan, and I am a biologist"],
    situationalQuotes: {},
    spriteConfig: {
      fileName: "/sprites/knight_attack.png",
      bounds: { x: 0, y: 0, width: 3168, height: 64 },
      frame: { width: 144, height: 64 },
      speed: 200,
      scale: { x: 2, y: 2 },
    },
  },
  {
    name: "wade",
    displayName: "Wade",
    quotes: ["I Dr. Wade, and I am a oeacnographer"],
    situationalQuotes: {},
    spriteConfig: {
      fileName: "/sprites/blue_bird.png",
      bounds: { x: 0, y: 0, width: 1029, height: 903 },
      frame: { width: 343, height: 301 },
      speed: 200,
      scale: { x: 0.8, y: 0.55 },
    },
  },
  {
    name: "jade",
    displayName: "Jade",
    quotes: ["I Dr. Dan, and I am a geologist"],
    situationalQuotes: {},
    spriteConfig: {
      fileName: "/sprites/blue_bird.png",
      bounds: { x: 0, y: 0, width: 1029, height: 903 },
      frame: { width: 343, height: 301 },
      speed: 200,
      scale: { x: 0.8, y: 0.55 },
    },
  },
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

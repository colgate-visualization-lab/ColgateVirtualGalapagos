import React, { createContext, useState } from "react";
import { AnimatedSpriteSheetProps } from "../atomic-design/molecules";
import { ValidCharacterNames } from "../types";
import characterList from "../utils/characterList";
import { makeContextHook } from "./utils";
export const GameContext = createContext({});
export const useGameContext = makeContextHook("useGameContext", GameContext);

export type CharacterType = {
  name: ValidCharacterNames;
  displayName?: string;
  role?: "guide" | "buddy" | "scientist";
  quotes?: string[];
  getRandomQuote?: Function;
  situationalQuotes?: {
    pick?: string[];
    click?: string[];
    hover?: string[];
  };
  spriteConfig: {
    fileName: AnimatedSpriteSheetProps["fileName"];
    bounds?: AnimatedSpriteSheetProps["bounds"];
    frame?: AnimatedSpriteSheetProps["frame"];
    speed?: AnimatedSpriteSheetProps["speed"];
    scale?: AnimatedSpriteSheetProps["scale"];
  };
};

export type GameProps = {
  characters: CharacterType[];
  doubloons: number;
};

export default function GameContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState<GameProps>({
    characters: [],
    doubloons: 0,
  });

  function addCharacter(character: CharacterType) {
    setState((state) => ({
      ...state,
      characters: [...state.characters, character],
    }));
  }

  function addDoubloon(doubloon: number) {
    setState((state) => ({
      ...state,
      doubloons: state.doubloons + doubloon,
    }));
  }

  return (
    <GameContext.Provider
      value={{
        ...state,
        addCharacter,
        addDoubloon,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

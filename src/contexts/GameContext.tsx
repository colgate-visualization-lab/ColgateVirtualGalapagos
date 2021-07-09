import React, { createContext, useState } from "react";
import { AnimatedSpriteSheetProps } from "../atomic-design/molecules";
import { ValidCharacterNames } from "../types";
import { makeContextHook } from "./utils";
export const GameContext = createContext({});
export const useGameContext = makeContextHook("useGameContext", GameContext);

export type CharacterType = {
  name: ValidCharacterNames;
  displayName?: string;
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

export type BackpackType = {
  name: string;
  description: string;
  };


export type Doubloon = {
  imgSrc: string;
  module?: string;
};

export type GameProps = {
  characters: CharacterType[];
  doubloons: Doubloon[];
};

export default function GameContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState<GameProps>({
    characters: [],
    doubloons: [],
  });

  function addCharacter(character: CharacterType) {
    setState((state) => ({
      ...state,
      characters: [...state.characters, character],
    }));
  }

  function addDoubloon(doubloon: Doubloon) {
    setState((state) => ({
      ...state,
      doubloons: [...state.doubloons, doubloon],
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

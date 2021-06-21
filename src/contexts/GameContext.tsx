import React, { createContext, useState } from "react";
import { AnimatedSpriteSheetProps } from "../atomic-design/molecules";
import { makeContextHook } from "./utils";
export const GameContext = createContext({});
export const useGameContext = makeContextHook("useGameContext", GameContext);

export type CharacterType = {
  name: string;
  quotes?: string[];
  spriteConfig: {
    fileName: AnimatedSpriteSheetProps["fileName"];
    bounds?: AnimatedSpriteSheetProps["bounds"];
    frame?: AnimatedSpriteSheetProps["frame"];
    speed?: AnimatedSpriteSheetProps["speed"];
    scale?: AnimatedSpriteSheetProps["scale"];
  };
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

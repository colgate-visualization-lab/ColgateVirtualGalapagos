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

export type BackpackType = {
  name: string;
  description: string;
};

export type Doubloon = {
  imgSrc: string;
  module?: string;
};

export type GameProps = {
  buddy: CharacterType;
  doubloons: number;
};

export default function GameContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState<GameProps>({
    buddy: characterList[5],
    doubloons: 0,
  });

  function changeBuddy(buddy: CharacterType) {
    setState((state) => ({
      ...state,
      buddy,
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
        changeBuddy,
        addDoubloon,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

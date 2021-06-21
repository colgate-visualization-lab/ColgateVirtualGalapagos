import React, { useState } from "react";
import { Redirect } from "react-router";
import { StaticAnimal, Text } from "../atomic-design/atoms";
import SpeechBubble from "../atomic-design/molecules/SpeechBubble/SpeechBubble";
import { Character } from "../atomic-design/organisms";
import GameBar from "../atomic-design/templates/GameBar";
import Page from "../atomic-design/templates/Page";
import { useGameContext } from "../contexts/GameContext";
import Islands from "../test/Islands";
import { Island } from "../test/islandsInfo";
const birdSheet = "/sprites/bird.png";

export default function Mysteries() {
  const [info, setInfo] = useState<string>();
  const { characters } = useGameContext();

  const currentCharacter = characters[characters.length - 1];
  return !currentCharacter ? (
    <Redirect to="/character_select" />
  ) : (
    <Page>
      <Islands
        className="h-9/12 xl:h-10/12 w-full max-w-screen-xl mx-auto mb-auto p-5"
        onMouseEnter={(island: Island) => setInfo((i) => island.info)}
        onMouseLeave={() => setInfo(undefined)}
      />
      <GameBar className="h-3/12 xl:h-2/12">
        <div className="absolute left-0 transform -translate-x-1/3">
          <Character
            name={currentCharacter.name}
            speech="Click on the islands to dive into one of many mysteries hidden in the Galapagos."
            {...currentCharacter.spriteConfig}
          />
        </div>
      </GameBar>
      {info && <InfoBox info={info} />}
    </Page>
  );
}

function InfoBox({ info, className }: { info: string; className?: string }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div
      onAnimationEnd={() => setShowInfo(true)}
      className={
        "fixed right-0 animate-slide-in-left top-0 h-1/2 z-40 " + className
      }
    >
      <StaticAnimal
        species="turtle"
        className="h-auto w-40 transform translate-x-1/2 -rotate-30 -scale-x-100"
      />
      {showInfo && (
        <div className="fixed right-20 top-20">
          <SpeechBubble text={info} position="bottom left" />
        </div>
      )}
    </div>
  );
}

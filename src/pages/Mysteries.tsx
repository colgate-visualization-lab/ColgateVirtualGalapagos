import React, { useState } from "react";
import { Redirect } from "react-router";
import { StaticAnimal } from "../atomic-design/atoms";
import Compass from "../atomic-design/atoms/Compass/Compass";
import SpeechBubble from "../atomic-design/molecules/SpeechBubble/SpeechBubble";
import Conversation from "../atomic-design/templates/Conversation";
import GameBar from "../atomic-design/templates/GameBar";
import Page from "../atomic-design/templates/Page";
import { useGameContext } from "../contexts/GameContext";
import IslandBackgound from "../test/IslandBackgound";
import Islands from "../test/Islands";
import { Island, ModuleType } from "../test/islandsInfo";

export default function Mysteries() {
  const [info, setInfo] = useState<string>();
  const { characters } = useGameContext();

  const currentCharacter = characters[characters.length - 1];
  return !currentCharacter ? (
    <Redirect to="/character_select" />
  ) : (
    <Page className="bg-gradient-to-t from-primary to-primary-dark">
      <div className="fixed w-20 h-20 z-40 top-5 left-5">
        <Compass isAnimating={false} />
      </div>
      <IslandBackgound className="h-9/12 2xl:h-10/12 w-full fixed top-0 left-1/2 transform -translate-x-1/2 p-10" />

      <Islands
        className="h-9/12 2xl:h-10/12 w-full fixed top-0 left-1/2 transform -translate-x-1/2 p-10"
        onMouseEnter={(island: Island | ModuleType) =>
          setInfo((i) => island.info)
        }
        onMouseLeave={() => setInfo(undefined)}
      />
      <GameBar className="h-3/12 2xl:h-2/12">
        <Conversation
          characters={[currentCharacter.name]}
          script={[
            {
              speaker: currentCharacter.name,
              speech:
                "Click on the islands to dive into one of many mysteries hidden in the Galapagos.",
              audio: "/audio/welcome.mp3",
            },
          ]}
        />
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

import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router";
import { StaticAnimal, Text } from "../atomic-design/atoms";
import Button from "../atomic-design/atoms/Button/Button";
import SpeechBubble from "../atomic-design/molecules/SpeechBubble/SpeechBubble";
import Conversation, {
  ScriptType,
} from "../atomic-design/templates/Conversation";
import GameBar from "../atomic-design/templates/GameBar";
import { useGameContext } from "../contexts/GameContext";
import { useTransitionContext } from "../contexts/TransitionContext";
import IslandBackgound from "../atomic-design/atoms/islands/IslandBackgound";
import Islands from "../atomic-design/atoms/islands/Islands";
import { Island, Module } from "../atomic-design/atoms/islands/islandsInfo";
import GamePage from "../atomic-design/templates/GamePage";

export default function Mysteries() {
  const [info, setInfo] = useState<string>();
  const [selectedIsland, setSelectedIsland] = useState<Island>();

  const { buddy } = useGameContext();
  const { startTransition } = useTransitionContext();
  const [script, setScript] = useState<ScriptType>();
  const history = useHistory();

  useEffect(() => {
    if (selectedIsland) {
      setScript({
        lines: [
          {
            speaker: buddy?.name,
            speech: `That's ${
              selectedIsland.displayName || selectedIsland.name
            }! Feel free to take a look around the modules, or click on the button to explore the mystery futher.`,
          },
        ],
      });
    } else {
      setScript({
        id: "first",
        lines: [
          {
            speaker: buddy?.name,
            speech: "So many islands! Which one do you wanna go to?",
            audio: "/audio/welcome.mp3",
          },
        ],
      });
    }
  }, [selectedIsland]);

  return !buddy ? (
    <Redirect to="/character_select" />
  ) : (
    <GamePage className="bg-gradient-to-t from-primary to-primary-dark">
      {selectedIsland && (
        <div className="fixed top-5 left-1/2 z-40 transform -translate-x-1/2">
          <Button
            onClick={() =>
              startTransition(`/mysteries/${selectedIsland.name}`, "boat")
            }
            aria-label="Back to menu"
            size="lg"
            variant="wooden"
          >
            <Text text={`Go to ${selectedIsland.name}`} color="text-dark" />
          </Button>
        </div>
      )}

      <IslandBackgound className="h-9/12 w-full fixed top-0 left-1/2 transform -translate-x-1/2 p-10" />

      <Islands
        className="h-9/12 w-full fixed top-0 left-1/2 transform -translate-x-1/2 p-10"
        onMouseEnter={(island: Island | Module) => setInfo(island.info)}
        onMouseLeave={() => setInfo(undefined)}
        onIslandSelect={(island?: Island) => setSelectedIsland(island)}
        selectedIsland={selectedIsland?.name}
      />
      <GameBar className="h-3/12 ">
        {script && <Conversation script={script} />}
      </GameBar>
      {info && <InfoBox info={info} />}
    </GamePage>
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

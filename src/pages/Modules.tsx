import React, { useEffect, useState } from "react";
import { Redirect, useHistory, useParams } from "react-router";
import { StaticAnimal, Text } from "../atomic-design/atoms";
import Button from "../atomic-design/atoms/Button/Button";
import Compass from "../atomic-design/atoms/Compass/Compass";
import SpeechBubble from "../atomic-design/molecules/SpeechBubble/SpeechBubble";
import Conversation, {
  LineType,
  ScriptType,
} from "../atomic-design/templates/Conversation";
import GameBar from "../atomic-design/templates/GameBar";
import Page from "../atomic-design/templates/Page";
import { CharacterType, useGameContext } from "../contexts/GameContext";
import { useTransitionContext } from "../contexts/TransitionContext";
import IslandBackgound from "../test/IslandBackgound";
import Islands from "../test/Islands";
import islands, { Island, ModuleType } from "../test/islandsInfo";
import { ValidIslandNames } from "../types";
import { makeIntroScript } from "../utils/script";

export default function Modules() {
  const [info, setInfo] = useState<string>();
  const [selectedIsland, setSelectedIsland] = useState<Island>();
  const [inScriptMode, setScriptMode] = useState(false);
  const { characters } = useGameContext();
  const { startTransition } = useTransitionContext();
  const [script, setScript] = useState<ScriptType>();
  const history = useHistory();
  const params = useParams<{ name?: ValidIslandNames }>();

  useEffect(() => {
    console.log("changed:::", params);
    if (params.name) {
      const island = islands.find((island) => island.name === params.name);
      if (island) {
        setScript(makeIntroScript(params.name, currentCharacter, "demoUser"));
        setScriptMode(true);
        setSelectedIsland(island);
      } else history.replace("/mysteries");
    }
  }, [params.name]);

  const currentCharacter = characters[characters.length - 1];
  return !currentCharacter ? (
    <Redirect to="/character_select" />
  ) : (
    <Page className="bg-gradient-to-t from-primary to-primary-dark">
      {selectedIsland && !params.name && (
        <div className="fixed top-5 left-1/2 z-40 transform -translate-x-1/2">
          <Button
            onClick={() => startTransition(`/mysteries/${selectedIsland.name}`)}
            size="lg"
            variant="wooden"
          >
            <Text text={`Go to ${selectedIsland.name}`} color="text-dark" />
          </Button>
        </div>
      )}
      <div className="fixed w-20 h-20 z-40 top-5 left-5">
        <Button variant="icon" onClick={() => history.push("/main_menu")}>
          <Compass isAnimating={false} />
        </Button>
      </div>
      <IslandBackgound className="h-9/12 w-full fixed top-0 left-1/2 transform -translate-x-1/2 p-10" />

      <Islands
        className={
          (inScriptMode ? "pointer-events-none" : "") +
          " h-9/12 w-full fixed top-0 left-1/2 transform -translate-x-1/2 p-10"
        }
        onMouseEnter={(island: Island | ModuleType) => setInfo(island.info)}
        onMouseLeave={() => setInfo(undefined)}
        onSelect={
          params.name
            ? undefined
            : (island: Island) => setSelectedIsland(island)
        }
        selectedIsland={selectedIsland?.name}
      />
      <GameBar className="h-3/12 ">
        {script && (
          <Conversation script={script} onFinish={() => setScriptMode(false)} />
        )}
      </GameBar>
      {info && !inScriptMode && <InfoBox info={info} />}
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

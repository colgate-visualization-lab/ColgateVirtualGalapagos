import React, { useCallback, useEffect, useState } from "react";
import { Redirect } from "react-router";
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
import { useGameContext } from "../contexts/GameContext";
import IslandBackgound from "../test/IslandBackgound";
import Islands from "../test/Islands";
import { Island, ModuleType } from "../test/islandsInfo";

export default function Mysteries() {
  const [info, setInfo] = useState<string>();
  const [selectedIsland, setSelectedIsland] = useState<Island>();
  const { characters } = useGameContext();
  const [script, setScript] = useState<ScriptType>();

  useEffect(() => {
    if (selectedIsland) {
      setScript({
        id: "second",
        lines: [
          {
            speaker: "sula",
            speech: "Hey there you two!",
          },
          {
            speaker: currentCharacter.name,
            speech: "Hi Sula!",
          },
          {
            speaker: "sula",
            speech:
              "Good to see you again. Welcome to Isabela, the largest island in the Galapagos. It's home to six volcanoes, extremely rare pink iguanas, and a fascinating scientific mystery.",
          },
          {
            speaker: currentCharacter.name,
            speech:
              "There's a MYSTERY on Isabela? What is it about? Why hasn't it been solved yet? Who is tyring to solve it? When--",
          },
          {
            speaker: "sula",
            speech: `Whoa, Whoa, slow down there, ${
              currentCharacter.displayName || currentCharacter.name
            }! How about I introduce you to some of my scientist friends to tell you about it.`,
            directedTo: currentCharacter.name,
          },
        ],
      });
    } else {
      setScript({
        id: "first",
        lines: [
          {
            speaker: currentCharacter?.name,
            speech: "So many islands! Which one do you wanna go to?",
            audio: "/audio/welcome.mp3",
          },
        ],
      });
    }
  }, [selectedIsland]);

  const handleScriptFinish = useCallback((id: string) => {
    if (id === "second") {
      setScript({
        id: "third",
        lines: [
          {
            speaker: "jade",
            speech:
              "I think the answer to our mystery might have to do with tectonic plates! There’s a subduction zone not so far away, you know.",
          },
          {
            speaker: "wade",
            speech:
              "That's a good point! I think that the ocean currents are involved. Maybe a few iguanas made their way over from San Cristobal.. Marine iguanas are really great swimmers!",
          },
          {
            speaker: "dan",
            speech: "They sure are. Well I think--",
          },
          {
            speaker: "dan",
            speech: "Oh, hi Sula! What are you doing here?",
            directedTo: "sula",
          },
          {
            speaker: "sula",
            speech:
              "Hey there! I want all of you to meet some friends of mine.",
          },
          {
            speaker: currentCharacter.name,
            speech:
              "Nice to meet you! I'm Terry and this is my friend _____. We're scientists too!",
          },
          {
            speaker: "jade",
            speech:
              "Good to meet you both! My name is Jade and these two are Dan and Wade",
          },
        ],
      });
    }
  }, []);

  const currentCharacter = characters[characters.length - 1];
  return !currentCharacter ? (
    <Redirect to="/character_select" />
  ) : (
    <Page className="bg-gradient-to-t from-primary to-primary-dark">
      {selectedIsland && (
        <div className="fixed top-5 left-1/2 z-40 transform -translate-x-1/2">
          <Button size="lg" variant="wooden">
            <Text text={`Go to ${selectedIsland.name}`} color="text-dark" />
          </Button>
        </div>
      )}
      <div className="fixed w-20 h-20 z-40 top-5 left-5">
        <Compass isAnimating={false} />
      </div>
      <IslandBackgound className="h-9/12 w-full fixed top-0 left-1/2 transform -translate-x-1/2 p-10" />

      <Islands
        className="h-9/12  w-full fixed top-0 left-1/2 transform -translate-x-1/2 p-10"
        onMouseEnter={(island: Island | ModuleType) =>
          setInfo((i) => island.info)
        }
        onMouseLeave={() => setInfo(undefined)}
        onSelect={(island: Island) => setSelectedIsland(island)}
      />
      <GameBar className="h-3/12 ">
        {script && (
          <Conversation script={script} onFinish={handleScriptFinish} />
        )}
      </GameBar>
      {info && !selectedIsland && <InfoBox info={info} />}
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

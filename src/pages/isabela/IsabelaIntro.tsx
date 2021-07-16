import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router";
import { Text } from "../../atomic-design/atoms";
import { Character } from "../../atomic-design/organisms";
import Conversation, {
  LineType,
  ScriptType,
} from "../../atomic-design/templates/Conversation";
import GameBar from "../../atomic-design/templates/GameBar";
import MysteryIntro from "../../atomic-design/templates/MysteryIntro";
import Notification from "../../atomic-design/templates/Notification";
import { useAudioContext } from "../../contexts/AudioContext";
import { useGameContext } from "../../contexts/GameContext";
import { useNotificationContext } from "../../contexts/NotificationContext";
import { useTransitionContext } from "../../contexts/TransitionContext";
import { Module } from "../../test/islandsInfo";
import { makeIntroScript } from "../../utils/script";

export default function Modules() {
  const [inScriptMode, setScriptMode] = useState(false);
  const { characters } = useGameContext();
  const { setThemeMusic } = useAudioContext();
  const { addNotification, removeNotification } = useNotificationContext();
  const { startTransition } = useTransitionContext();
  const [script, setScript] = useState<ScriptType>();
  const history = useHistory();
  const currentCharacter = characters[characters.length - 1];

  useEffect(() => {
    if (currentCharacter) {
      setScript(makeIntroScript("isabela", currentCharacter, "demoUser"));
      setScriptMode(true);
    } else history.replace("/mysteries");
  }, [currentCharacter]);

  useEffect(() => {
    setThemeMusic("isabela");

    return () => setThemeMusic("global");
  }, []);

  const handleCheckpoints = (line: LineType) => {
    if (line.id === "show-dan-wade") {
      addNotification({
        id: "danwade",
        content: (
          <div className="flex">
            <div className="w-1/2 flex items-center flex-col">
              <Character name="dan" />
              <Text text="Dan" color="text-dark" />
            </div>
            <div className="w-1/2 flex items-center flex-col">
              <Character name="wade" />
              <Text text="Wade" color="text-dark" />
            </div>
          </div>
        ),
        scope: "speech",
      });
    } else if (line.id === "hide-dan-wade") {
      removeNotification("danwade");
    }
  };

  return !currentCharacter ? (
    <Redirect to="/character_select" />
  ) : (
    <MysteryIntro
      island="isabela"
      mouseDisabled={inScriptMode}
      onModuleSelect={(module?: Module) =>
        module && startTransition(`isabela/${module.name}`)
      }
    >
      <GameBar className="h-3/12 ">
        {script && (
          <Conversation
            script={script}
            onFinish={() => setScriptMode(false)}
            onCheckPoint={handleCheckpoints}
          />
        )}
      </GameBar>
    </MysteryIntro>
  );
}

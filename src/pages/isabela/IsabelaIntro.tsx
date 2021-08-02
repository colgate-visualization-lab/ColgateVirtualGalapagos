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
import { useAudioContext } from "../../contexts/AudioContext";
import { useGameContext } from "../../contexts/GameContext";
import { useNotificationContext } from "../../contexts/NotificationContext";
import { useTransitionContext } from "../../contexts/TransitionContext";
import { Module } from "../../atomic-design/atoms/islands/islandsInfo";
import { makeIntroScript } from "../../utils/script";

export default function Modules() {
  const [inScriptMode, setScriptMode] = useState(false);
  const { buddy } = useGameContext();
  const { setThemeMusic } = useAudioContext();
  const { addNotification, clearNotifications } = useNotificationContext();
  const { startTransition } = useTransitionContext();
  const [script, setScript] = useState<ScriptType>();
  const history = useHistory();

  useEffect(() => {
    if (buddy) {
      setScript(makeIntroScript("isabela", buddy, "demoUser"));
      setScriptMode(true);
    } else history.replace("/mysteries");
  }, [buddy]);

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
    } else {
      clearNotifications("speech");
    }
  };

  return !buddy ? (
    <Redirect to="/character_select" />
  ) : (
    <MysteryIntro
      island="isabela"
      mouseDisabled={inScriptMode}
      onModuleSelect={(module?: Module) =>
        module && startTransition(`isabela/${module.name}`, "boat")
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

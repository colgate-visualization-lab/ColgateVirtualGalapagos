import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { useSettingsContext } from "../../contexts/SettingsContext";
import { ValidCharacterNames } from "../../types";
import Button from "../atoms/Button/Button";
import { Character } from "../organisms";
import { CharacterProps } from "../organisms/Character/Character";
import {
  AiFillStepForward,
  AiFillStepBackward,
  AiFillForward,
  AiOutlineRedo,
} from "react-icons/ai";

import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { useAudioContext } from "../../contexts/AudioContext";
import Notification from "./Notification";
import { useNotificationContext } from "../../contexts/NotificationContext";

export interface LineType extends Omit<CharacterProps, "name"> {
  id?: string;
  speaker: ValidCharacterNames;
  sceneInfo?: string;
  directedTo?: ValidCharacterNames;
  isCheckpoint?: boolean;
  vocab?: string[];
}

export interface ScriptType {
  id?: string;
  lines: LineType[];
}

export interface ConversationProps {
  script: ScriptType;
  autoContinue?: boolean;
  autoPlayAudio?: boolean;
  onFinish?: Function;
  onCheckPoint?: (line: LineType) => any;
}

const Conversation = ({
  script,
  onFinish,
  onCheckPoint,
}: ConversationProps) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const currentLine = script.lines[currentLineIndex] || {};

  const [characters, setCharacters] = useState<ValidCharacterNames[]>([]);
  const [isPlaying, setPlaying] = useState(false);
  const isCheckPointActive = useRef(false);

  const { settings } = useSettingsContext();
  const { setNarrationAudio, narration } = useAudioContext();

  const [narrationEnded, setNarrationEnded] = useState(false);
  const { addNotification, removeNotification } = useNotificationContext();

  const timeoutId = useRef<number>();

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId.current);
      setNarrationAudio({ isPlaying: false });
    };
  }, []);

  useEffect(() => {
    if (script) {
      const newCharacters: ValidCharacterNames[] = [];
      script.lines.forEach((line) => {
        if (!newCharacters.includes(line.speaker)) {
          newCharacters.push(line.speaker);
        }
        if (line.directedTo && !newCharacters.includes(line.directedTo)) {
          newCharacters.push(line.directedTo);
        }
      });
      let charactersChanged =
        newCharacters.length !== characters.length ||
        newCharacters.filter((chr) => !characters.includes(chr)).length > 0;
      if (charactersChanged) {
        setCharacters(newCharacters);
      }
      setCurrentLineIndex(0);
    }
  }, [script]);

  const handleNarrationEnd = useCallback(() => {
    setNarrationEnded(true);
  }, [script]);

  useEffect(() => {
    if (currentLineIndex != null && currentLineIndex < script.lines.length) {
      setNarrationAudio({
        src: script.lines[currentLineIndex].audio,
        onEnd: handleNarrationEnd,
        isPlaying: settings.autoPlayAudio,
      });
      setNarrationEnded(false);
      if (currentLine.sceneInfo)
        addNotification({
          id: "info",
          content: currentLine.sceneInfo,
          scope: "speech",
        });
    }

    if (currentLineIndex === script.lines.length - 1) {
      onFinish && onFinish(script.id);
    }

    return () => removeNotification("info");
  }, [currentLineIndex]);

  useEffect(() => {
    if (isPlaying) {
      if (settings.autoPlayAudio) {
        setNarrationAudio({ isPlaying: true });
      }
    } else {
      setNarrationAudio({ isPlaying: false });
    }
  }, [isPlaying]);

  useEffect(() => {
    if (currentLine.isCheckpoint && !isCheckPointActive?.current) {
      onCheckPoint && onCheckPoint(currentLine);
      isCheckPointActive.current = true;
    }
    timeoutId.current = autoAdvanceScript();
    if (timeoutId.current != null) return () => clearTimeout(timeoutId.current);
  }, [isPlaying, currentLineIndex, characters, narration]);

  function autoAdvanceScript() {
    if (isPlaying) {
      if (narration.isPlaying && !narrationEnded) {
        return;
      }

      if (narrationEnded) {
        return window.setTimeout(
          advanceScript,
          Math.max(settings.conversationSpeed * 400)
        );
      } else {
        // speech can be a ReactNode in which case
        // we assume the text is around 30 chars long
        return window.setTimeout(
          advanceScript,
          Math.max(
            1000 +
              settings.conversationSpeed * 400 +
              ((typeof currentLine.speech === "string"
                ? currentLine.speech.length
                : 30 || 15) /
                20) *
                1000,
            1200
          )
        );
      }
    }
  }

  function advanceScript(toIndex?: any) {
    isCheckPointActive.current = false;
    if (currentLineIndex === script.lines.length - 1) {
      setPlaying(false);
    } else {
      setCurrentLineIndex((l) =>
        Number.isInteger(toIndex)
          ? toIndex
          : l === script.lines.length
          ? l
          : l + 1
      );
    }
  }

  function rewindScript(toIndex?: any) {
    isCheckPointActive.current = false;
    if (currentLineIndex === 0) {
      setPlaying(false);
    } else {
      setCurrentLineIndex((l) =>
        Number.isInteger(toIndex) ? toIndex : l === 0 ? l : l - 1
      );
    }
  }

  return (
    <div className="relative mt-auto flex flex-col w-full">
      <div className="flex w-28 xl:w-40">
        <Character {...currentLine} name={currentLine.speaker} />
      </div>
      <Notification scope="speech" />

      {script.lines.length > 1 && (
        <div className="fixed z-40 bottom-5 left-1/2 transform -translate-x-1/2">
          <div className="bg-wood text-dark pointer-events-auto bg-cover h-16 w-56 px-3 justify-between flex p-2">
            <Button
              aria-label="re-play"
              onClick={() => rewindScript(0)}
              variant="icon"
              className="text-2xl"
              disabled={currentLineIndex === 0}
            >
              <AiOutlineRedo />
            </Button>
            <Button
              aria-label="step backwards"
              onClick={rewindScript}
              variant="icon"
              className="text-2xl"
              disabled={currentLineIndex === 0}
            >
              <AiFillStepBackward />
            </Button>
            {isPlaying ? (
              <Button
                onClick={() => setPlaying(false)}
                variant="icon"
                className="text-2xl"
                aria-label="pause conversation"
              >
                <BsPauseFill />
              </Button>
            ) : (
              <Button
                onClick={() => setPlaying(true)}
                variant="icon"
                className="text-2xl"
                aria-label="resume conversation"
              >
                <BsPlayFill />
              </Button>
            )}

            <Button
              aria-label="step forward"
              onClick={advanceScript}
              variant="icon"
              className="text-2xl"
              disabled={currentLineIndex === script.lines.length - 1}
            >
              <AiFillStepForward />
            </Button>
            <Button
              aria-label="skip to end"
              onClick={() => advanceScript(script.lines.length - 1)}
              variant="icon"
              className="text-2xl"
              disabled={currentLineIndex === script.lines.length - 1}
            >
              <AiFillForward />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Conversation);

import React, { memo, useEffect, useRef, useState } from "react";
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
import classNames from "classnames";

export interface LineType extends Omit<CharacterProps, "name"> {
  id?: string;
  speaker: ValidCharacterNames;
  directedTo?: ValidCharacterNames;
  isCheckpoint?: boolean;
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

  const [characters, setCharacters] = useState<ValidCharacterNames[]>([]);
  const [isPlaying, setPlaying] = useState(false);
  const checkpointActive = useRef(false);

  const { settings } = useSettingsContext();
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

  useEffect(() => {
    if (currentLineIndex && currentLineIndex === script.lines.length - 1) {
      onFinish && onFinish(script.id);
      console.log("script is done");
      setPlaying(false);
    }
  }, [currentLineIndex]);

  useEffect(() => {
    if (currentLine.isCheckpoint && !checkpointActive?.current) {
      console.log("on checkpoint");
      onCheckPoint && onCheckPoint(currentLine);
      setPlaying(false);
      checkpointActive.current = true;
    } else if (isPlaying) {
      const timeoutId = setTimeout(
        advanceScript,
        Math.max(
          settings.conversationSpeed *
            ((currentLine.speech?.length || 15) / 15) *
            1000,
          1200
        )
      );
      return () => clearTimeout(timeoutId);
    }
  }, [isPlaying, currentLineIndex, characters]);

  function advanceScript(toIndex?: any) {
    checkpointActive.current = false;
    setCurrentLineIndex((l) =>
      Number.isInteger(toIndex)
        ? toIndex
        : l === script.lines.length - 1
        ? l
        : l + 1
    );
  }

  function rewindScript(toIndex?: any) {
    checkpointActive.current = false;
    setCurrentLineIndex((l) =>
      Number.isInteger(toIndex) ? toIndex : l === 0 ? l : l - 1
    );
  }
  const currentLine = script.lines[currentLineIndex] || {};
  const previousLine =
    currentLineIndex === 0
      ? undefined
      : script.lines[currentLineIndex - 1] || {};

  function makeCharacterClasses(idx: number) {
    return classNames("w-28 xl:w-40", {
      "animate-slide-in-left": idx === characters.length - 1,
      "animate-slide-in-right": idx === 0,
      "animate-slide-up": idx > 0 && idx < characters.length - 1,
    });
  }

  return (
    <div className="h-auto relative mt-auto flex flex-col w-full">
      <div className="flex w-28 xl:w-40">
        <Character {...currentLine} name={currentLine.speaker} />
      </div>

      {script.lines.length > 1 && (
        <div className="flex flex-col justify-center items-center">
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
              onClick={() => rewindScript(script.lines.length - 1)}
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

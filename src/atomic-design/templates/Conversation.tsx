import React, { memo, useEffect, useRef, useState } from "react";
import { useSettingsContext } from "../../contexts/SettingsContext";
import { ValidCharacterNames } from "../../types";
import Button from "../atoms/Button/Button";
import { Character } from "../organisms";
import { CharacterProps } from "../organisms/Character/Character";
import { AiFillStepForward, AiFillStepBackward } from "react-icons/ai";

import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import classNames from "classnames";

export interface LineType extends Omit<CharacterProps, "name"> {
  speaker: ValidCharacterNames;
  directedTo?: ValidCharacterNames;
  isCheckpoint?: boolean;
}

export interface ScriptType {
  id: string;
  lines: LineType[];
}

export interface ConversationProps {
  script: ScriptType;
  autoContinue?: boolean;
  autoPlayAudio?: boolean;
  onFinish?: Function;
  onCheckPoint?: Function;
}

const Conversation = ({
  script,
  onFinish,
  onCheckPoint,
}: ConversationProps) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  const [characters, setCharacters] = useState<ValidCharacterNames[]>([]);

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

  const [isPlaying, setPlaying] = useState(true);
  const checkpointActive = useRef(false);

  const { settings } = useSettingsContext();

  useEffect(() => {
    if (currentLine.isCheckpoint && !checkpointActive?.current) {
      console.log("on checkpoint");
      onCheckPoint && onCheckPoint(currentLine, currentLineIndex);
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

  function advanceScript() {
    checkpointActive.current = false;
    setCurrentLineIndex((l) => (l === script.lines.length - 1 ? 0 : l + 1));
  }

  function rewindScript() {
    checkpointActive.current = false;
    setCurrentLineIndex((l) => (l === 0 ? script.lines.length - 1 : l - 1));
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
      <div className="flex justify-between">
        {characters.map((characterName, idx) => (
          <div className={makeCharacterClasses(idx)} key={characterName}>
            <Character
              className={
                characters.length > 1 &&
                characterName === characters[characters.length - 1]
                  ? "transform -scale-x-100"
                  : ""
              }
              speechPosition={
                characters.length > 1
                  ? characterName === characters[characters.length - 1]
                    ? "left"
                    : "right"
                  : "right"
              }
              speechColor={
                characterName === currentLine.speaker
                  ? "bg-accent-primary"
                  : undefined
              }
              {...(characterName === currentLine.speaker
                ? currentLine
                : characterName === previousLine?.speaker
                ? previousLine
                : {})}
              name={characterName}
              isPlaying={characterName === currentLine.speaker}
            />
          </div>
        ))}
      </div>

      {script.lines.length > 1 && (
        <div className="flex flex-col justify-center items-center">
          <div className="bg-wood text-dark pointer-events-auto bg-cover w-48 px-3 justify-between flex p-2">
            <Button
              aria-label="step backwards"
              onClick={rewindScript}
              variant="icon"
              className="text-2xl"
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
            >
              <AiFillStepForward />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Conversation);

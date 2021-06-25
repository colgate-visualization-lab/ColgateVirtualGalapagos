import React, { useEffect, useRef, useState } from "react";
import { useSettingsContext } from "../../contexts/SettingsContext";
import { ValidCharacterNames } from "../../types";
import Button from "../atoms/Button/Button";
import { Character } from "../organisms";
import { CharacterProps } from "../organisms/Character/Character";
import {
  AiFillPlayCircle,
  AiFillPauseCircle,
  AiFillStepForward,
  AiFillStepBackward,
} from "react-icons/ai";

export interface LineType extends Omit<CharacterProps, "name"> {
  speaker: ValidCharacterNames;
  directedTo?: ValidCharacterNames;
  isCheckpoint?: boolean;
}

export interface ConversationProps {
  characters: ValidCharacterNames[];
  script: LineType[];
  autoContinue?: boolean;
  autoPlayAudio?: boolean;
  onFinish?: Function;
  onCheckPoint?: Function;
}

export default function Conversation({
  characters,
  script,
  onFinish,
  onCheckPoint,
}: ConversationProps) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex && currentLineIndex === script.length - 1) {
      onFinish && onFinish();
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
  }, [isPlaying, currentLineIndex]);

  function advanceScript() {
    checkpointActive.current = false;
    setCurrentLineIndex((l) => (l === script.length - 1 ? 0 : l + 1));
  }

  function rewindScript() {
    checkpointActive.current = false;
    setCurrentLineIndex((l) => (l === 0 ? script.length - 1 : l - 1));
  }
  const currentLine = script[currentLineIndex];
  const previousLine =
    currentLineIndex === 0 ? undefined : script[currentLineIndex - 1];
  return (
    <div className="h-full relative flex w-full">
      <div className="w-11/12 flex justify-center">
        {characters.map((characterName) => (
          <div className="w-40" key={characterName}>
            <Character
              className={
                characterName === characters[characters.length - 1]
                  ? "transform -scale-x-100"
                  : ""
              }
              speechPosition={
                characterName === characters[characters.length - 1]
                  ? "right"
                  : "left"
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

      <div className="flex flex-col w-1/12 justify-center items-center">
        {isPlaying ? (
          <Button
            onClick={() => setPlaying(false)}
            variant="icon"
            className="text-2xl"
          >
            <AiFillPauseCircle />
          </Button>
        ) : (
          <>
            <Button onClick={rewindScript} variant="icon" className="text-2xl">
              <AiFillStepBackward />
            </Button>
            <Button
              onClick={() => setPlaying(true)}
              variant="icon"
              className="text-2xl"
            >
              <AiFillPlayCircle />
            </Button>
            <Button onClick={advanceScript} variant="icon" className="text-2xl">
              <AiFillStepForward />
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

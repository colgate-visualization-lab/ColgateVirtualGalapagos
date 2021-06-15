import classNames from "classnames";
import React, { useState } from "react";
import Howler from "react-howler";
import Text, { TextProps } from "../../atoms/Text/Text";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";

export interface SpeechBubbleProps extends TextProps {
  className?: string;
  position?: "left" | "right";
  audio?: string;
}

export default function SpeechBubble({
  className,
  position = "right",
  audio,
  ...rest
}: SpeechBubbleProps) {
  const classes = classNames(className, "p-5 bg-primary-dark rounded-lg", {
    "absolute right-0 transform translate-x-full": position === "right",
    "absolute left-0 transform -translate-x-full": position === "left",
  });
  const [playAudio, setAudio] = useState(false);
  return (
    <div className={classes}>
      <Text {...rest} color="text-white" />
      {audio && (
        <>
          <Howler
            src={audio}
            onEnd={() => setAudio(false)}
            playing={playAudio}
          />
          {playAudio ? (
            <AiFillPauseCircle
              role="button"
              aria-label="pause audio"
              onClick={() => setAudio(false)}
              className="text-white"
            />
          ) : (
            <AiFillPlayCircle
              role="button"
              aria-label="play audio"
              onClick={() => setAudio(true)}
              className="text-white"
            />
          )}
        </>
      )}
    </div>
  );
}

import classNames from "classnames";
import React, { useState } from "react";
import Howler from "react-howler";
import Text, { TextProps } from "../../atoms/Text/Text";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";

export interface SpeechBubbleProps extends TextProps {
  className?: string;
  position?: "left" | "right" | "top" | "custom";
  audio?: string;
}

export default function SpeechBubble({
  className,
  position = "right",
  audio,
  ...rest
}: SpeechBubbleProps) {
  const classes = classNames(
    className,
    "absolute p-5 z-40 transform bg-primary-dark rounded-lg animate-fade-in",
    {
      "right-0 translate-x-full": position === "right",
      "left-0 top-1/2 -translate-y-1/2 -translate-x-full": position === "left",
      "top-0 -translate-y-full": position === "top",
    }
  );
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
              className="text-white text-xl"
            />
          ) : (
            <AiFillPlayCircle
              role="button"
              aria-label="play audio"
              onClick={() => setAudio(true)}
              className="text-white text-xl"
            />
          )}
        </>
      )}
    </div>
  );
}

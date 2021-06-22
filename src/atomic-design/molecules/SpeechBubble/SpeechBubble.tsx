import classNames from "classnames";
import React, { useState } from "react";
import Howler from "react-howler";
import Text, { TextProps } from "../../atoms/Text/Text";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";

export interface SpeechBubbleProps extends TextProps {
  className?: string;
  position?:
    | "left"
    | "right"
    | "top"
    | "custom"
    | "bottom left"
    | "bottom right";
  audio?: string;
  inputTest?: string;
}

export default function SpeechBubble({
  className,
  position = "right",
  audio,
  inputTest,
  ...rest
}: SpeechBubbleProps) {
  const classes = classNames(
    className,
    "absolute rounded-full z-40 min-w-80 transform bg-primary-light animate-fade-in",
    {
      "right-0 translate-x-full top-0 -translate-y-full": position === "right",
      "-translate-y-full": position === "left",
      "translate-y-3/4":
        position === "bottom left" || position === "bottom right",
      "left-0 top-0 -translate-x-full":
        position === "left" || position === "bottom left",
      "top-0 -translate-y-full": position === "top",
    }
  );
  const bubbleClasses = classNames("absolute transform flex flex-col", {
    "left-0 bottom-0 rotate-45 translate-y-full -translate-x-full":
      position === "right",
    "right-0 bottom-0 -rotate-45 translate-y-full translate-x-full":
      position === "left",
    "right-0 top-0 -translate-y-full flex-col-reverse rotate-45":
      position === "bottom left",
  });
  const [playAudio, setAudio] = useState(false);
  return (
    <div className={classes}>
      <div className="relative py-3 px-10">
        <Text {...rest} color="text-dark" />
        {inputTest &&(
          <input className="border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
     
        )}
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
   
        <div className={bubbleClasses}>
          <div className="rounded-full h-10 w-10 bg-primary-light"></div>
          <div className="rounded-full h-7 w-7 bg-primary-light"></div>
        </div>
      </div>
    </div>
  );
}

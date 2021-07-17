import classNames from "classnames";
import React from "react";
import Text, { TextProps } from "../../atoms/Text/Text";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { ValidBgColors, ValidTextColors } from "../../../types";
import TextBox from "../../atoms/TextBox/TextBox";
import Button from "../../atoms/Button/Button";
import { useAudioContext } from "../../../contexts/AudioContext";

const validInputs = ["text", "dropdown", "password"] as const;

type ValidInputTypes = typeof validInputs[number];
type FieldType = `${string}:${ValidInputTypes}`;

const isField = (x: any): x is FieldType => {
  if (typeof x !== "string") return false;
  const fieldType: any = x.split(":").pop();
  return fieldType && validInputs.includes(fieldType);
};

export interface SpeechBubbleProps extends Omit<TextProps, "color"> {
  className?: string;
  position?:
    | "left"
    | "right"
    | "top"
    | "custom"
    | "bottom left"
    | "bottom right";
  audio?: string;
  isAudioPlaying?: boolean;
  color?: ValidBgColors;
  textColor?: ValidTextColors;
  inputFields?: FieldType[];
  onInputChange?: Function;
  children?: React.ReactNode;
}

export default function SpeechBubble({
  className,
  position = "right",
  audio,
  color = "bg-primary-light",
  textColor = "text-dark",
  children,
  inputFields,
  onInputChange,
  ...rest
}: SpeechBubbleProps) {
  const classes = classNames(
    className,
    color,
    "absolute pointer-events-auto rounded-2xl z-40 min-w-80 transform scale-100 animate-fade-in transition-normal",
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

  const { narration, setNarrationAudio } = useAudioContext();

  return (
    <div className={classes}>
      <div className="relative py-3 pl-3 pr-7 w-full">
        {<Text color={textColor} {...rest} />}
        {children}
        {narration.src && (
          <>
            <div className="absolute top-1/2 transform right-0 -translate-y-1/2">
              {narration.isPlaying ? (
                <Button
                  onClick={() => setNarrationAudio({ isPlaying: false })}
                  variant="icon"
                  aria-label="pause audio"
                  className={"text-2xl " + textColor}
                >
                  <AiFillPauseCircle />
                </Button>
              ) : (
                <Button
                  onClick={() => setNarrationAudio({ isPlaying: true })}
                  variant="icon"
                  aria-label="play audio"
                  className={"text-2xl " + textColor}
                >
                  <AiFillPlayCircle />
                </Button>
              )}
            </div>
          </>
        )}

        <div className={bubbleClasses}>
          <div className={"rounded-full h-10 w-10 " + color}></div>
          <div className={"rounded-full h-7 w-7 " + color}></div>
        </div>
      </div>
    </div>
  );
}

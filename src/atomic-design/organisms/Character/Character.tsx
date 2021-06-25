import React, { useCallback, useState } from "react";
import { ValidCharacterNames } from "../../../types";
import characterList from "../../../utils/characterList";
import { Text } from "../../atoms";
import AnimatedSpriteSheet, {
  AnimatedSpriteSheetProps,
} from "../../molecules/AnimatedSpriteSheet/AnimatedSpriteSheet";
import SpeechBubble, {
  SpeechBubbleProps,
} from "../../molecules/SpeechBubble/SpeechBubble";

export interface CharacterProps
  extends Omit<AnimatedSpriteSheetProps, "onClick" | "fileName"> {
  name: ValidCharacterNames;
  title?: string;
  speech?: string | Array<string>;
  audio?: string;
  info?: string;
  speechPosition?: SpeechBubbleProps["position"];
  speechColor?: SpeechBubbleProps["color"];
  speechFields?: SpeechBubbleProps["inputFields"];
  onInputChange?: SpeechBubbleProps["onInputChange"];
  onClick?: Function;
}

export function Character({
  name,
  title,
  speech,
  info,
  audio,
  speechPosition,
  speechColor,
  speechFields,
  onClick,
  onInputChange,
  ...rest
}: CharacterProps) {
  const [showInfo, setShowInfo] = useState(false);
  const handleCharacterClick = useCallback(() => {
    onClick && onClick(name);
  }, [name]);

  const spriteConfig = characterList.find((ch) => ch.name === name)
    ?.spriteConfig;

  return (
    <div
      onMouseEnter={() => info && setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
      className="flex h-full flex-col relative overflow-visible items-center"
    >
      {spriteConfig && (
        <AnimatedSpriteSheet
          {...spriteConfig}
          {...rest}
          onClick={handleCharacterClick}
        />
      )}
      <Text text={title} color="text-dark" size="sm" />
      {speech && (
        <SpeechBubble
          inputFields={speechFields}
          color={speechColor}
          audio={audio}
          text={typeof speech === "string" ? speech : speech.join("\n")}
          position={speechPosition}
          onInputChange={onInputChange}
        />
      )}

      {showInfo && <SpeechBubble text={info} position="top" size="sm" />}
    </div>
  );
}

export default Character;

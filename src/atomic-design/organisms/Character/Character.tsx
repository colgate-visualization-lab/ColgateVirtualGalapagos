import React, { useCallback, useState } from "react";
import { Text } from "../../atoms";
import AnimatedSpriteSheet, {
  AnimatedSpriteSheetProps,
} from "../../molecules/AnimatedSpriteSheet/AnimatedSpriteSheet";
import SpeechBubble, {
  SpeechBubbleProps,
} from "../../molecules/SpeechBubble/SpeechBubble";

export interface CharacterProps
  extends Omit<AnimatedSpriteSheetProps, "onClick"> {
  name: string;
  title?: string;
  speech?: string;
  audio?: string;
  info?: string;
  speechPosition?: SpeechBubbleProps["position"];
  onClick?: Function;
}

export function Character({
  name,
  title,
  speech,
  info,
  audio,
  speechPosition,
  onClick,
  ...rest
}: CharacterProps) {
  const [showInfo, setShowInfo] = useState(false);
  const handleCharacterClick = useCallback(() => {
    onClick && onClick(name);
  }, [name]);
  return (
    <div
      onMouseEnter={() => info && setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
      className="flex h-full flex-col relative overflow-visible items-center"
    >
      <AnimatedSpriteSheet {...rest} onClick={handleCharacterClick} />
      <Text text={title} color="text-dark" size="sm" />
      {speech && (
        <SpeechBubble audio={audio} text={speech} position={speechPosition} />
      )}
      {showInfo && <SpeechBubble text={info} position="top" size="sm" />}
    </div>
  );
}

export default Character;

import React, { useState } from "react";
import { Text } from "../../atoms";
import AnimatedSpriteSheet, {
  AnimatedSpriteSheetProps,
} from "../../molecules/AnimatedSpriteSheet/AnimatedSpriteSheet";
import SpeechBubble, {
  SpeechBubbleProps,
} from "../../molecules/SpeechBubble/SpeechBubble";

interface CharacterProps extends AnimatedSpriteSheetProps {
  title?: string;
  speech?: string;
  audio?: string;
  info?: string;
  speechPosition?: SpeechBubbleProps["position"];
}

export function Character({
  title,
  speech,
  info,
  audio,
  speechPosition,
  ...rest
}: CharacterProps) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div
      onMouseEnter={() => info && setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
      className="flex h-full flex-col relative overflow-visible items-center"
    >
      <AnimatedSpriteSheet {...rest} />
      <Text text={title} color="text-dark" size="sm" />
      {speech && (
        <SpeechBubble audio={audio} text={speech} position={speechPosition} />
      )}
      {showInfo && <SpeechBubble text={info} position="top" size="sm" />}
    </div>
  );
}

export default Character;

import React from "react";
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
  speechPosition?: SpeechBubbleProps["position"];
}

export function Character({
  title,
  speech,
  audio,
  speechPosition,
  ...rest
}: CharacterProps) {
  return (
    <div className="flex flex-col relative items-center">
      <AnimatedSpriteSheet {...rest} />
      <Text text={title} color="text-dark" size="sm" />
      {speech && (
        <SpeechBubble audio={audio} text={speech} position={speechPosition} />
      )}
    </div>
  );
}

export default Character;

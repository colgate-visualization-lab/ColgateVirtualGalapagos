import React, { useEffect, useState } from "react";

import { Sprite } from "../../atoms";

interface AnimatedSpriteSheetProps {
  filename: string;
  initialFrame?: number;
  frame?: {
    height: number;
    width: number;
  };
  bounds?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  isPlaying?: boolean;
  loop?: boolean;
  speed?: number;
}

AnimatedSpriteSheet.defaultProps = {
  initialFrame: 0,
  frame: {
    width: 0,
    height: 0,
  },
  bounds: {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  },
  isPlaying: true,
  loop: true,
  speed: 300,
};

export function AnimatedSpriteSheet({
  filename,
  initialFrame,
  frame,
  bounds,
  isPlaying,
  loop,
  speed,
}: AnimatedSpriteSheetProps) {
  const [currentFrame, setCurrentFrame] = useState(initialFrame || 0);

  const maxFramesWidth =
    (bounds && frame && (bounds.width - bounds.x) / frame.width) || 1;
  const maxFramesHeight =
    (bounds && frame && (bounds.height - bounds.y) / frame.height) || 1;

  const maxFrames = maxFramesWidth * maxFramesHeight - 1;

  useEffect(() => {
    if (isPlaying) {
      const timerId = (function (fr) {
        return setInterval(() => {
          if (loop && fr >= maxFrames) {
            setCurrentFrame(0);
          } else {
            setCurrentFrame((f) => f + 1);
          }
        }, speed);
      })(currentFrame);

      return () => clearInterval(timerId);
    }
  }, [currentFrame, isPlaying]);

  const spriteData = {
    filename,
    width: frame?.width,
    height: frame?.height,
    x: frame && frame?.width * Math.floor(currentFrame / maxFramesHeight),
    y: frame && frame?.height * (currentFrame % maxFramesHeight),
  };

  return <Sprite {...spriteData} />;
}

export default AnimatedSpriteSheet;

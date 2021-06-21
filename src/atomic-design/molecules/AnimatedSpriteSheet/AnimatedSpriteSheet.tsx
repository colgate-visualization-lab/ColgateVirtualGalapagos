import React, { memo, useEffect, useState } from "react";
import { ValidAnimations } from "../../../types";

import { Sprite } from "../../atoms";
import { SpriteProps } from "../../atoms/Sprite/Sprite";

export interface AnimatedSpriteSheetProps {
  fileName: string;
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
  direction?: "down" | "right";
  scale?: SpriteProps["scale"];
  animation?: ValidAnimations | { name: ValidAnimations; offset: number };
  className?: string;
  onClick?: React.MouseEventHandler;
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

function AnimatedSpriteSheet({
  className,
  fileName,
  initialFrame,
  frame,
  bounds,
  isPlaying,
  loop,
  speed,
  direction = "right",
  scale,
  animation,
  onClick,
}: AnimatedSpriteSheetProps) {
  const [currentFrame, setCurrentFrame] = useState(initialFrame || 0);
  const [sheet, setSheet] = useState<HTMLImageElement>();
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
    scale,
    width: frame?.width,
    height: frame?.height,
    x:
      frame &&
      frame?.width *
        (direction === "down"
          ? Math.floor(currentFrame / maxFramesHeight)
          : currentFrame % maxFramesWidth),
    y:
      frame &&
      frame?.height *
        (direction === "down"
          ? currentFrame % maxFramesHeight
          : Math.floor(currentFrame / maxFramesWidth)),
  };

  useEffect(() => {
    if (fileName) {
      const img = new Image();
      img.src = fileName;
      img.onload = () => setSheet(img);
    }
  }, [fileName]);

  return sheet ? (
    <Sprite
      onClick={onClick}
      style={
        ((typeof animation === "string" && animation) || animation?.name) ===
        "animate-left-right"
          ? {
              height: frame?.height,
              width: frame?.width,
              position: "absolute",
              transform: "translateX(-50%)",
              left: `${
                (((currentFrame + 1) / maxFrames) * 100 +
                  ((typeof animation !== "string" && animation?.offset) || 0)) %
                101
              }%`,
            }
          : { height: frame?.height, width: frame?.width }
      }
      className={className}
      img={sheet}
      {...spriteData}
    />
  ) : (
    <></>
  );
}

const Memoized = memo(AnimatedSpriteSheet);
export default Memoized;

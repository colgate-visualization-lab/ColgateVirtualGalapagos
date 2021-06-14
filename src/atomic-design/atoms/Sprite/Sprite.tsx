import React, { CSSProperties, useEffect, useRef, useState } from "react";

export interface SpriteProps {
  img: HTMLImageElement;
  x: number;
  y: number;
  width: number;
  height: number;
  scale?: number | { x: number; y: number };
  style: CSSProperties;
}

export const Sprite = ({
  img,
  x,
  y,
  width,
  height,
  scale = 1,
  ...rest
}: SpriteProps) => {
  if (!img) {
    return null;
  }
  const [context, setContext] = useState<CanvasRenderingContext2D>();
  const canvas = useRef<HTMLCanvasElement>();
  const canvasMountCb = (node: HTMLCanvasElement) => {
    if (node) {
      canvas.current = node;
      const ctx = node.getContext("2d");
      if (ctx) {
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        setContext(ctx);
      }
      fitToContainer(node);
    }
  };

  function fitToContainer(canvas: HTMLCanvasElement) {
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  const scaledHeight = Math.min(
    typeof scale === "number" ? scale * height : scale.y * height,
    canvas.current?.offsetHeight || 0
  );
  const scaledWidth = Math.min(
    typeof scale === "number" ? scale * width : scale.x * width,
    canvas.current?.offsetWidth || 0
  );

  useEffect(() => {
    if (img && context) {
      context.clearRect(
        0,
        0,
        canvas.current?.width || 0,
        canvas.current?.height || 0
      );
      context.drawImage(
        img,
        x,
        y,
        width,
        height,
        (canvas.current?.width || scaledWidth) / 2 - scaledWidth / 2,
        (canvas.current?.height || scaledHeight) / 2 - scaledHeight / 2,
        scaledWidth,
        scaledHeight
      );
    }
  }, [context, img, x, y]);

  return <canvas {...rest} ref={canvasMountCb}></canvas>;
};

Sprite.defaultProps = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
};
export default Sprite;

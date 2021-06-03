import React, { useEffect, useRef, useState } from "react";

function drawSpeechBubble(ctx: CanvasRenderingContext2D) {
  ctx.beginPath();
  ctx.moveTo(75, 25);
  ctx.quadraticCurveTo(25, 25, 25, 62.5);
  ctx.quadraticCurveTo(25, 100, 50, 100);
  ctx.quadraticCurveTo(50, 120, 30, 125);
  ctx.quadraticCurveTo(60, 120, 65, 100);
  ctx.quadraticCurveTo(125, 100, 125, 62.5);
  ctx.quadraticCurveTo(125, 25, 75, 25);
  ctx.stroke();
}

export const Canvas = () => {
  const [ctx, setContext] = useState<CanvasRenderingContext2D>();
  const canvas = useRef<HTMLCanvasElement>();
  const canvasMountCb = (node: HTMLCanvasElement) => {
    if (node) {
      canvas.current = node;
      const ctx = node.getContext("2d");
      if (ctx) {
        ctx.imageSmoothingQuality = "high";
        setContext(ctx);
      } else {
        alert(
          "Your browser doesn't support the html canvas context. We're sorry but that might significantly hamper your experience."
        );
      }
    }
  };

  function applyBackgroundColor(ctx: CanvasRenderingContext2D) {
    if (canvas.current) {
      ctx.fillStyle = "rgba(0,0,200,0.05)";
      ctx.fillRect(0, 0, canvas.current?.width, canvas.current?.height);
    }
  }

  useEffect(() => {
    if (ctx && canvas.current) {
      applyBackgroundColor(ctx);
      drawSpeechBubble(ctx);
    }
  }, [ctx]);

  return <canvas ref={canvasMountCb}></canvas>;
};

export default Canvas;

import React from "react";
import useCanvas from "./useCanvas";

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
  const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
    console.log(frameCount);
    if (frameCount === 1) applyBackgroundColor(ctx);
    drawSpeechBubble(ctx);
  };
  const canvasRef = useCanvas(draw);

  function applyBackgroundColor(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.fillStyle = "rgba(0,0,200,0.05)";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.restore();
  }

  return (
    <canvas className="w-full h-full" ref={canvasRef}>
      Your browser doesn't support HTML canvas
    </canvas>
  );
};

export default Canvas;

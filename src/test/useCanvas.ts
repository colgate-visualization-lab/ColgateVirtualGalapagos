import { useRef, useEffect, useCallback } from "react";

export interface ValidOptions {
  animate?: boolean;
  isFullScreen?: boolean;
}

export const useCanvas = (draw: Function, options?: ValidOptions) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let frameCount = 0;
  const fitCanvasToScreen = useCallback(() => {
    if (canvasRef.current) {
      if (options?.isFullScreen) {
        canvasRef.current.height = canvasRef.current.clientHeight;
        canvasRef.current.width = canvasRef.current.clientWidth;
      }

      draw && draw(canvasRef.current.getContext("2d"), frameCount);
    }
  }, [draw, options]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      let animationFrameId: number;
      fitCanvasToScreen();
      const render = () => {
        frameCount++;
        draw(context, frameCount);
        if (options?.animate) {
          animationFrameId = window.requestAnimationFrame(render);
        }

        window.addEventListener("resize", fitCanvasToScreen);
      };
      render();
      return () => {
        animationFrameId != null &&
          window.cancelAnimationFrame(animationFrameId);
        options?.isFullScreen &&
          window.removeEventListener("resize", fitCanvasToScreen);
      };
    }
  }, [draw, options]);
  return canvasRef;
};
export default useCanvas;

import { useRef, useEffect, useCallback } from "react";

export interface ValidOptions {
  animate?: boolean;
  isFullScreen?: boolean;
}

export const useCanvas = (draw: Function, options?: ValidOptions) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const fitCanvasToScreen = useCallback(() => {
    if (canvasRef.current) {
      canvasRef.current.height = canvasRef.current.clientHeight;
      canvasRef.current.width = canvasRef.current.clientWidth;
    }
  }, [draw, options]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      let frameCount = 0;
      let animationFrameId: number;
      fitCanvasToScreen();
      const render = () => {
        if (canvasRef.current)
          context?.clearRect(
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
          );
        frameCount++;
        draw(context, frameCount);
        if (options?.animate)
          animationFrameId = window.requestAnimationFrame(render);
        if (options?.isFullScreen) {
          window.addEventListener("resize", fitCanvasToScreen);
        }
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

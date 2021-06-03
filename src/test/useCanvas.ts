import { useRef, useEffect } from "react";

export interface ValidOptions {
  context?: string;
  animate?: false;
}

export const useCanvas = (draw: Function, options?: ValidOptions) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    console.log("using effect");
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext(options?.context || "2d");
      let frameCount = 0;
      let animationFrameId: number;
      const render = () => {
        frameCount++;
        draw(context, frameCount);
        if (options?.animate)
          animationFrameId = window.requestAnimationFrame(render);
      };
      render();
      return () => {
        animationFrameId != null &&
          window.cancelAnimationFrame(animationFrameId);
      };
    }
  }, [draw]);
  return canvasRef;
};
export default useCanvas;

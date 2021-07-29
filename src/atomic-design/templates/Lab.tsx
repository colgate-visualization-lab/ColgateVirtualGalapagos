import classNames from "classnames";
import React from "react";
import { ValidTransitions } from "../../types";
import useCanvas from "../../test/useCanvas";
import { drawCanvasBackgroundImage } from "../../utils";

const backgroundImage = new window.Image();
backgroundImage.src = "/images/Isabela_lab.jpg";

export interface LabProps {
  children?: React.ReactNode;
  transition?: ValidTransitions;
  className?: string;
}

export function Lab({
  children,
  transition = "none",
  className,
}: LabProps) {
  const backgroundRef = useCanvas(
    (ctx: CanvasRenderingContext2D) =>
      drawCanvasBackgroundImage(ctx, backgroundImage),
    { isFullScreen: true }
  );
  const classes = classNames(
    className,
    "h-screen w-screen overflow-hidden relative flex flex-col items-center justify-center",
    `${(transition !== "none" && transition) || ""}`
  );
  return <div className={classes}>
  <canvas
        ref={backgroundRef}
        className="h-full w-full fixed left-0 top-0"
      />
      {children}
  </div>;
}
export default Lab;

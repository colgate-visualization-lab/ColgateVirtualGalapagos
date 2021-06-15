import classNames from "classnames";
import React from "react";
import { ValidBgColors } from "../../types";

export interface PageProps {
  color?: ValidBgColors;
  children?: React.ReactNode;
  className?: string;
}

export function GameBar({
  children,
  color = "bg-primary",
  className,
}: PageProps) {
  const classes = classNames(
    className,
    "w-screen overflow-hidden fixed flex bottom-0 left-0 z-40",
    `${color || ""}`
  );
  return (
    <div className={classes}>
      <div className="flex items-center justify-center relative w-full h-full">
        {children}
      </div>
    </div>
  );
}
export default GameBar;

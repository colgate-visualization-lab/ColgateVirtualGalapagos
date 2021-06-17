import classNames from "classnames";
import React from "react";

export interface PageProps {
  children?: React.ReactNode;
  className?: string;
}

export function GameBar({ children, className }: PageProps) {
  const classes = classNames(
    className,
    "w-screen fixed flex bottom-0 left-0 z-40"
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

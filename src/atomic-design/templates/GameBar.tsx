import classNames from "classnames";
import React from "react";

export interface PageProps {
  children?: React.ReactNode;
  className?: string;
}

export function GameBar({ children, className }: PageProps) {
  const classes = classNames(
    className,
    "w-screen pointer-events-none fixed flex bottom-0 left-0 z-40 mb-5"
  );
  return (
    <div className={classes}>
      <div className="flex justify-items-end content-end items-end  w-full h-full">
        {children}
      </div>
    </div>
  );
}
export default GameBar;

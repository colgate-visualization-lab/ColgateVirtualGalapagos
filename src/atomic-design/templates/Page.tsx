import classNames from "classnames";
import React from "react";
import { ValidBgColors, ValidTransitions } from "../../types";

export interface PageProps {
  color?: ValidBgColors;
  children?: React.ReactNode;
  transition?: ValidTransitions;
  className?: string;
}

export function Page({
  children,
  color = "bg-primary-dark",
  transition = "none",
  className,
}: PageProps) {
  const classes = classNames(
    className,
    "h-screen w-screen overflow-hidden relative flex flex-col items-center justify-center",
    `${color || ""}`,
    `${(transition !== "none" && transition) || ""}`
  );
  return <div className={classes}>{children}</div>;
}
export default Page;

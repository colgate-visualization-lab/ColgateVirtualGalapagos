import classNames from "classnames";
import React from "react";
import { ValidBgColors, ValidTransitions } from "../../types";

export interface ChatBubbleProps {
  color?: ValidBgColors;
  children?: React.ReactNode;
  transition?: ValidTransitions;
  className?: string;
}

export function ChatBubble({
  children,
  color = "bg-primary-dark",
  transition = "none",
  className,
}: ChatBubbleProps) {
  const classes = classNames(
    className,
    "rounded-full px-8 py-8 w-1/2 rotate-30 transform origin-top-right",
    "rounded-full h-12 w-12 bg-gray-200 rotate-45 transform origin-top-right",
    `${color || ""}`,
    `${(transition !== "none" && transition) || ""}`
  );
  return <div className={classes}>{children}</div>;
}
export default ChatBubble;

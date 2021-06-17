import classNames from "classnames";
import React from "react";
import { ValidBgColors, ValidTransitions } from "../../types";

export interface ChatBubbleProps {
  color?: ValidBgColors;
  children?: React.ReactNode;
  // transition?: ValidTransitions;
  className?: string;
}

export function ChatBubble({
  children,
  color = "bg-primary",
  // transition = "none",
  className,
}: ChatBubbleProps) {
  const classes = classNames(
    className,
    // "w-screen fixed flex items-baseline justify-center",
    // `${color || ""}`

  );
  return(
  <div className={classes}>
      <div className="rounded-full px-8 py-7 max-w-sm bg-gray-200">
        {children}
      </div>
      <div className="rounded-full h-10 w-10 bg-gray-200 transform rotate-45 origin-right"></div>  
      <div className="rounded-full h-7 w-7 bg-gray-200 transform rotate-90 origin-top"></div>  
        
  </div>
  );
}
export default ChatBubble;

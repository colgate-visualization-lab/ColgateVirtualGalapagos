import classNames from "classnames";
import React from "react";
import { useAudioContext } from "../../../contexts/AudioContext";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  label?: string;
  variant?:
    | "primary"
    | "secondary"
    | "wooden"
    | "backpack"
    | "backpack_open"
    | "map"
    | "icon";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  hasSoundEffect?: boolean;
}

export const Button = ({
  children,
  className,
  variant = "primary",
  size = "md",
  disabled = false,
  hasSoundEffect = false,
  onClick,
  ...rest
}: ButtonProps) => {
  const classes = classNames(
    className,
    " hover:bg-opacity-80 text-center flex items-center z-20 justify-center relative hover:text-white transition-fast",
    {
      "bg-accent-primary border-4 border-white text-white":
        variant === "primary",
      "bg-wood bg-cover transform hover:scale-110": variant === "wooden",
      "bg-map bg-cover transform hover:scale-110": variant === "map",
      "bg-backpack bg-cover transform hover:scale-110": variant === "backpack",
      "bg-backpack_open bg-cover transform hover:scale-110":
        variant === "backpack_open",
      "text-md p-2": size === "md",
      "text-sm p-1": size === "sm",
      "text-sm px-2 py-2 md:py-4": size === "lg",
      "w-32 rounded-md": size === "md" && variant !== "icon",
      "w-26 rounded-md": size === "sm" && variant !== "icon",
      "w-56 rounded-md": size === "lg" && variant !== "icon",
      "opacity-50 pointer-events-none": disabled === true,
    }
  );

  // use sfx on all primary buttons
  hasSoundEffect =
    hasSoundEffect || variant === "primary" || variant === "wooden";

  const { setSoundEffect } = useAudioContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(e);
    hasSoundEffect && setSoundEffect("button-click");
  };

  return (
    <button className={classes} {...rest} onClick={handleClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;

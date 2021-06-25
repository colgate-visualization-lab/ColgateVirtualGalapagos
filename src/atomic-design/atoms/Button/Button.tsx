import classNames from "classnames";
import React from "react";

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
}

export const Button = ({
  children,
  className,
  label,
  variant = "primary",
  size = "md",
  ...rest
}: ButtonProps) => {
  const classes = classNames(
    className,
    "rounded-md hover:bg-opacity-80 text-center items-center z-20 justify-center relative hover:text-white transition-fast",
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
      "w-32": size === "md" && variant !== "icon",
      "w-26": size === "sm" && variant !== "icon",
      "w-56": size === "lg" && variant !== "icon",
    }
  );

  return (
    <button aria-label={label} className={classes} {...rest}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;

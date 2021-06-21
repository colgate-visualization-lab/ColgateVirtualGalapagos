import classNames from "classnames";
import React from "react";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  label?: string;
  variant?: "primary" | "secondary" | "wooden" | "map";
  size?: "sm" | "md" | "lg";
}

const Button = ({
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
      "bg-wood bg-cover transform hover:scale-105": variant === "wooden",
      "w-32 text-md p-2": size === "md",
      "w-26 text-sm p-1": size === "sm",
      "w-56 text-sm px-2 py-2 md:py-4": size === "lg",
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

import classNames from "classnames";
import React from "react";

export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  label?: string;
  variant?: "primary" | "secondary";
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
    "rounded-md text-center items-center justify-center hover:text-white p-2 transition-fast",
    {
      "bg-gray-300 hover:bg-primary-dark": variant === "primary",
      "bg-gray-300 hover:bg-secondary-dark": variant === "secondary",
      "w-32 text-md": size === "md",
      "w-26 text-sm": size === "sm",
    }
  );

  return (
    <div role="button" aria-label={label} className={classes} {...rest}>
      {children}
    </div>
  );
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;

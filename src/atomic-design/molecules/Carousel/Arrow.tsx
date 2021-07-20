import React from "react";
import ArrowLeft from "./ArrowLeft";

export interface ArrowProps{
  variant: "left" | "right",
  className?: string,
  onClick: React.EventHandler<any>,
}
export const Arrow = ({
  className,
  variant,
  ...rest
}: {
  className?: string;
  onClick: React.EventHandler<any>;
  variant: "left" | "right";
}) => {
  const classes = className + " transform transition-normal cursor-pointer";

  return (
    <ArrowLeft
      {...rest}
      className={
        classes +
        (variant === "left"
          ? " hover:scale-110"
          : " -scale-x-100 hover:-scale-x-110 hover:scale-y-110")
      }
    />
  );
};

export default Arrow;

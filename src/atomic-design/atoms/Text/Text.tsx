import React from "react";
import classNames from "classnames";
import { ValidTextColors } from "../../../types";

export type ValidTypes = "title" | "heading" | "body";
export type ValidSizes = "sm" | "md" | "lg";

export interface TextProps {
  type?: ValidTypes;
  size?: ValidSizes;
  text?: string;
  color?: ValidTextColors;
  className?: string;
}

Text.defaultProps = {
  color: "text-dark",
  size: "md",
  type: "body",
};

export function Text({ text, className, color, type, size }: TextProps) {
  const [isTitle, isHeading, isBody] = [
    type === "title",
    type === "heading",
    type === "body",
  ];
  const classes = classNames(className, color, "whitespace-pre-line", {
    "font-title": isTitle,
    "font-heading": isHeading,
    "font-body": isBody,
    [isTitle
      ? "text-3xl md:text-6xl lg:text-8xl"
      : isHeading
      ? "text-3xl md:text-5xl"
      : "text-2xl md:text-4xl"]: size === "lg",
    [isTitle
      ? "text-2xl md:text-4xl"
      : isHeading
      ? "text-xl md:text-3xl"
      : "text-md md:text-xl"]: size === "md",
    [isTitle
      ? "text-lg md:text-xl"
      : isHeading
      ? "text-md md:text-lg"
      : "text-sm md:text-md"]: size === "sm",
  });
  return <p className={classes}>{text}</p>;
}

export default Text;

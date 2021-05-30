import React from "react";
import classNames from "classnames";
import { ValidTextColors } from "../../../types";

export type ValidTypes = "title" | "subtitle" | "body";
export type ValidSizes = "sm" | "md" | "lg";

export interface TextProps {
  type: ValidTypes;
  size: ValidSizes;
  value: string;
  color?: ValidTextColors;
}

Text.defaultProps = {
  color: "text-primary",
  size: "md",
  type: "body",
  value: "this is text",
};

export function Text({ value, color, type, size }: TextProps) {
  const [isTitle, isSubtitle, isBody] = [
    type === "title",
    type === "subtitle",
    type === "body",
  ];
  const classes = classNames(`${color || ""}`, {
    "font-title": isTitle,
    "font-subtitle": isSubtitle,
    "font-body": isBody,
    [isTitle
      ? "text-4xl md:text-6xl"
      : isSubtitle
      ? "text-3xl md:text-5xl"
      : "text-2xl md:text-4xl"]: size === "lg",
    [isTitle
      ? "text-2xl md:text-4xl"
      : isSubtitle
      ? "text-xl md:text-3xl"
      : "text-lg md:text-2xl"]: size === "md",
    [isTitle
      ? "text-lg md:text-xl"
      : isSubtitle
      ? "text-md md:text-lg"
      : "text-sm md:text-md"]: size === "sm",
  });
  return <p className={classes}>{value}</p>;
}

export default Text;

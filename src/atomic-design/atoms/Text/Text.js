import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

Text.propTypes = {
  type: PropTypes.oneOf(["title", "subtitle", "body"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  value: PropTypes.string,
  color: PropTypes.string,
};

Text.defaultProps = {
  color: "black",
};

export default function Text({ value, color, type, size = "md" }) {
  const colorIsClass = color && /text/.test(color);
  const [isTitle, isSubtitle, isBody] = [
    type === "title",
    type === "subtitle",
    type === "body",
  ];
  const classes = classNames(`${colorIsClass ? color : ""}`, {
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
  return (
    <p style={colorIsClass ? {} : { color }} className={classes}>
      {value}
    </p>
  );
}

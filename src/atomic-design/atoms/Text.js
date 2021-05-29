import React from "react";
import propTypes from "prop-types";
import classNames from "classnames";

Text.propTypes = {
  title: propTypes.bool,
  size: propTypes.string,
};

export default function Text({ children, title, size = "md" }) {
  const classes = classNames({
    "font-title": title,
    "text-2xl md:text-6xl": size === "lg",
    "text-lg md:text-2xl": size === "md",
    "text-xs md:text-sm": size === "sm",
  });

  return <p className={classes}>{children}</p>;
}

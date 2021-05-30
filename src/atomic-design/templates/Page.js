import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";

Page.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
};

export default function Page({ children, color }) {
  const colorIsClass = color && /bg/.test(color);
  const classes = classNames(
    "h-screen w-screen flex flex-col items-center justify-center",
    `${colorIsClass ? color : ""}`,
    {}
  );
  return (
    <div className={classes} style={colorIsClass ? {} : { color }}>
      {children}
    </div>
  );
}

import classNames from "classnames";
import React from "react";

export default function Page({ children, color }) {
  const classes = classNames(
    "h-screen w-screen flex flex-col items-center justify-center bg-theme-blue",
    {}
  );
  return (
    <div className={classes} color={color}>
      {children}
    </div>
  );
}

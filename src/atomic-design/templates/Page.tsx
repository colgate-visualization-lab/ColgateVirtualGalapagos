import classNames from "classnames";
import React from "react";
import { ValidBgColors } from "../../types";

export interface PageProps {
  color: ValidBgColors;
  children: React.ReactChildren;
}

export function Page({ children, color }: PageProps) {
  const classes = classNames(
    "h-screen w-screen flex flex-col items-center justify-center",
    `${color || ""}`,
    {}
  );
  return <div className={classes}>{children}</div>;
}
export default Page;

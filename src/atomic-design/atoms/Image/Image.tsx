import classNames from "classnames";
import React from "react";

export interface ImageProps {
  className?: string;
  src: string;
  alt?: string;
  coverType?: "contain" | "cover";
}

Image.defaultProps = {
  alt: "",
  coverType: "cover",
};

export function Image({ className, coverType, ...rest }: ImageProps) {
  const classes = classNames(className, "block flex h-full w-full max-w-full", {
    "object-cover": coverType === "cover",
    "object-contain": coverType === "contain",
  });
  return <img className={classes} {...rest} />;
}

export default Image;

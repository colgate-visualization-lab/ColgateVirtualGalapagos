import React from "react";

export interface ImageProps {
  className?: string;
  src: string;
  alt?: string;
}

Image.defaultProps = {
  alt: "",
};

export default function Image({ className, ...rest }: ImageProps) {
  const classes = "object-cover w-full h-auto " + className;
  return <img className={classes} {...rest} />;
}

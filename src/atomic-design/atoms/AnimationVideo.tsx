import React from "react";

export interface AnimationVideoProps {
  className: string;
  src: string;
  type: string;
}

export default function AnimationVideo({
  className,
  src,
  type,
  ...rest
}: AnimationVideoProps) {
  return (
    <video
      className={className + " fixed object-cover w-full h-full"}
      {...rest}
    >
      <source src={src} type={type} />
    </video>
  );
}

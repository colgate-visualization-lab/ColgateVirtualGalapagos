import React, { VideoHTMLAttributes } from "react";

export interface AnimationVideoProps
  extends VideoHTMLAttributes<HTMLVideoElement> {
  className?: string;
  src: string;
  type?: string;
}

AnimationVideo.defaultProps = {
  className: "",
  type: "video/mp4",
};

export default function AnimationVideo({
  className,
  src,
  type,
  ...rest
}: AnimationVideoProps) {
  return (
    <video
      className={className + " absolute object-cover w-full h-full inset-0"}
      {...rest}
    >
      <source src={src} type={type} />
    </video>
  );
}

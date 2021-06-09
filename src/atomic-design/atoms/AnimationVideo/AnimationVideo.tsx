import React, { useCallback, VideoHTMLAttributes } from "react";

export interface AnimationVideoProps
  extends VideoHTMLAttributes<HTMLVideoElement> {
  className?: string;
  src: string;
  type?: string;
  playbackRate?: number;
}

AnimationVideo.defaultProps = {
  className: "",
  type: "video/mp4",
};

export default function AnimationVideo({
  className,
  src,
  type,
  playbackRate,
  ...rest
}: AnimationVideoProps) {
  const mountCallback = useCallback((node: HTMLVideoElement) => {
    if (node && playbackRate) {
      node.playbackRate = playbackRate;
    }
  }, []);
  return (
    <video
      ref={mountCallback}
      className={className + " absolute object-cover w-full h-full inset-0"}
      {...rest}
    >
      <source src={src} type={type} />
    </video>
  );
}

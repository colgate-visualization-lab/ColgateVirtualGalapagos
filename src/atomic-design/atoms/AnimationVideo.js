import React from "react";
import PropTypes from "prop-types";

AnimationVideo.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  type: PropTypes.string,
};

export default function AnimationVideo({ className, src, type, ...rest }) {
  return (
    <video
      className={className + " fixed object-cover w-full h-full"}
      {...rest}
    >
      <source src={src} type={type} />
    </video>
  );
}

import React from "react";
import PropTypes from "prop-types";

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default function Image(props) {
  return <img className="object-cover w-full h-auto" {...props} />;
}

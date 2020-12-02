import React from "react";
import Iframe from "react-iframe";
import PropTypes from "prop-types";
import classes from "./VolcanoeIframe.css";

function VolcanoeIframe(props) {
  return (
    <Iframe
      position="absolute"
      width="100%"
      height="100%"
      styles={{ top: 0 }}
      src={props.src}
      autoplay
    />
  );
}

VolcanoeIframe.propTypes = {
  src: PropTypes.string.isRequired,
};

export default VolcanoeIframe;

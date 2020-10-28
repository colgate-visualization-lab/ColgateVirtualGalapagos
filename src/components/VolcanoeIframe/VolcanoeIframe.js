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
      className={classes.Iframe}
      src={props.src}
    />
  );
}

VolcanoeIframe.propTypes = {
  src: PropTypes.string.isRequired,
};

export default VolcanoeIframe;

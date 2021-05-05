import React from "react";
import Slider from "@material-ui/core/Slider";
import PropTypes from "prop-types";

function ProgressBar({ position, duration, seek }) {
  return (
    <Slider
      value={position}
      onChange={(_, newValue) => seek(newValue)}
      min={0}
      max={duration}
      aria-label="progress bar"
    />
  );
}

ProgressBar.propTypes = {
  position: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  seek: PropTypes.func.isRequired,
};

export default ProgressBar;

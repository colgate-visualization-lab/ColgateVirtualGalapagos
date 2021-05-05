/* eslint-disable jsx-a11y/aria-role */
import React from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

import { formatTime } from "utils";

function Time({ position, duration }) {
  return (
    <Typography variant="body2">
      <span role="current-time" aria-label="current time">
        {formatTime(position)}
      </span>
      {" / "}
      <span role="duration" aria-label="duration">
        {formatTime(duration)}
      </span>
    </Typography>
  );
}

Time.propTypes = {
  position: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
};

export default Time;

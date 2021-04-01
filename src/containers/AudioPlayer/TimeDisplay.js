import React from "react";
import Typography from "@material-ui/core/Typography";

const TimeDisplay = ({ seek, duration, formatTime }) => {
  return (
    <div>
      <Typography>
        {formatTime(seek)} / {formatTime(duration)}
      </Typography>
    </div>
  );
};

export default TimeDisplay;

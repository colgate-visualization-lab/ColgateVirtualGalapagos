import React from "react";
import Typography from "@material-ui/core/Typography";

import { formatTime } from "utils";

const TimeDisplay = ({ seek, duration }) => {
  return (
    <div>
      <Typography>
        {formatTime(seek)} / {formatTime(duration)}
      </Typography>
    </div>
  );
};

export default TimeDisplay;

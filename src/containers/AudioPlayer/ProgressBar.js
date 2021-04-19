import React from "react";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  progressBarSection: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    margin: theme.spacing(0, 2),
  },
}));

/* 
  ProgressBar is a slider essentially. 
  Parameters are duration of the audio, seek (which is currentTime),
  and handleSeek to change the currentTime/seek if you seek on the slider
*/
const ProgressBar = ({
  duration,
  seek,
  handleSeekingChange,
  handleSeekingStart,
  handleSeekingEnd,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.progressBarSection}>
      <Slider
        min={0}
        max={duration}
        step={0.01}
        value={seek}
        onChange={handleSeekingChange}
        onMouseDown={handleSeekingStart}
        onMouseUp={handleSeekingEnd}
        aria-labelledby="progress bar"
      />
    </div>
  );
};

export default ProgressBar;

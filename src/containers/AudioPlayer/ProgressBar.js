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

const ProgressBar = ({ duration, seek, handleSeek }) => {
  const classes = useStyles();
  return (
    <div className={classes.progressBarSection}>
      <Slider
        min={0}
        max={duration}
        step={0.01}
        value={seek}
        onChange={handleSeek}
        aria-labelledby="progress bar"
      />
    </div>
  );
};

export default ProgressBar;

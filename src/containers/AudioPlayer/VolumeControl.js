import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Slider from "@material-ui/core/Slider";
import Popover from "@material-ui/core/Popover";
import Grow from "@material-ui/core/Grow";
import VolumeUpIcon from "@material-ui/icons/VolumeUpOutlined";
import VolumeOffIcon from "@material-ui/icons/VolumeOffOutlined";
import { makeStyles } from "@material-ui/core/styles";
// import VolumeMuteIcon from "@material-ui/icons/VolumeMuteOutlined";
// import VolumeDownIcon from "@material-ui/icons/VolumeDownOutlined";

const useStyles = makeStyles((theme) => ({
  volumeDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  sliderDiv: {
    width: theme.typography.pxToRem(120),
    display: "flex",
    alignItems: "center",
  },
}));

const VolumeControl = ({ muted, handleMute, volume, handleVolumeChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.volumeDiv}>
      <div>
        <IconButton onClick={handleMute} color="primary">
          {!muted ? <VolumeUpIcon /> : <VolumeOffIcon />}
        </IconButton>
      </div>

      <div className={classes.sliderDiv}>
        <Slider
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={handleVolumeChange}
          aria-labelledby="volume slider"
        />
      </div>
    </div>
  );
};

export default VolumeControl;

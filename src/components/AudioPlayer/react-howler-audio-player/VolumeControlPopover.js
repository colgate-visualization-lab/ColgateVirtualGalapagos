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

const useStyles = makeStyles((theme) => {
  const widthTransition = theme.transitions.create("width", {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.leavingScreen,
  });
  return {
    volumeDiv: {
      display: "flex",
      alignItems: "center",
      transition: widthTransition,
      width: theme.typography.pxToRem(48),
      "&:hover": {
        transition: widthTransition,
        width: theme.typography.pxToRem(160),
      },
    },

    sliderDiv: {
      height: theme.typography.pxToRem(160),
    },

    paper: {
      padding: theme.spacing(1, 0.5),
    },
  };
});

const VolumeControl = ({ muted, handleMute, volume, handleVolumeChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleShowVolumeSlider = (event) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleCloseVolumeSlider = () => {
    setAnchorEl(null);
  };
  const slider = Boolean(anchorEl);

  return (
    <div
      onMouseEnter={handleShowVolumeSlider}
      onMouseLeave={handleCloseVolumeSlider}
    >
      <IconButton
        aria-owns={open ? "volume-popover" : undefined}
        aria-haspopup="true"
        onClick={handleMute}
        color="primary"
      >
        {!muted ? <VolumeUpIcon /> : <VolumeOffIcon />}
      </IconButton>
      <Popover
        id="volume-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={slider}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        onClose={handleCloseVolumeSlider}
        disableRestoreFocus
      >
        <div className={classes.sliderDiv}>
          <Slider
            min={0}
            max={1}
            step={0.01}
            orientation="vertical"
            value={volume}
            onChange={handleVolumeChange}
            aria-labelledby="volume slider"
          />
        </div>
      </Popover>
    </div>
  );
};

export default VolumeControl;

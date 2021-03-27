import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Slider from "@material-ui/core/Slider";
import Popover from "@material-ui/core/Popover";
import VolumeUpIcon from "@material-ui/icons/VolumeUpOutlined";
import VolumeOffIcon from "@material-ui/icons/VolumeOffOutlined";
import SpeedOutlinedIcon from "@material-ui/icons/SpeedOutlined";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    speedDiv: {
      display: "flex",
      alignItems: "center",
    },

    sliderDiv: {
      height: theme.typography.pxToRem(160),
    },

    popover: {
      pointerEvents: "none",
    },

    paper: {
      padding: theme.spacing(1, 2),
    },
  };
});

const speedMarks = [
  {
    value: 0.5,
    label: "0.5x",
  },
  {
    value: 0.75,
    label: "0.75x",
  },
  {
    value: 1,
    label: "1x",
  },
  {
    value: 1.25,
    label: "1.25x",
  },
  {
    value: 1.5,
    label: "1.5x",
  },
  {
    value: 1.75,
    label: "1.75x",
  },
  {
    value: 2,
    label: "2x",
  },
];

function valuetext(value) {
  return `${value}x`;
}

const SpeedControl = ({ rate, handleRateChange }) => {
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
        aria-owns={open ? "speed-popover" : undefined}
        aria-haspopup="true"
        color="primary"
      >
        <SpeedOutlinedIcon />
      </IconButton>
      <Popover
        id="speed-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={slider}
        anchorEl={anchorEl}
        onClose={handleCloseVolumeSlider}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        disableRestoreFocus
      >
        <div className={classes.sliderDiv}>
          <Slider
            min={0.25}
            max={2}
            step={0.25}
            marks={speedMarks}
            orientation="vertical"
            value={rate}
            valueLabelDisplay="auto"
            onChange={handleRateChange}
            aria-labelledby="speed slider"
            getAriaValueText={valuetext}
          />
        </div>
      </Popover>
    </div>
  );
};

export default SpeedControl;

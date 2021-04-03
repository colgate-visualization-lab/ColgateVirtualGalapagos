import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Slider from "@material-ui/core/Slider";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import SpeedOutlinedIcon from "@material-ui/icons/SpeedOutlined";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => {
  return {
    speedDiv: {
      display: "flex",
      alignItems: "center",
    },

    sliderDiv: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },

    paper: {
      padding: theme.spacing(1),
      transform: "translate(0, -20%)!important",
    },
    selectedRate: {
      color: "red",
    },
  };
});

const rates = [
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

const RateControl = ({ currentRate, handleRateChange }) => {
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
    <div>
      <IconButton
        aria-owns={open ? "speed-popover" : undefined}
        aria-haspopup="true"
        color="primary"
        onClick={handleShowVolumeSlider}
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
          <ButtonGroup
            color="primary"
            aria-label="speed control button group"
            orientation="vertical"
            variant="text"
          >
            {rates.map((rate) => (
              <Button
                key={rate.value}
                className={
                  rate.value === currentRate ? classes.selectedRate : ""
                }
                onClick={(event) => handleRateChange(event, rate.value)}
              >
                {rate.label}
              </Button>
            ))}
          </ButtonGroup>
        </div>
      </Popover>
    </div>
  );
};

export default RateControl;

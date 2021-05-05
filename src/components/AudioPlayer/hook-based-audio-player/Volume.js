import React from "react";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import IconButton from "@material-ui/core/IconButton";
import VolumeUpOutlinedIcon from "@material-ui/icons/VolumeUpOutlined";
import VolumeDownOutlinedIcon from "@material-ui/icons/VolumeDownOutlined";
import VolumeMuteOutlinedIcon from "@material-ui/icons/VolumeMuteOutlined";
import PropTypes from "prop-types";

function Volume({ currentVolume, muteVolume, setVolume }) {
  const volumeIcon =
    currentVolume >= 0.5 ? (
      <VolumeUpOutlinedIcon />
    ) : currentVolume > 0 ? (
      <VolumeDownOutlinedIcon />
    ) : (
      <VolumeMuteOutlinedIcon />
    );

  return (
    <Grid container justify="flex-end">
      <Grid item xs={2} container alignItems="center">
        <IconButton aria-label="volume" onClick={muteVolume}>
          {volumeIcon}
        </IconButton>
      </Grid>
      <Grid item xs={3} container alignItems="center">
        <Slider
          value={currentVolume}
          onChange={(_, newValue) => {
            setVolume(newValue);
          }}
          min={0}
          step={0.001}
          max={1}
          aria-label="volume slider"
        />
      </Grid>
    </Grid>
  );
}

Volume.propTypes = {
  currentVolume: PropTypes.number.isRequired,
  muteVolume: PropTypes.func.isRequired,
  setVolume: PropTypes.func.isRequired,
};

export default Volume;

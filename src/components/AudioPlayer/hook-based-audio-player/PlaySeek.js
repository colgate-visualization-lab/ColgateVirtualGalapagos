import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import Replay5OutlinedIcon from "@material-ui/icons/Replay5Outlined";
import Forward5OutlinedIcon from "@material-ui/icons/Forward5Outlined";
import PlayArrowOutlinedIcon from "@material-ui/icons/PlayArrowOutlined";
import PauseCircleOutlineOutlinedIcon from "@material-ui/icons/PauseCircleOutlineOutlined";

function PlaySeek({ seek, position, duration, togglePlayPause, playing }) {
  return (
    <>
      <IconButton
        aria-label="replay"
        onClick={() => {
          seek(position < 5 ? 0 : position - 5);
        }}
      >
        <Replay5OutlinedIcon />
      </IconButton>
      <IconButton aria-label="play" onClick={togglePlayPause}>
        {playing ? (
          <PauseCircleOutlineOutlinedIcon />
        ) : (
          <PlayArrowOutlinedIcon />
        )}
      </IconButton>
      <IconButton
        aria-label="forward"
        onClick={() => {
          seek(position + 5 > duration ? duration : position + 5);
        }}
      >
        <Forward5OutlinedIcon />
      </IconButton>
    </>
  );
}

PlaySeek.propTypes = {
  seek: PropTypes.func.isRequired,
  position: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  togglePlayPause: PropTypes.func.isRequired,
  playing: PropTypes.bool.isRequired,
};

export default PlaySeek;

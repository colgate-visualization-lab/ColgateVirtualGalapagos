import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { makeStyles } from "@material-ui/core/styles";

import IntermissionScreen from "./IntermissionScreen";
import IntermissionModal from "./IntermissionModal";

const useStyles = makeStyles((theme) => ({
  playerWrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    aligntems: "center",
    width: "100%",
    margin: "auto",
    height: "100%",
    flexDirection: "column",
  },
}));

const IguanaSlide3 = ({ content }) => {
  const classes = useStyles();

  const [src, setSrc] = useState(content.src);
  const [intermission, setIntermission] = useState(true);

  const handlePlaybackEnded = () => {
    setIntermission(true);
  };

  const handleOnClick = (newSrc) => {
    setIntermission(false);
    setSrc(newSrc);
  };

  const handleClose = () => {
    setIntermission(false);
  };

  const VideoPlayer = () => (
    <div className={classes.playerWrapper}>
      <ReactPlayer
        position="relative"
        width="100%"
        height="100%"
        url={src}
        controls
        playing={!intermission}
        onEnded={handlePlaybackEnded}
        // onPlay={handlePlaybackStarted}
      />
    </div>
  );

  return !intermission ? (
    <VideoPlayer />
  ) : (
    // <IntermissionScreen hypotheses={content.data} onClick={handleOnClick} />
    <IntermissionModal
      hypotheses={content.data}
      onClick={handleOnClick}
      handleClose={handleClose}
      open={intermission}
    />
  );
};

export default IguanaSlide3;

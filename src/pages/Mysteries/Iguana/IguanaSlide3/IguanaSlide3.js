import React, { useState, useCallback } from "react";
import ReactPlayer from "react-player";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";

// import IntermissionScreen from "./IntermissionScreen";
import IntermissionModal from "./IntermissionModal";
import PopupButtons from "./PopupButtons";

const useStyles = makeStyles((theme) => ({
  playerWrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    margin: "auto",
    height: "100%",
    flexDirection: "column",
  },

  mouseMoveDiv: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  popupButtons: {
    width: "100%",
    position: "absolute",
    bottom: "10%",
  },
}));

const IguanaSlide3 = ({ content }) => {
  React.useEffect(() => {
    console.log("rerendered");
  });
  const classes = useStyles();

  const [src, setSrc] = useState(content.src);
  const [intermission, setIntermission] = useState(false);
  const [playbackEnded, setPlaybackEnded] = useState(true);
  const [popupTimeout, setPopupTimeout] = useState(null);
  const [showPopup, setShowPopup] = React.useState(false);

  const handlePlaybackEnded = () => {
    setIntermission(true);
    setPlaybackEnded(true);
  };

  const handleOnClick = (newSrc) => {
    setSrc(newSrc);
    setIntermission(false);
    setPlaybackEnded(false);
  };

  const handleClose = () => {
    setIntermission(false);
    setPlaybackEnded(true);
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    if (src === content.src) return;
    setShowPopup(true);
    (() => {
      clearTimeout(popupTimeout);
      setPopupTimeout(setTimeout(() => setShowPopup(false), 2000));
    })();
  };

  return !intermission ? (
    <div
      className={classes.playerWrapper}
      onMouseMove={(e) => {
        handleMouseMove(e);
      }}
    >
      <ReactPlayer
        position="relative"
        width="100%"
        height="100%"
        url={src}
        controls
        playing={!playbackEnded}
        onEnded={handlePlaybackEnded}
      />
      <Slide direction="up" in={showPopup} mountOnEnter unmountOnExit>
        <div className={classes.popupButtons}>
          <PopupButtons hypotheses={content.data} onClick={handleOnClick} />
        </div>
      </Slide>
    </div>
  ) : (
    <IntermissionModal
      hypotheses={content.data}
      onClick={handleOnClick}
      handleClose={handleClose}
      open={intermission}
    />
  );
};

export default IguanaSlide3;

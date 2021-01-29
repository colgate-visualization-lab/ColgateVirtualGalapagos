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

  popupButtonsVisible: {
    width: "100%",
    position: "absolute",
    bottom: "10%",
  },

  popupButtonsHidden: {
    width: "100%",
    position: "absolute",
    bottom: "100%",
    transition: "bottom 2s",
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
  const [popupButtonsClass, setPopupButtonsClass] = useState(
    classes.popupButtonsVisible
  );
  const [popupTimeout, setPopupTimeout] = useState(null);
  const [checked, setChecked] = React.useState(false);

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
    setChecked(true);
    (() => {
      clearTimeout(popupTimeout);
      setPopupTimeout(setTimeout(() => setChecked(false), 3000));
    })();
  };

  return !intermission ? (
    // <VideoPlayer />
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
      <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
        <div className={popupButtonsClass}>
          <PopupButtons
            hypotheses={content.data}
            onClick={handleOnClick}
            // popupButtonsClass={popupButtonsClass}
          />
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

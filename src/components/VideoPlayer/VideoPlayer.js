import React, { useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";

import { useProgress, useSaveProgress } from "contexts/ProgressContext";

const useStyles = makeStyles(() => ({
  video: {
    minHeight: "400px",
    minWidth: "400px",
    width: "100%",
    maxHeight: "100%",
  },
}));

/**
 * VideoPlayer component that wraps the standard html5
 * <video /> tag and saves the current time to localstorage
 * and also loads it when that slide is loaded
 */
const VideoPlayer = ({ content }) => {
  // load any saved progress
  const ref = useRef();
  const { progress } = useProgress();
  const [currentTime, setCurrentTime] = useState(
    progress.state.currentTime ? progress.state.currentTime : 0
  );

  // save progress to localstorage
  useSaveProgress({
    state: {
      currentTime,
    },
  });

  useEffect(() => {
    ref.current.currentTime = currentTime;
  }, []);

  const handleProgress = (event) => {
    setCurrentTime(event.target.currentTime);
  };

  const classes = useStyles();
  return (
    <video
      ref={ref}
      src={content.url}
      onProgress={handleProgress}
      className={classes.video}
      controls
    />
  );
};

export default VideoPlayer;

import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";

import Slide3VideoSelector from "./IguanaSlide3VideoSelector";
import AudioPlayerHandler from "../../components/AudioPlayer/AudioPlayerHandler";
import classes from "./IguanaSlide3.css";

export default function IguanaSlide3({ content }) {
  const [src, setSrc] = useState(content.data[0]);
  const [watched, setWatched] = useState(new Set());
  // const [audioIsPlaying, setAudioIsPlaying] = useState(true);

  // videoSelectionOverlay - displays hypothesis, greys out and disables the video
  const [disableVideoInteraction, setDisableVideoInteraction] = useState({});
  const [showPlayer, setShowPlayer] = useState(true);

  const handleSrcChange = (src) => {
    setSrc(src);
    setShowPlayer(false);
  };

  const handlePlaybackEnded = () => {
    setWatched(watched.add(src.id));
    setDisableVideoInteraction(true);
  };

  const handlePlaybackStarted = () => {
    setDisableVideoInteraction(false);
  };

  // this determines whether the video selection buttons
  //  are visible
  const [videoSelectorVisible, setVideoSelectorVisible] = useState(
    classes.videoSelectorVisible
  );

  useEffect(() => {
    const mouseMoveTimer = setTimeout(() => {
      setVideoSelectorVisible(classes.videoSelectorHidden);
    }, 3000);
    return () => clearTimeout(mouseMoveTimer);
  });

  return (
    <>
      {/* { showPlayer &&
      <AudioPlayerHandler  src={props.content.audioSrc} />
    } */}
      <div
        className={classes.slide3}
        onMouseMove={() => {
          setVideoSelectorVisible(classes.videoSelectorVisible);
        }}
      >
        <ReactPlayer
          position="relative"
          width="100%"
          height="100%"
          controls={disableVideoInteraction ? false : true}
          url={src.videoSrc}
          playing={true}
          onEnded={handlePlaybackEnded}
          onPlay={handlePlaybackStarted}
        />
        <div
          className={
            disableVideoInteraction
              ? classes.videoOverlayActive
              : classes.videoOverlayInactive
          }
        />
        <div
          className={
            disableVideoInteraction
              ? `${classes.videoSelectorOverlay} `
              : videoSelectorVisible
          }
        >
          <Slide3VideoSelector
            watched={watched}
            data={content.data}
            onSrcChange={handleSrcChange}
            videoInteractionDisabled={disableVideoInteraction}
          />
        </div>
      </div>
    </>
  );
}

IguanaSlide3.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.string.isRequired,
    audioSrc: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.object),
  }),
};

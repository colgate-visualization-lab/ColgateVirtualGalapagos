import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";

import Slide3VideoSelector from "./IguanaSlide3VideoSelector";
import AudioPlayerHandler from "../../components/AudioPlayer/AudioPlayerHandler";
import classes from "./IguanaSlide3.css";

export default function IguanaSlide3({ content }) {
  const [src, setSrc] = useState(content.data[0]);
  // const [audioIsPlaying, setAudioIsPlaying] = useState(true);

  // videoSelectionOverlay - displays hypothesis, greys out and disables the video
  const [
    videoSelectionOverlayVisible,
    setVideoSelectionOverlayVisible,
  ] = useState({});
  const [showPlayer, setShowPlayer] = useState(true);

  const handleSrcChange = (src) => {
    setSrc(src);
    setShowPlayer(false);
  };

  const handlePlaybackEnded = () => {
    setVideoSelectionOverlayVisible(true);
  };

  const handlePlaybackStarted = () => {
    setVideoSelectionOverlayVisible(false);
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
        className={classes.slide3Style}
        onMouseMove={() => {
          setVideoSelectorVisible(classes.videoSelectorVisible);
        }}
      >
        <ReactPlayer
          position="relative"
          width="100%"
          height="100%"
          controls={videoSelectionOverlayVisible ? false : true}
          url={src.videoSrc}
          playing={true}
          onEnded={handlePlaybackEnded}
          onPlay={handlePlaybackStarted}
        />
        <div
          className={
            videoSelectionOverlayVisible
              ? classes.videoOverlayActive
              : classes.videoOverlayInactive
          }
        />
        <div
          className={
            videoSelectionOverlayVisible
              ? `${classes.videoSelectorOverlay} `
              : videoSelectorVisible
          }
        >
          <Slide3VideoSelector
            data={content.data}
            onSrcChange={handleSrcChange}
          />
        </div>

        {/* {src != null ? (
          <>
          <ReactPlayer width="auto" height="100%"
            controls={selectionVisible? false: true} url={src.videoSrc} playing={true}
            onEnded={handlePlaybackEnded}
            onStart={handlePlaybackStarted}
            onPlay={handlePlaybackStarted}
          />
          {selectionVisible &&
          <div
          style={{
            width: "90%", height: "90%", position: "absolute", display: "flex",
            alignItems: "center", zIndex: 9, backgroundColor: "rgba(0,0,0,0.65)",
          }}
        >
          <VideoSelectorTabs data={data} onSrcChange={handleSrcChange} />
          </div>
        }
          </>) :
          (
          <>
            <div style={{ width: "100%", height: "auto", textAlign: "center", fontSize: "2rem", margin: "10px" }}>
              Select a hypothesis to test below
            </div>
            <VideoSelectorTabs data={data} onSrcChange={handleSrcChange} />
          </>
        )}  */}
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

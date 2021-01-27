import React, { useState } from "react";
import ReactPlayer from "react-player";
import Grow from "@material-ui/core/Grow";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/styles";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";

import IntermissionScreen from "./IguanaSlide3VideoSelector";

const useStyles = makeStyles((theme) => ({
  intermissionScreenContainer: {
    // position intermission div
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",

    // center the buttons
    display: "flex",
    alignItems: "center",
    justifyItems: "center",
  },
  intermissionScreen: {},
}));

const IguanaSlide3 = ({ content, imgClass }) => {
  const [playIntro, setPlayIntro] = useState(true);
  const [src, setSrc] = useState();
  const [intermission, setIntermission] = useState(false);
  const [showHypothesisButtons, setShowHypothesisButtons] = useState(false);
  const [audioIsPlaying, setAudioIsPlaying] = useState(false);
  const [audioIsDone, setAudioIsDone] = useState(false);

  const classes = useStyles();

  const handlePlaybackEnded = () => {
    setIntermission(true);
  };

  const handleIntroEnded = () => {
    setAudioIsDone(true);
    setAudioIsPlaying(false);
    setIntermission(true);
  };

  return (
    <>
      {playIntro ? (
        <>
          <AudioPlayer
            src={content.audioSrc}
            onEnded={handleIntroEnded}
            stopAudio={() => {
              setAudioIsPlaying(false);
            }}
            toggleAudio={() => {
              setAudioIsPlaying(!audioIsPlaying);
            }}
            playing={audioIsPlaying}
          />
          <img src={content.imageSrc} className={imgClass} />
        </>
      ) : (
        <ReactPlayer
          onMouseMove={() => {
            setShowHypothesisButtons(true);
          }}
          width="100%"
          height="100%"
          controls={!intermission}
          playing={false}
          url={src}
          onEnded={handlePlaybackEnded}
        />
      )}
      {/* Grow component is a TransitionComponent */}
      <Grow in={intermission} timeout={500}>
        <div className={classes.intermissionScreenContainer}>
          <IntermissionScreen
            watched={new Set()}
            data={content.data}
            onSrcChange={(src) => {
              setIntermission(false);
              setTimeout(() => {
                setSrc(src.videoSrc);
              }, 500);
            }}
            videoInteractionDisabled={true}
            imgSrc={content.imageSrc}
            imgClass={imgClass}
          />
        </div>
      </Grow>
      {showHypothesisButtons && (
        <Slide
          direction="up"
          in={showHypothesisButtons}
          mountOnEnter
          unmountOnExit
        >
          <div>
            <IntermissionScreen
              watched={new Set()}
              data={content.data}
              onSrcChange={(src) => {
                setIntermission(false);
                setTimeout(() => {
                  setSrc(src.videoSrc);
                }, 500);
              }}
              videoInteractionDisabled={false}
            />
          </div>
        </Slide>
      )}
    </>
  );
};

export default IguanaSlide3;

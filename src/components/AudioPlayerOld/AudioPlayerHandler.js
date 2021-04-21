import React, { useEffect, useState } from "react";
import AudioPlayer from "./AudioPlayer";
import PropTypes from "prop-types";

function AudioPlayerHandler(props) {
  const [audioIsPlaying, setAudioIsPlaying] = useState(false);
  const [audioIsDone, setAudioIsDone] = useState(false);

  useEffect(() => {
    if (props.playing !== undefined) {
      setAudioIsPlaying(props.playing);
    }
  });

  return (
    <AudioPlayer
      src={props.src}
      onEnded={() => {
        setAudioIsDone(true);
        setAudioIsPlaying(false);
      }}
      stopAudio={() => {
        setAudioIsPlaying(false);
      }}
      toggleAudio={() => {
        setAudioIsPlaying(!audioIsPlaying);
      }}
      playing={audioIsPlaying}
    />
  );
}

AudioPlayerHandler.propTypes = {
  src: PropTypes.string.isRequired,
};

export default AudioPlayerHandler;

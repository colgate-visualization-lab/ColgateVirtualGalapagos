import React, { useEffect, useState } from "react";
import AudioPlayer from "./AudioPlayer";

function AudioPlayerHandler(props) {
  const [audioIsPlaying, setAudioIsPlaying] = useState(true);
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

export default AudioPlayerHandler;

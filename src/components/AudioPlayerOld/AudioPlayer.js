import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import CircleControls from "react-player-circle-controls";
import "style-loader!css-loader!react-player-circle-controls/dist/styles.css";
import PropTypes from "prop-types";
import classes from "./AudioPlayer.css";

const AudioPlayer = (props) => {
  const player = useRef(null);
  // const [playing, setPlaying] = useState(false);
  const [playerState, setPlayerState] = useState({
    played: 0,
    loaded: 0,
  });

  const onSeek = (amount) => {
    if (player.current) {
      player.current.seekTo(amount, "fraction");
    }
  };
  if (props.hide) {
    return null;
  } else {
    return (
      <div style={{ width: "10px" }} className={classes.audioPlayer}>
        <ReactPlayer
          ref={player}
          url={props.src}
          playing={props.playing}
          height="0"
          width="0"
          onProgress={setPlayerState}
          onEnded={() => props.onEnded()}
        />
        <CircleControls
          played={playerState.played}
          // loaded={playerState.loaded}
          playing={props.playing}
          onSeek={onSeek}
          onTogglePlaying={() => props.toggleAudio()}
        />
      </div>
    );
  }
};

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  playing: PropTypes.bool.isRequired,
  onEnded: PropTypes.func.isRequired,
  stopAudio: PropTypes.func.isRequired,
  toggleAudio: PropTypes.func.isRequired,
};

export default AudioPlayer;

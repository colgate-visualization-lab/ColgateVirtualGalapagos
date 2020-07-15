import React, {useRef, useState} from 'react';
import ReactPlayer from 'react-player';
import CircleControls from 'react-player-circle-controls';
import 'style-loader!css-loader!react-player-circle-controls/dist/styles.css';

const AudioPlayer = (props) => {
  const player = useRef(null);
  // const [playing, setPlaying] = useState(false);
  const [playerState, setPlayerState] = useState({
    played: 0,
    loaded: 0
  });

  const onSeek = amount => {
    if (player.current) {
      player.current.seekTo(amount, 'fraction');
    }
  };
  if (props.hide) {
    return null
  }
  else {
  return (
    <div style={{position: "absolute", left: "0", top: "0", width: "128px", zIndex: "1000"}}>
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

export default AudioPlayer
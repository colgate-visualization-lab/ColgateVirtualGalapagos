import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "style-loader!css-loader!react-h5-audio-player/lib/styles.css";
import Grid from "@material-ui/core/Grid";

// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

const Player = ({ src }) => (
  <Grid item xs={12}>
    <AudioPlayer
      autoPlay
      src={src}
      onPlay={(e) => console.log("onPlay")}
      // other props here
    />
  </Grid>
);

export default Player;

// import React from "react";
// import ReactAudioPlayer from "react-audio-player";

// const Player = ({ src }) => <ReactAudioPlayer src={src} autoPlay controls />;

// export default Player;

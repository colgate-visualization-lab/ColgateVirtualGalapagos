import React from "react";
import Grid from "@material-ui/core/Grid";
import AudioPlayer from "react-h5-audio-player";
import "style-loader!css-loader!react-h5-audio-player/lib/styles.css";
import "./audioStyles.css";

const Player = ({ src }) => {
  return (
    <Grid container item xs={12}>
      <AudioPlayer
        autoPlay={false}
        src={src}
        onPlay={(e) => console.log("onPlay")}
        // other props here
      />
    </Grid>
  );
};

export default Player;

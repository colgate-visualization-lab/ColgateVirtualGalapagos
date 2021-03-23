import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import ReactAudioPlayer from "react-audio-player";

const useStyles = makeStyles((theme) => ({
  player: {
    width: "100%",

    color: "red",
    zIndex: 400,
    borderRadius: 0,
  },
}));

const Player = ({ src }) => {
  const classes = useStyles();
  return (
    <Grid container item xs={12}>
      <ReactAudioPlayer
        className={classes.player}
        src={src}
        autoPlay={false}
        controls
      />
    </Grid>
  );
};

export default Player;

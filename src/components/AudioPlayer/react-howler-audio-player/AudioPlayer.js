import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import ReactHowler from "react-howler";
import { makeStyles } from "@material-ui/styles";

import VolumeControl from "./VolumeControl";
import ProgressBar from "./ProgressBar";
import MainControls from "./MainControls";
import TimeDisplay from "./TimeDisplay";
import useAudioControls from "../hooks/useAudioControls";
import { useProgress, useSaveProgress } from "contexts/ProgressContext";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "100%",
    marginTop: theme.spacing(2),
    padding: theme.spacing(0, 2),
  },
  root: {
    // height: "90px",
    zIndex: 300,
  },

  controlsSection: {
    flexGrow: "100%",
    display: "flex",
    flexDirection: "row",
  },

  controls: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    alignItems: "center",
  },

  controlsLeft: {
    justifyContent: "flex-start",
  },
  controlsRight: {
    justifyContent: "flex-end",
  },
}));

/*
  AudioPlayer - src
*/
const AudioPlayer = ({ src }) => {
  // const { progress } = useProgress();
  const { handlers, player, playing, muted, volume, duration, seek } =
    useAudioControls(0);

  // useSaveProgress({
  //   state: {
  //     seek,
  //   },
  // });

  // set initial seek
  // useEffect(() => {
  //   console.log("initial seek happens");
  //   player.current.howler.stop();
  //   player.current.howler.seek(seek);
  // }, []);

  // useEffect(() => {
  //   console.log(player.current.howler.onend);
  // });

  const classes = useStyles();

  return (
    <Paper className={classes.paper} variant="outlined" elevation={0}>
      <Grid
        container
        justify="center"
        spacing={0}
        item
        xs={12}
        className={classes.root}
      >
        <ReactHowler
          ref={player}
          src={src}
          playing={playing}
          mute={muted}
          volume={volume}
          onLoad={handlers.handleOnLoad}
          onEnd={handlers.handleOnEnd}
          onPlay={handlers.handleOnPlay}
        />

        <Grid container spacing={0} item xs={12}>
          <ProgressBar
            duration={duration}
            seek={seek}
            handleSeekingChange={handlers.handleSeekingChange}
            handleSeekingStart={handlers.handleSeekingStart}
            handleSeekingEnd={handlers.handleSeekingEnd}
          />
        </Grid>

        <Grid item xs={12}>
          <div className={classes.controlsSection}>
            <div className={clsx(classes.controlsLeft, classes.controls)}>
              <MainControls
                playing={playing}
                handleToggle={handlers.handleToggle}
                handleSeekFive={handlers.handleSeekFive}
              />
              <TimeDisplay seek={seek} duration={duration} />
            </div>
            <div className={clsx(classes.controlsRight, classes.controls)}>
              <VolumeControl
                muted={muted}
                handleMute={handlers.handleMute}
                volume={volume}
                handleVolumeChange={handlers.handleVolumeChange}
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AudioPlayer;

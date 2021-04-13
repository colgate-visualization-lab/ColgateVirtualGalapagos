import React, { useState, useEffect, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import ReactHowler from "react-howler";
import { makeStyles } from "@material-ui/styles";

import VolumeControl from "./VolumeControl";
import ProgressBar from "./ProgressBar";
import ExtraControls from "./ExtraControls";
import MainControls from "./MainControls";
import TimeDisplay from "./TimeDisplay";
import RateControl from "./RateControl";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "90px",
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

// primary unit of time is seconds for Howler.js
const formatTime = (secs) => {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  const formattedSecs = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutes}:${formattedSecs}`;
};

/*
  AudioPlayer - src
*/
const AudioPlayer = ({ src }) => {
  const player = useRef(null);
  const raf = useRef(); //
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [seek, setSeek] = useState(0.0);
  const [isSeeking, setIsSeeking] = useState(false);
  const [duration, setDuration] = useState(0.0);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [rate, setRate] = useState(1.0);

  useEffect(() => {
    console.log(seek);
    // console.log(player.current.howler._sounds);
  });

  useEffect(() => {
    raf.current = requestAnimationFrame(renderSeekPos);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  const classes = useStyles();

  const handleOnLoad = () => {
    setLoaded(true);
    setDuration(player.current.duration());
  };

  const handleOnPlay = () => {
    console.log("here in handleOnPlay");
    setPlaying(true);
    renderSeekPos();
  };

  const handleOnEnd = () => {
    setPlaying(false);
    cancelAnimationFrame(raf.current);
  };

  const handleToggle = () => {
    // console.log(playing);
    setPlaying(!playing);
  };

  const handleSeekingChange = (_, value) => {
    console.log(parseFloat(value));
    setSeek(parseFloat(value));
  };

  const handleSeekingStart = () => {
    setIsSeeking(true);
    // setPlaying(false);
  };
  const handleSeekingEnd = () => {
    setIsSeeking(false);
    // setPlaying(true);
    // console.log(seek);
    player.current.seek(seek);
  };

  const handleSeekFive = (value) => {
    handleSeekingChange(null, seek + value);
  };

  const renderSeekPos = (startedPlaying = false) => {
    if (!isSeeking) {
      setSeek(player.current.seek());
    }
    if (startedPlaying || playing) {
      console.log("here in raf");
      // raf.current = requestAnimationFrame(renderSeekPos);
    }
  };

  const handleMute = () => {
    setMuted((muted) => !muted);
  };

  const handleVolumeChange = (event, value) => {
    setVolume(parseFloat(value));
  };

  const handleRateChange = (_, value) => {
    setRate(parseFloat(value));
    player.current.howler.rate(parseFloat(value));
  };

  return (
    <Grid container justify="center" item xs={12} className={classes.root}>
      <ReactHowler
        ref={player}
        src={src}
        playing={playing}
        mute={muted}
        volume={volume}
        onLoad={handleOnLoad}
        onEnd={handleOnEnd}
        onPlay={handleOnPlay}
      />

      <Grid container item xs={12}>
        <ProgressBar
          duration={duration}
          seek={seek}
          handleSeekingChange={handleSeekingChange}
          handleSeekingStart={handleSeekingStart}
          handleSeekingEnd={handleSeekingEnd}
        />
      </Grid>

      <Grid item xs={12}>
        <div className={classes.controlsSection}>
          <div className={clsx(classes.controlsLeft, classes.controls)}>
            <MainControls
              playing={playing}
              handleToggle={handleToggle}
              handleSeekFive={handleSeekFive}
            />
            <TimeDisplay
              seek={seek}
              duration={duration}
              formatTime={formatTime}
            />
          </div>
          <div className={clsx(classes.controlsRight, classes.controls)}>
            <VolumeControl
              muted={muted}
              handleMute={handleMute}
              volume={volume}
              handleVolumeChange={handleVolumeChange}
            />
            <RateControl
              currentRate={rate}
              handleRateChange={handleRateChange}
            />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default AudioPlayer;

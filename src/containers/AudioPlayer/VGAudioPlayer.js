import React, { useState, useEffect, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import IconButton from "@material-ui/core/IconButton";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import Forward5Icon from "@material-ui/icons/Forward5";
import Replay5Icon from "@material-ui/icons/Replay5";
import VolumeUpIcon from "@material-ui/icons/VolumeUpOutlined";
import VolumeOffIcon from "@material-ui/icons/VolumeOffOutlined";
// import VolumeMuteIcon from "@material-ui/icons/VolumeMuteOutlined";
// import VolumeDownIcon from "@material-ui/icons/VolumeDownOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import FullscreenOutlinedIcon from "@material-ui/icons/FullscreenOutlined";
// import FullscreenExitOutlinedIcon from '@material-ui/icons/FullscreenExitOutlined';
import clsx from "clsx";
import ReactHowler from "react-howler";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "90px",
    zIndex: 300,
  },
  progressBarSection: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
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
  progressBar: {
    flexGrow: 1,
    margin: theme.spacing(0, 2),
  },
}));

const formatTime = (secs) => {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  const formattedSecs = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutes}:${formattedSecs}`;
};

const VGAudioPlayer = ({ src }) => {
  const player = useRef(null);
  const raf = useRef();
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [seek, setSeek] = useState(0.0);
  const [isSeeking, setIsSeeking] = useState(false);
  const [duration, setDuration] = useState(0.0);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [rate, setRate] = useState(1);

  useEffect(() => {
    raf.current = requestAnimationFrame(renderSeekPos);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  const classes = useStyles();

  const handleOnLoad = () => {
    setLoaded(true);
    console.log(player.current);
    setDuration(player.current.duration());
  };

  const handleOnEnd = () => {
    setPlaying(false);
    cancelAnimationFrame(raf.current);
  };

  const handlePlay = () => {
    setPlaying((playing) => !playing);
    renderSeekPos();
  };

  const handleSeek = (newValue) => {
    setSeek(parseFloat(newValue));
    player.current.seek(parseFloat(newValue));
  };

  const renderSeekPos = () => {
    setSeek(player.current.seek());
    raf.current = requestAnimationFrame(renderSeekPos);
  };

  const handleMute = () => {
    setMuted((muted) => !muted);
  };

  return (
    <Grid container justify="center" item xs={12} className={classes.root}>
      <ReactHowler
        ref={player}
        src={src}
        playing={playing}
        mute={muted}
        onLoad={handleOnLoad}
        onEnd={handleOnEnd}
      />
      <Grid container item xs={12}>
        <div className={classes.progressBarSection}>
          <div className={classes.progressBar}>
            <Slider
              min={0}
              max={duration}
              step={0.01}
              value={seek}
              onChange={handleSeek}
              aria-labelledby="continuous-slider"
            />
          </div>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.controlsSection}>
          <div className={clsx(classes.controlsLeft, classes.controls)}>
            <div>
              <IconButton color="primary" onClick={handlePlay}>
                {playing ? (
                  <PauseCircleOutlineIcon />
                ) : (
                  <PlayCircleOutlineIcon />
                )}
              </IconButton>
            </div>
            <div>
              <IconButton onClick={() => handleSeek(seek - 5)} color="primary">
                <Replay5Icon />
              </IconButton>
            </div>
            <div>
              <IconButton onClick={() => handleSeek(seek + 5)} color="primary">
                <Forward5Icon />
              </IconButton>
            </div>
            <div>
              <Typography>
                {formatTime(seek)} / {formatTime(duration)}
              </Typography>
            </div>
          </div>
          <div className={clsx(classes.controlsRight, classes.controls)}>
            <div>
              <IconButton onClick={handleMute} color="primary">
                {!muted ? <VolumeUpIcon /> : <VolumeOffIcon />}
              </IconButton>
            </div>
            <div>
              <IconButton color="primary">
                <SettingsOutlinedIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default VGAudioPlayer;

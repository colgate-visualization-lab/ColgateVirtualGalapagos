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
// import VolumeOffIcon from "@material-ui/icons/VolumeOffOutlined";
// import VolumeMuteIcon from "@material-ui/icons/VolumeMuteOutlined";
// import VolumeDownIcon from "@material-ui/icons/VolumeDownOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import FullscreenOutlinedIcon from "@material-ui/icons/FullscreenOutlined";
// import FullscreenExitOutlinedIcon from '@material-ui/icons/FullscreenExitOutlined';
import clsx from "clsx";

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
  section: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    alignItems: "center",
  },
  section1: {
    justifyContent: "flex-start",
  },
  section2: {
    justifyContent: "flex-end",
  },
  progressBar: {
    flexGrow: 1,
    margin: theme.spacing(0, 2),
  },
}));

const VGAudioPlayer = ({ src }) => {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(100);
  const [volume, setVolume] = useState(50);
  const classes = useStyles();
  const audioRef = useRef(null);
  // useEffect(() => {
  //   console.log(audioRef.current.readyState);
  // });

  const handleProgressChange = (event, newValue) => {
    setProgress(newValue);
  };

  const handleLoadedMetadata = (event) => {
    console.log("data");
    console.log(event);
    console.log(event.target.duration);
  };

  return (
    <Grid container justify="center" item xs={12} className={classes.root}>
      <audio
        ref={audioRef}
        src={src}
        preload="auto"
        loop
        onLoadedMetadata={handleLoadedMetadata}
      />
      <Grid container item xs={12}>
        <div className={classes.progressBarSection}>
          <div className={classes.progressBar}>
            <Slider
              value={progress}
              onChange={handleProgressChange}
              aria-labelledby="continuous-slider"
            />
          </div>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.controlsSection}>
          <div className={clsx(classes.section1, classes.section)}>
            <div>
              <IconButton
                color="primary"
                onClick={() => {
                  setPlaying(!playing);
                }}
              >
                {playing ? (
                  <PlayCircleOutlineIcon />
                ) : (
                  <PauseCircleOutlineIcon />
                )}
              </IconButton>
            </div>
            <div>
              <IconButton color="primary">
                <Replay5Icon />
              </IconButton>
            </div>
            <div>
              <IconButton color="primary">
                <Forward5Icon />
              </IconButton>
            </div>
            <div>
              <Typography>00:00 / 01:40</Typography>
            </div>
          </div>
          <div className={clsx(classes.section2, classes.section)}>
            <div>
              <IconButton color="primary">
                <VolumeUpIcon />
              </IconButton>
            </div>
            <div>
              <IconButton color="primary">
                <SettingsOutlinedIcon />
              </IconButton>
            </div>
            <div>
              <IconButton color="primary">
                <FullscreenOutlinedIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default VGAudioPlayer;

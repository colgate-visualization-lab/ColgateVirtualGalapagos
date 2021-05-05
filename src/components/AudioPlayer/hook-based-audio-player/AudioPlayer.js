import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Skeleton from "@material-ui/lab/Skeleton";
import { AudioPlayerProvider } from "react-use-audio-player";

import { useAudioPlayer } from "react-use-audio-player";
import { useAudioPosition } from "react-use-audio-player";
import PlaySeek from "./PlaySeek";
import ProgressBar from "./ProgressBar";
import Time from "./Time";
import Volume from "./Volume";
import useVolumeAndMute from "../hooks/useVolumeAndMute";

const AudioPlayer = ({ src }) => {
  const { togglePlayPause, ready, loading, playing, volume } = useAudioPlayer({
    src,
    format: "mp3",
    autoplay: false,
    onend: () => console.log("playback ended"),
    preload: true,
  });
  const { position, duration, seek } = useAudioPosition({
    highRefreshRate: true,
  });

  const [currentVolume, muteVolume, setVolume] = useVolumeAndMute(volume);

  return (
    <AudioPlayerProvider>
      <Container maxWidth="sm">
        <Grid container spacing={0} direction="column">
          <Grid item>
            {loading ? (
              <Skeleton variant="rect" />
            ) : (
              <ProgressBar
                position={position}
                duration={duration}
                seek={seek}
              />
            )}
          </Grid>
          <Grid item container spacing={0} alignItems="center">
            <Grid item xs container justify="flex-start">
              {loading ? (
                <Skeleton variant="rect" width={20} />
              ) : (
                <Time position={position} duration={duration} />
              )}
            </Grid>
            <Grid item xs container justify="center">
              {loading ? (
                <Skeleton />
              ) : (
                <PlaySeek
                  seek={seek}
                  position={position}
                  duration={duration}
                  togglePlayPause={togglePlayPause}
                  playing={playing}
                />
              )}
            </Grid>
            <Grid item xs>
              {loading ? (
                <Skeleton />
              ) : (
                <Volume
                  currentVolume={currentVolume}
                  muteVolume={muteVolume}
                  setVolume={setVolume}
                />
              )}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </AudioPlayerProvider>
  );
};

export default AudioPlayer;

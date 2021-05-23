import { useState, useEffect, useRef } from "react";
import raf from "raf"; // requestAnimationFrame polyfill

const useAudioControls = (initialSeek) => {
  const player = useRef(null);
  const [soundId, setSoundId] = useState(null);
  const _raf = useRef();
  const [playing, setPlaying] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const [seek, setSeek] = useState(initialSeek ? initialSeek : 0.0);
  const [isSeeking, setIsSeeking] = useState(false);
  const [duration, setDuration] = useState(0.0);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [rate, setRate] = useState(1.0);

  useEffect(() => {
    _raf.current = raf(renderSeekPos);
    return () => clearRAF();
  }, [playing]);

  const handleOnLoad = () => {
    setLoaded(true);
    setDuration(player.current.duration());
  };

  const handleOnPlay = (id) => {
    if (!soundId) {
      setSoundId(id);
    }
    setPlaying(true);
    renderSeekPos();
  };

  const handleOnEnd = () => {
    setPlaying(false);
    clearRAF();
  };

  const handleToggle = () => {
    setPlaying(!playing);
  };

  const handleSeekingChange = (value) => {
    setSeek(parseFloat(value));
    player.current.howler.seek(value, soundId);
  };

  const handleSeekingStart = () => {
    setPlaying(false);
    setIsSeeking(true);
  };
  const handleSeekingEnd = () => {
    setIsSeeking(false);
    player.current.seek(seek);
    setPlaying(true);
  };

  const handleSeekFive = (value) => {
    handleSeekingChange(seek + value);
  };

  const renderSeekPos = () => {
    if (!isSeeking) {
      setSeek(player.current.seek());
    }
    if (playing) {
      _raf.current = raf(renderSeekPos);
    }
  };

  const handleMute = () => {
    setMuted((muted) => !muted);
  };

  const handleVolumeChange = (event, value) => {
    setVolume(parseFloat(value));
  };

  const clearRAF = () => {
    raf.cancel(_raf.current);
  };

  const handlers = {
    handleOnLoad,
    handleOnEnd,
    handleOnPlay,
    handleSeekingChange,
    handleSeekingStart,
    handleSeekingEnd,
    handleSeekFive,
    handleToggle,
    handleMute,
    handleVolumeChange,
  };

  return {
    handlers,
    player,
    soundId,
    playing,
    muted,
    volume,
    duration,
    seek,
    rate,
    loaded,
  };
};

export default useAudioControls;

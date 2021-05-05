import { useState } from "react";

const useVolumeAndMute = (volume) => {
  const [currentVolume, setCurrentVolume] = useState(volume() || 0.5);
  const [volumeBeforeMute, setVolumeBeforeMute] = useState(volume() || 0.5);

  const muteVolume = () => {
    if (volume() > 0) {
      setVolumeBeforeMute(volume());
      setCurrentVolume(0);
      volume(0);
    } else {
      setCurrentVolume(volumeBeforeMute);
      volume(volumeBeforeMute);
    }
  };

  const setVolume = (newVolume) => {
    volume(newVolume);
    setCurrentVolume(newVolume);
  };

  return [currentVolume, muteVolume, setVolume];
};

export default useVolumeAndMute;

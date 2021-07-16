import React, { createContext, useEffect, useState } from "react";
import ReactHowler from "react-howler";
import { useSettingsContext } from "./SettingsContext";
import { makeContextHook } from "./utils";

export const AudioContext = createContext({});
export const useAudioContext = makeContextHook("useAudioContext", AudioContext);

type Audio = {
  src?: string;
  isPlaying: boolean;
  onEnd?: () => void;
};

export default function AudioContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { settings } = useSettingsContext();

  const [narration, setNarration] = useState<Audio>({
    src: undefined,
    isPlaying: false,
    onEnd: () => null,
  });

  const handleNarrationEnd = () => {
    narration.onEnd && narration.onEnd();
    setNarrationAudio({ isPlaying: false });
  };

  const setNarrationAudio = (options: Audio) => {
    setNarration((state) => ({ ...state, ...options }));
  };

  return (
    <AudioContext.Provider value={{ narration, setNarrationAudio }}>
      {settings.themeMusic && (
        <ReactHowler
          src={settings.themeMusic}
          playing={settings.isThemePlaying}
          volume={settings.themeVolume}
          loop={true}
        />
      )}
      {narration.src && (
        <ReactHowler
          src={narration.src}
          playing={narration.isPlaying}
          volume={settings.volume}
          onEnd={handleNarrationEnd}
        />
      )}
      {children}
    </AudioContext.Provider>
  );
}

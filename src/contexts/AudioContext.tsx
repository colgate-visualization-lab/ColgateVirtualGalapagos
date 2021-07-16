import React, { createContext, useEffect, useState } from "react";
import ReactHowler from "react-howler";
import { ValidSoundEffects, ValidThemeMusic } from "../types";
import { useSettingsContext } from "./SettingsContext";
import { makeContextHook } from "./utils";

const getEffectSrc = (type: ValidSoundEffects) => {
  const effects = {
    "button-click": "/audio/effects/button_click.mp3",
    none: "",
  };
  return effects[type];
};

const getThemeSrc = (type: ValidThemeMusic) => {
  const effects = {
    global: "/audio/theme/theme_song.mp3",
    isabela: "/audio/theme/isabela.mp3",
  };
  return effects[type];
};

export const AudioContext = createContext({});
export const useAudioContext = makeContextHook("useAudioContext", AudioContext);

type Audio = {
  src?: string;
  isPlaying?: boolean;
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

  const [soundEffect, setSoundEffect] = useState<ValidSoundEffects>();

  const [themeMusic, setThemeMusic] = useState<ValidThemeMusic>("global");

  const handleNarrationEnd = () => {
    narration.onEnd && narration.onEnd();
    setNarrationAudio({ isPlaying: false });
  };

  useEffect(() => {
    console.log(soundEffect);
  }, [soundEffect]);

  const setNarrationAudio = (options: Audio) => {
    setNarration((state) => ({ ...state, ...options }));
  };

  return (
    <AudioContext.Provider
      value={{ narration, setNarrationAudio, setSoundEffect, setThemeMusic }}
    >
      <ReactHowler
        src={getThemeSrc(themeMusic)}
        playing={settings.isThemePlaying}
        volume={settings.themeVolume / 10}
        loop={true}
      />

      {narration.src && (
        <ReactHowler
          src={narration.src}
          playing={narration.isPlaying}
          volume={settings.volume / 10}
          onEnd={handleNarrationEnd}
        />
      )}
      {soundEffect && getEffectSrc(soundEffect) && (
        <ReactHowler
          src={getEffectSrc(soundEffect)}
          playing={soundEffect !== "none"}
          onEnd={() => setSoundEffect("none")}
          volume={settings.volume / 10}
        />
      )}
      {children}
    </AudioContext.Provider>
  );
}

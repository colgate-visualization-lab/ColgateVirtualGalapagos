import React, { createContext, useState } from "react";
import { makeContextHook } from "./utils";

export const SettingsContext = createContext({});
export const useSettingsContext = makeContextHook(
  "useSettingsContext",
  SettingsContext
);

interface SettingsValues {
  settings: Settings;
  setSettings: Function;
}

type Volume = 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1.0 | 1;

type Settings = {
  autoPlayAudio?: boolean;
  autoContinueConversation?: boolean;
  conversationSpeed?: 0.5 | 1 | 2 | 3 | 4;
  volume?: Volume;
  themeVolume?: Volume;
  themeMusic?: string;
};

export default function SettingsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState<Settings>({
    autoPlayAudio: false,
    autoContinueConversation: false,
    conversationSpeed: 1,
    volume: 0.5,
    themeMusic: "/audio/theme_song.mp3",
  });

  const setSettings = (options: Settings) => {
    setState((state) => ({ ...state, ...options }));
  };

  const values: SettingsValues = { settings: state, setSettings };
  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  );
}

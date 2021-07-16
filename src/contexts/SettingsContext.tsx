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

type Settings = {
  autoPlayAudio?: boolean;
  conversationSpeed?: number;
  minConversationSpeed: 0;
  maxConversationSpeed: 5;
  volume?: number;
  minVolume: 0;
  maxVolume: 10;
  isThemePlaying?: boolean;
  themeVolume?: number;
};

export default function SettingsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState<Settings>({
    autoPlayAudio: true,
    conversationSpeed: 0,
    minConversationSpeed: 0,
    maxConversationSpeed: 5,
    volume: 5,
    themeVolume: 0,
    minVolume: 0,
    maxVolume: 10,
    isThemePlaying: true,
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

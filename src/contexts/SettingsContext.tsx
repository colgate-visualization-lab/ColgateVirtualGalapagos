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
  autoContinueConversation?: boolean;
  conversationSpeed?: 0.5 | 1 | 2 | 3 | 4;
  volume?: number;
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
    volume: 50,
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

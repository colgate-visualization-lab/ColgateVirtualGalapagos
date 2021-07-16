import React from "react";
import { useHistory } from "react-router";
import { Checkbox, Text } from "../atomic-design/atoms";
import Button from "../atomic-design/atoms/Button/Button";
import Page from "../atomic-design/templates/Page";
import { useSettingsContext } from "../contexts/SettingsContext";
import { ImVolumeDecrease, ImVolumeIncrease } from "react-icons/im";
import { GiSnail, GiRabbit } from "react-icons/gi";
import { TextProps } from "../atomic-design/atoms/Text/Text";

const STEP_SIZE = 1;

const Heading = (props: TextProps) => (
  <Text type="heading" color="text-dark" {...props} className="mb-1" />
);

export default function Settings() {
  const { settings, setSettings } = useSettingsContext();
  const history = useHistory();

  const stepUp = (key: string, value: number, maxValue: number) => {
    console.log(key, value, maxValue);
    if ((value * 1000) / 1000 < maxValue) {
      setSettings({ [key]: value + STEP_SIZE });
    }
  };

  const stepDown = (key: string, value: number, minValue: number) => {
    if ((value * 1000) / 1000 > minValue) {
      setSettings({ [key]: value - STEP_SIZE });
    }
  };
  console.log(settings);
  return (
    <Page>
      <div className="fixed top-10 left-10">
        <Button size="lg" variant="wooden" onClick={() => history.goBack()}>
          <Text text="Back to Menu" color="text-dark" />
        </Button>
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <Heading text="Theme" />
          <Checkbox
            label="Play Theme Music"
            value={settings.isThemePlaying}
            onChange={() =>
              setSettings({
                isThemePlaying: !settings.isThemePlaying,
              })
            }
          />
          <div
            className={
              settings.isThemePlaying
                ? "flex cursor-pointer"
                : "flex cursor-pointer pointer-events-none opacity-60"
            }
          >
            Theme Volume
            <span className="relative mx-2 items-center select-none flex">
              <ImVolumeDecrease
                onClick={() =>
                  stepDown(
                    "themeVolume",
                    settings.themeVolume,
                    settings.minVolume
                  )
                }
              />
              <input
                className="relative mx-2"
                type="range"
                min={settings.minVolume}
                max={settings.maxVolume / 3}
                step={STEP_SIZE}
                value={settings.themeVolume}
                onChange={(e) =>
                  setSettings({ themeVolume: Number(e.target.value) })
                }
              />
              <ImVolumeIncrease
                onClick={() =>
                  stepUp(
                    "themeVolume",
                    settings.themeVolume,
                    settings.maxVolume / 3
                  )
                }
              />
            </span>
          </div>
        </div>
        <div>
          <Heading text="Speech" />

          <Checkbox
            label="Auto Play Speech Audio"
            value={settings.autoPlayAudio}
            onChange={() =>
              setSettings({
                autoPlayAudio: !settings.autoPlayAudio,
              })
            }
          />
          <div className="flex cursor-pointer">
            Volume
            <span className="relative mx-2 items-center select-none flex">
              <ImVolumeDecrease
                onClick={() =>
                  stepDown("volume", settings.volume, settings.minVolume)
                }
              />
              <input
                className="relative mx-2"
                type="range"
                min={settings.minVolume}
                max={settings.maxVolume}
                step={STEP_SIZE}
                value={settings.volume}
                onChange={(e) =>
                  setSettings({ volume: Number(e.target.value) })
                }
              />
              <ImVolumeIncrease
                onClick={() =>
                  stepUp("volume", settings.volume, settings.maxVolume)
                }
              />
            </span>
          </div>
          <div className="flex cursor-pointer">
            Conversation Speed
            <span className="relative mx-2 items-center select-none flex">
              <GiRabbit
                onClick={() =>
                  stepDown(
                    "conversationSpeed",
                    settings.conversationSpeed,
                    settings.minConversationSpeed
                  )
                }
              />
              <input
                className="relative mx-2"
                type="range"
                min={settings.minConversationSpeed}
                max={settings.maxConversationSpeed}
                step={STEP_SIZE}
                value={settings.conversationSpeed}
                onChange={(e) =>
                  setSettings({ conversationSpeed: Number(e.target.value) })
                }
              />
              <GiSnail
                onClick={() =>
                  stepUp(
                    "conversationSpeed",
                    settings.conversationSpeed,
                    settings.maxConversationSpeed
                  )
                }
              />
            </span>
          </div>
        </div>
      </div>
    </Page>
  );
}

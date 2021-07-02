import React from "react";
import { useHistory } from "react-router";
import { Checkbox, Text } from "../atomic-design/atoms";
import Button from "../atomic-design/atoms/Button/Button";
import Page from "../atomic-design/templates/Page";
import { useSettingsContext } from "../contexts/SettingsContext";
import Slider from "../atomic-design/atoms/Slider/Slider"

export default function Settings() {
  const { settings, setSettings } = useSettingsContext();
  const history = useHistory();
  return (
    <Page>
      <div className="fixed top-10 left-10">
        <Button size="lg" variant="wooden" onClick={() => history.goBack()}>
          <Text text="Back to Menu" color="text-dark" />
        </Button>
      </div>

      <Checkbox
        label="Auto Continue Conversation"
        value={settings.autoContinueConversation}
        onChange={() =>
          setSettings({
            autoContinueConversation: !settings.autoContinueConversation,
          })
        }
      />
      <Checkbox
        label="Auto Play Audio"
        value={settings.autoPlayAudio}
        onChange={() =>
          setSettings({
            autoPlayAudio: !settings.autoPlayAudio,
          })
        }
      />
      <div className="flex cursor-pointer"> Volume
        <input
          className="relative mx-2"
          type="range"
          min={settings.minVolume}
          max={settings.maxVolume}
          step={0.1}
          value={settings.volume}
          onChange={(e)=> setSettings({volume: e.target.value})}
        />
      </div>
    </Page>
  );
}

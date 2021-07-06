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
      <div className="flex cursor-pointer"> 
        Volume
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
      <div className="flex cursor-pointer">
        Conversation Speed
        <div className="relative mx-2 inline-flex items-center">
          <input type="radio" id="0.5" name="speed" value={0.5} onChange={(e)=> setSettings({conversationSpeed: e.target.value})}/>
          <label className="ml-2">0.5</label>
        </div>
        <div className="relative mx-2 inline-flex items-center">
          <input type="radio" id="1" name="speed" value={1} onChange={(e)=> setSettings({conversationSpeed: e.target.value})}/>
          <label className="ml-2">1</label>
        </div>
        <div className="relative mx-2 inline-flex items-center">
          <input type="radio" id="2" name="speed" value={2} onChange={(e)=> setSettings({conversationSpeed: e.target.value})}/>
          <label className="ml-2">2</label>
        </div>
        <div className="relative mx-2 inline-flex items-center">
          <input type="radio" id="3" name="speed" value={3} onChange={(e)=> setSettings({conversationSpeed: e.target.value})}/>
          <label className="ml-2">3</label>
        </div>
        <div className="relative mx-2 inline-flex items-center">
          <input type="radio" id="4" name="speed" value={4} onChange={(e)=> setSettings({conversationSpeed: e.target.value})}/>
          <label className="ml-2">4</label>
        </div>
      </div>
    </Page>
  );
}

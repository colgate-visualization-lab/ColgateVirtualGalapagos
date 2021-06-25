import React from "react";
import { useHistory } from "react-router";
import { Checkbox, Text } from "../atomic-design/atoms";
import Button from "../atomic-design/atoms/Button/Button";
import Page from "../atomic-design/templates/Page";
import { useSettingsContext } from "../contexts/SettingsContext";

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
    </Page>
  );
}

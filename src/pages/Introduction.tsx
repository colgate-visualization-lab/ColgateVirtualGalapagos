import React, { useState } from "react";
import { useHistory } from "react-router";
import { Text } from "../atomic-design/atoms";
import Button from "../atomic-design/atoms/Button/Button";
import Compass from "../atomic-design/atoms/Compass/Compass";
import Conversation, {
  LineType,
  ScriptType,
} from "../atomic-design/templates/Conversation";
import GameBar from "../atomic-design/templates/GameBar";
import Page from "../atomic-design/templates/Page";
import { useTransitionContext } from "../contexts/TransitionContext";
import IslandBackgound from "../test/IslandBackgound";
import Islands from "../test/Islands";
import { Island } from "../test/islandsInfo";

export default function Introduction() {
  const { startTransition } = useTransitionContext();

  const [selectedIsland, setSelectedIsland] = useState<Island["name"]>();
  const [script, setScript] = useState<ScriptType>({
    id: "first",
    lines: [
      {
        speaker: "carlos",
        speech:
          "Hey Adriana, won't you just look at that sky! It's like a dream out here at night.",
        audio: "/audio/welcome.mp3",
      },
      {
        speaker: "adriana",
        speech:
          "Hey, can I ask you somethin’? You know, without you gettin’ all defensive and stuff.",
        audio: "/audio/welcome.mp3",
      },
      {
        speaker: "carlos",
        speech: "Hold on, lets check out these modules on Isabela first.",
        audio: "/audio/welcome.mp3",
        isCheckpoint: true,
      },
      {
        speaker: "adriana",
        speech: "It’s been bothering me ever since I last saw you in Colorado.",
        audio: "/audio/welcome.mp3",
      },
      {
        speaker: "carlos",
        speech: "Me,too.",
        audio: "/audio/welcome.mp3",
      },
      {
        speaker: "adriana",
        speech: "What’s that?",
        audio: "/audio/welcome.mp3",
      },
      {
        speaker: "carlos",
        speech: "Ask your question.",
        audio: "/audio/welcome.mp3",
      },
      {
        speaker: "adriana",
        speech: "Why’d you never say goodbye?",
        audio: "/audio/welcome.mp3",
      },

      {
        speaker: "carlos",
        speech: "I don’t like goodbyes.",
        audio: "/audio/welcome.mp3",
      },
      {
        speaker: "adriana",
        speech:
          "But why didn’t you... forget it, forget it... maybe it’s best I don’t say it.",
        audio: "/audio/welcome.mp3",
      },
      {
        speaker: "carlos",
        speech: "I never wanted to leave you, Adriana.",
        audio: "/audio/welcome.mp3",
      },
      {
        speaker: "adriana",
        speech: "But you did.",
        audio: "/audio/welcome.mp3",
      },
      {
        speaker: "carlos",
        speech: "I know I did.",
        audio: "/audio/welcome.mp3",
      },
      {
        speaker: "adriana",
        speech: "Why?",
        audio: "/audio/welcome.mp3",
      },
    ],
  });
  const history = useHistory();
  return (
    <Page className="bg-gradient-to-t from-primary to-primary-dark">
      <div className="fixed w-20 h-20 z-40 top-5 left-5">
        <Button variant="icon" onClick={() => history.push("/main_menu")}>
          <Compass isAnimating={false} />
        </Button>
      </div>
      <div className="fixed top-5 right-5 z-40">
        <Button
          variant="wooden"
          onClick={() => startTransition("/character_select")}
        >
          <Text text="Skip Intro" color="text-dark" />
        </Button>
      </div>
      <IslandBackgound className="h-9/12 w-full fixed top-0 left-1/2 transform -translate-x-1/2 p-10" />

      <Islands
        selectedIsland={selectedIsland}
        className="h-9/12 pointer-events-none w-screen fixed top-0 left-1/2 transform -translate-x-1/2 p-10"
      />
      <GameBar className="h-3/12">
        <Conversation
          onCheckPoint={(index: number) => {
            console.log(index);
            index === 2
              ? setSelectedIsland("isabela")
              : setSelectedIsland(undefined);
          }}
          script={script}
        />
      </GameBar>
    </Page>
  );
}

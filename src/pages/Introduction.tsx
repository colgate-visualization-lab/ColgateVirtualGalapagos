import React, { useState } from "react";
import { Text } from "../atomic-design/atoms";
import Button from "../atomic-design/atoms/Button/Button";
import { Character } from "../atomic-design/organisms";
import Conversation, {
  LineType,
} from "../atomic-design/templates/Conversation";
import GameBar from "../atomic-design/templates/GameBar";
import Page from "../atomic-design/templates/Page";
import { useTransitionContext } from "../contexts/TransitionContext";
import Islands from "../test/Islands";
import { Island } from "../test/islandsInfo";
const birdSheet = "/sprites/bird.png";
const blueBirdSheet = "/sprites/blue_bird.png";

export default function Introduction() {
  const { startTransition } = useTransitionContext();

  const [selectedIsland, setSelectedIsland] = useState<Island["name"]>();

  return (
    <Page>
      <div className="fixed top-2 right-2 z-40">
        <Button
          size="lg"
          variant="wooden"
          onClick={() => startTransition("/character_select")}
        >
          <Text text="Skip Intro" color="text-dark" />
        </Button>
      </div>

      <Islands
        selectedIsland={selectedIsland}
        className="h-9/12 w-full fixed top-0 left-1/2 transform -translate-x-1/2 p-10"
      />
      <GameBar className="h-3/12">
        <Conversation
          onCheckPoint={(line: LineType, index: number) => {
            console.log(index);
            index === 2
              ? setSelectedIsland("isabela")
              : setSelectedIsland(undefined);
          }}
          characters={["carlos", "adriana"]}
          script={[
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
              speech:
                "It’s been bothering me ever since I last saw you in Colorado.",
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
          ]}
        />
        {/* <div className="absolute left-0 transform -translate-x-1/2">
          <Character
            name="random"
            audio="/audio/welcome.mp3"
            speech="Welcome to the Galapagos"
            fileName={birdSheet}
            initialFrame={0}
            bounds={{ x: 0, y: 0, width: 1029, height: 903 }}
            frame={{ width: 343, height: 301 }}
            speed={200}
            scale={{ x: 0.8, y: 0.55 }}
          />
        </div>
        <div className="absolute right-0 transform translate-x-1/2">
          <Character
            name="random"
            // audio="/audio/so_cool.mp3"
            className="transform -scale-x-100"
            speechPosition="left"
            speech="Thank you green birdie"
            fileName={blueBirdSheet}
            initialFrame={0}
            bounds={{ x: 0, y: 0, width: 1029, height: 903 }}
            frame={{ width: 343, height: 301 }}
            speed={200}
            scale={{ x: 0.8, y: 0.55 }}
          />
        </div> */}
      </GameBar>
    </Page>
  );
}

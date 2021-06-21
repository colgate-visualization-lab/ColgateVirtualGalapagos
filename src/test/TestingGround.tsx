import React, { useState } from "react";
import Page from "../atomic-design/templates/Page";
import Canvas from "./Canvas";
import Islands from "./Islands";
import ChatBubble from "../atomic-design/templates/ChatBubble";
import { Text } from "../atomic-design/atoms";
import GameBar from "../atomic-design/templates/GameBar";
import { Character } from "../atomic-design/organisms";
import birdSheet from "../assets/sprites/bird.png";

export default function TestingGround() {
  let [isAnimating, setAnimating] = useState(true);
  return (
    <Page color="bg-primary">
      {/* <GameBar className="h-3/12 xl:h-2/12"> */}
      <div className="absolute transform -translate-x-1/2">
        <Character
          name="blueBirdie"
          speech="Click on the islands to dive into one of many mysteries hidden in the Galapagos."
          fileName={birdSheet}
          initialFrame={0}
          bounds={{ x: 0, y: 0, width: 1029, height: 903 }}
          frame={{ width: 343, height: 301 }}
          speed={200}
          scale={{ x: 0.8, y: 0.55 }}
        />
      </div>
      {/* </GameBar> */}
    </Page>
  );
}

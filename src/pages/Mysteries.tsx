import React, { useState } from "react";
import { StaticAnimal, Text } from "../atomic-design/atoms";
import SpeechBubble from "../atomic-design/molecules/SpeechBubble/SpeechBubble";
import { Character } from "../atomic-design/organisms";
import GameBar from "../atomic-design/templates/GameBar";
import Page from "../atomic-design/templates/Page";
import Islands from "../test/Islands";
import { Island } from "../test/islandsInfo";
const birdSheet = "/sprites/bird.png";

export default function Mysteries() {
  const [info, setInfo] = useState<string>();

  return (
    <Page>
      <Islands
        className="h-9/12 xl:h-10/12 w-full max-w-screen-xl mx-auto mb-auto p-5"
        onMouseEnter={(island: Island) => setInfo((i) => island.info)}
        onMouseLeave={() => setInfo(undefined)}
      />
      <GameBar className="h-3/12 xl:h-2/12">
        <div className="absolute left-0 transform -translate-x-1/2">
          <Character
            speech="Click on the islands to dive into one of many mysteries hidden in the Galapagos."
            filename={birdSheet}
            initialFrame={0}
            bounds={{ x: 0, y: 0, width: 1029, height: 903 }}
            frame={{ width: 343, height: 301 }}
            speed={200}
            scale={{ x: 0.8, y: 0.55 }}
          />
        </div>
      </GameBar>
      {info && <InfoBox info={info} />}
    </Page>
  );
}

function InfoBox({ info, className }: { info: string; className?: string }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div
      onAnimationEnd={() => setShowInfo(true)}
      className={
        "fixed right-0 animate-slide-in-left top-0 h-1/2 z-40 " + className
      }
    >
      <StaticAnimal
        species="turtle"
        className="h-auto w-40 transform translate-x-1/2 -rotate-30 -scale-x-100"
      />
      {showInfo && (
        <div className="fixed right-20 top-20">
          <SpeechBubble text={info} position="bottom left" />
        </div>
      )}
    </div>
  );
}

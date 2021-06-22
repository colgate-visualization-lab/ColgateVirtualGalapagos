import React, { useState } from "react";
import Page from "../atomic-design/templates/Page";
import Canvas from "./Canvas";
import GameBar from "../atomic-design/templates/GameBar";
import { Character } from "../atomic-design/organisms";
import birdSheet from "../assets/sprites/bird.png";
import { StaticAnimal, Text } from "../atomic-design/atoms";
import SpeechBubble from "../atomic-design/molecules/SpeechBubble/SpeechBubble";
import Islands from "../test/Islands";
import { Island } from "../test/islandsInfo";

export default function TestingGround() {
  const [info, setInfo] = useState<string>();
  return (
    <Page>
      <Islands
        className="h-9/12 xl:h-10/12 w-full max-w-screen-xl mx-auto mb-auto p-5"
        onMouseEnter={(island: Island) => setInfo((i) => island.info)}
        onMouseLeave={() => setInfo(undefined)}
      />
      {info && <InfoBox info={info} />}
    </Page>
  )
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

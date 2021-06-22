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
  const [showInfo, setShowInfo] = useState(false);
  return (
    <Page>
      <Islands
        // {/* className="h-9/12 xl:h-10/12 w-full max-w-screen-xl mx-auto mb-auto p-5" */}
        // onMouseEnter={(island: Island) => setInfo((i) => island.info)}
        // onMouseLeave={() => setInfo(undefined)}
        // onClick={(island: Island) => setInfo((i) => island.info)}
      />
      {/* {info && <InfoBox info={info} />} */}
      <div
      onAnimationEnd={() => setShowInfo(true)}
      className={
        "fixed left-0 bottom-0 translate-y-1/4 animate-slide-up "
      }
    >
      <StaticAnimal
        species="turtle"
        className="h-auto w-full -translate-y-1/4"
      />
      {showInfo && (
        <div className="fixed right-20 top-20">
          <SpeechBubble text={info} position="right" />
        </div>
      )}
    </div>
    </Page>
  )
}



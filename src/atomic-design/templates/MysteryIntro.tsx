import React, { useState } from "react";
import { useHistory } from "react-router";
import { StaticAnimal } from "../../atomic-design/atoms";
import SpeechBubble from "../../atomic-design/molecules/SpeechBubble/SpeechBubble";
import IslandBackgound from "../atoms/islands/IslandBackgound";
import Islands, { IslandsProps } from "../atoms/islands/Islands";
import { Island, Module } from "../atoms/islands/islandsInfo";
import { ValidIslandNames } from "../../types";
import GamePage from "./GamePage";

export interface MysteryIntroProps extends IslandsProps {
  children?: React.ReactNode;
  mouseDisabled?: boolean;
  island: ValidIslandNames;
}

export default function MysteryIntro({
  children,
  mouseDisabled = true,
  island,
  ...rest
}: MysteryIntroProps) {
  const [info, setInfo] = useState<string>();
  const history = useHistory();

  return (
    <GamePage className="bg-gradient-to-t from-primary to-primary-dark">
      <IslandBackgound className="h-9/12 w-full fixed top-0 left-1/2 transform -translate-x-1/2 p-10" />

      <Islands
        className={
          (mouseDisabled ? "pointer-events-none" : "") +
          " h-9/12 w-full fixed top-0 left-1/2 transform -translate-x-1/2 p-10"
        }
        onMouseEnter={(island: Island | Module) => setInfo(island.info)}
        onMouseLeave={() => setInfo(undefined)}
        selectedIsland={island}
        {...rest}
      />
      {children}
      {info && !mouseDisabled && <InfoBox info={info} />}
    </GamePage>
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

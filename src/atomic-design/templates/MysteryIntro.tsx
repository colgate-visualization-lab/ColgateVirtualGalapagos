import React, { useState } from "react";
import { useHistory } from "react-router";
import { StaticAnimal } from "../../atomic-design/atoms";
import Button from "../../atomic-design/atoms/Button/Button";
import Compass from "../../atomic-design/atoms/Compass/Compass";
import SpeechBubble from "../../atomic-design/molecules/SpeechBubble/SpeechBubble";
import Page from "../../atomic-design/templates/Page";
import IslandBackgound from "../../test/IslandBackgound";
import Islands, { IslandsProps } from "../../test/Islands";
import { Island, Module } from "../../test/islandsInfo";
import { ValidIslandNames } from "../../types";

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
    <Page className="bg-gradient-to-t from-primary to-primary-dark">
      <div className="fixed w-20 h-20 z-40 top-5 left-5">
        <Button
          variant="icon"
          aria-label="Back to menu"
          onClick={() => history.push("/main_menu")}
        >
          <Compass isAnimating={false} />
        </Button>
      </div>
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

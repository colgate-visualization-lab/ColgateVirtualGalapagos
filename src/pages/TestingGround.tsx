import React, { useState } from "react";
import AnimatedSpriteSheet from "../atomic-design/molecules/AnimatedSpriteSheet/AnimatedSpriteSheet";
import Page from "../atomic-design/templates/Page";
import characterSheet from "../assets/sprites/attacking_soldier.png";
import { FiPlay, FiPause } from "react-icons/fi";

export default function TestingGround() {
  const [isAnimating, setAnimating] = useState(false);

  const buttonClasses = "text-xl mt-5 focus:outline-none";

  return (
    <Page color="bg-primary">
      <div className="flex flex-col items-center justify-center">
        <AnimatedSpriteSheet
          filename={characterSheet}
          bounds={{ x: 0, y: 0, width: 516, height: 306 }}
          frame={{ width: 172, height: 153 }}
          speed={200}
          isPlaying={isAnimating}
        />
        <button
          className={buttonClasses}
          onClick={() => setAnimating((a) => !a)}
        >
          {isAnimating ? "Freeze!" : "Unfreeze!"}
        </button>
      </div>
    </Page>
  );
}

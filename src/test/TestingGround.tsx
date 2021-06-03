import React, { useState } from "react";
import AnimatedSpriteSheet from "../atomic-design/molecules/AnimatedSpriteSheet/AnimatedSpriteSheet";
import Page from "../atomic-design/templates/Page";
import characterSheet from "../assets/sprites/attacking_soldier.png";
import birdSheet from "../assets/sprites/bird.png";
import blueBirdSheet from "../assets/sprites/blue_bird.png";
import DemoAnimations from "./DemoAnimations";
import Canvas from "./Canvas";

export default function TestingGround() {
  let [isAnimating, setAnimating] = useState(true);
  return (
    <Page color="bg-primary">
      <Canvas />
    </Page>
  );
}

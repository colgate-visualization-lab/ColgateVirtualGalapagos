import React, { useState } from "react";
import Page from "../atomic-design/templates/Page";
import Canvas from "./Canvas";

export default function TestingGround() {
  let [isAnimating, setAnimating] = useState(true);
  return (
    <Page color="bg-primary">
      <Canvas />
    </Page>
  );
}

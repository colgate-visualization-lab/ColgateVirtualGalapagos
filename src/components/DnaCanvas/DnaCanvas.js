import React from "react";
import DnaInteractiveActivity from "../../containers/DnaInteractiveActivity";

const DnaCanvas = () => {
  const style = {
    border: "1px solid white",
    fill: "white",
  };
  // const viewBox = [0, 0, 250, 150];

  return (
    <svg
      id="dna-canvas"
      preserveAspectRatio="xMidYMid meet"
      style={style}
      width="1000"
      height="400"
      // viewBox={viewBox}
    >
      <DnaInteractiveActivity yTranslateDistance={-25} label="Green Iguana" />
      <DnaInteractiveActivity yTranslateDistance={25} label="Marine Iguana" />
    </svg>
  );
};

export default DnaCanvas;

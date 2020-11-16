import React from "react";
import DnaInteractiveActivity from "../../containers/DnaInteractiveActivity";

const DnaCanvas = () => {
  const style = {
    // border: "1px solid white",
    // fill: "white",
  };

  // const viewBox = [
  //   window.innerWidth / -2,
  //   window.innerHeight / -2,
  //   window.innerWidth,
  //   window.innerHeight,
  // ];

  const viewBox = [0, 0, 1000, 600];

  return (
    <svg
      id="dna-canvas"
      preserveAspectRatio="xMaxYMax none"
      style={style}
      width="1000"
      height="600"
      viewBox={viewBox}
    >
      <DnaInteractiveActivity />
    </svg>
  );
};

export default DnaCanvas;

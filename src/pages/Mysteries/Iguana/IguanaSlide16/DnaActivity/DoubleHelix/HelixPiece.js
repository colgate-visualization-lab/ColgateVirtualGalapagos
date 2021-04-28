import React from "react";

const HelixPiece = ({ xTranslateDistance }) => {
  const dnaBackboneClass = {
    fill: "#333",
  };

  return (
    // <svg xmlns="http://www.w3.org/2000/svg">
    <g
      id="helixBorder"
      data-name="helixBorder"
      transform={`translate(${xTranslateDistance})`}
    >
      <path
        style={dnaBackboneClass}
        d="M 0,29.7
            c 4.32 -.29, 6.91 -3.19, 21.66 -15.26
            C 36.8, 2.05, 39.44 .22, 43.32, 0
            V 2.86
            c -4.17 .28 -6.82, 3.29 -21.73, 15.34
            S 4, 32.3, 0, 32.56 Z"
      />
      <path
        style={dnaBackboneClass}
        d="M 0, 2.86
             c 4.32 .3, 6.91, 3.19, 21.66, 15.26
             C 36.8, 30.51, 39.44, 32.34, 43.32, 32.56
             V 29.71
             c -4.17 -.29 -6.82 -3.3 -21.73 -15.35
             S 4, .26, 0, 0 Z"
      />
    </g>
    // </svg>
  );
};

export default HelixPiece;

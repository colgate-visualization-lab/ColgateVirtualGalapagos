import React from "react";

const DnaInteractiveActivity = () => {
  const spBackboneStyle = {
    fill: "#f7931e",
  };

  const basePairsStyle = {
    pair1Color1: "#2e3192",
    pair1Color2: "#8cc63f",
    pair2Color1: "#93278f",
    pair2Color2: "#754c24",
  };

  return (
    // <svg xmlns="http://www.w3.org/2000/svg">
    //   <g id="Layer_2" data-name="Layer 2">
    //     <g id="dna">
    //       <g id="dna-2" data-name="dna">
    //         <g id="helix-border">
    //           <path
    //             class="cls-1"
    //             d="M72,49.36c7.19-.49,11.49-5.3,36-25.36C133.16,3.41,137.55.37,144,0V4.75c-6.93.48-11.34,5.47-36.12,25.5S78.69,53.68,72,54.12Z"
    //           />
    //           <path
    //             class="cls-1"
    //             d="M72,4.75c7.19.49,11.49,5.31,36,25.37,25.16,20.59,29.55,23.62,36,24V49.38c-6.93-.48-11.34-5.48-36.12-25.51S78.69.44,72,0Z"
    //           />
    //         </g>
    //         <g id="nucleotides">
    //           <rect
    //             class="cls-1"
    //             x="51.92"
    //             y="18.25"
    //             width="4.13"
    //             height="8.02"
    //           />
    //           <rect
    //             class="cls-1"
    //             x="51.92"
    //             y="28.25"
    //             width="4.13"
    //             height="8.02"
    //           />
    //           <rect
    //             class="cls-1"
    //             x="61.16"
    //             y="12.38"
    //             width="4.13"
    //             height="13.7"
    //           />
    //           <rect
    //             class="cls-1"
    //             x="61.16"
    //             y="28.05"
    //             width="4.13"
    //             height="14.33"
    //           />
    //           <rect
    //             class="cls-1"
    //             x="69.94"
    //             y="6.25"
    //             width="4.13"
    //             height="19.82"
    //           />
    //           <rect
    //             class="cls-1"
    //             x="69.94"
    //             y="28.05"
    //             width="4.13"
    //             height="20.08"
    //           />
    //           <rect
    //             class="cls-1"
    //             x="78.89"
    //             y="12.5"
    //             width="4.13"
    //             height="13.7"
    //           />
    //           <rect
    //             class="cls-1"
    //             x="78.89"
    //             y="28.17"
    //             width="4.13"
    //             height="14.33"
    //           />
    //           <rect
    //             class="cls-1"
    //             x="86.96"
    //             y="18.25"
    //             width="4.13"
    //             height="8.02"
    //           />
    //           <rect
    //             class="cls-1"
    //             x="86.96"
    //             y="28.25"
    //             width="4.13"
    //             height="8.02"
    //           />
    //         </g>
    //         <g id="helix-border-2" data-name="helix-border">
    //           <path
    //             class="cls-1"
    //             d="M0,49.36c7.19-.49,11.49-5.3,36-25.36C61.16,3.41,65.55.37,72,0V4.75c-6.93.48-11.34,5.47-36.12,25.5S6.69,53.68,0,54.12Z"
    //           />
    //           <path
    //             class="cls-1"
    //             d="M0,4.75c7.19.49,11.49,5.31,36,25.37,25.16,20.59,29.55,23.62,36,24V49.38c-6.93-.48-11.34-5.48-36.12-25.51S6.69.44,0,0Z"
    //           />
    //         </g>
    //       </g>
    //     </g>
    //   </g>
      {/* <g id="spBackbone" data-name="Sugar Phosphate Backbone">
        <g id="dna">
          <g style={spBackboneStyle} id="spBackbone">
            <path
              className="cls-1"
              d="M0,49.36c7.19-.49,11.49-5.3,36-25.36C61.16,3.41,65.55.37,72,0V4.75c-6.93.48-11.34,5.47-36.12,25.5S6.69,53.68,0,54.12Z"
            />
            <path
              className="cls-1"
              d="M0,4.75c7.19.49,11.49,5.31,36,25.37,25.16,20.59,29.55,23.62,36,24V49.38c-6.93-.48-11.34-5.48-36.12-25.51S6.69.44,0,0Z"
            />
          </g>
        </g>
      </g> */}

      {/* <g id="basePairs" data-name="Base Pairs">
        <g id="dna">
          <g
            id="nucleotides"
            style={basePairsStyle}
            transform="translate(200 100)"
          >
            <rect
              id="rightTop"
              style={{ fill: basePairsStyle.pair1Color1 }}
              x="37.54"
              y="12"
              width="4.42"
              height="8.02"
              transform="translate(79.49 32.02) rotate(180)"
            />
            <rect
              id="rightBottom"
              style={{ fill: basePairsStyle.pair1Color2 }}
              x="37.54"
              y="22"
              width="4.42"
              height="8.02"
              transform="translate(79.49 52.02) rotate(180)"
            />
            <rect
              id="midRightTop"
              style={{ fill: basePairsStyle.pair2Color1 }}
              x="27.64"
              y="6.13"
              width="4.42"
              height="13.7"
              transform="translate(59.7 25.95) rotate(180)"
            />
            <rect
              id="midRightBottom"
              style={{ fill: basePairsStyle.pair2Color2 }}
              x="27.64"
              y="21.8"
              width="4.42"
              height="14.33"
              transform="translate(59.7 57.92) rotate(180)"
            />
            <rect
              id="midTop"
              style={{ fill: basePairsStyle.pair2Color2 }}
              x="18.23"
              width="4.42"
              height="19.82"
              transform="translate(40.88 19.82) rotate(180)"
            />
            <rect
              id="midBottom"
              style={{ fill: basePairsStyle.pair2Color1 }}
              x="18.23"
              y="21.8"
              width="4.42"
              height="20.08"
              transform="translate(40.88 63.67) rotate(180)"
            />
            <rect
              id="midLeftTop"
              style={{ fill: basePairsStyle.pair1Color2 }}
              x="8.65"
              y="6.25"
              width="4.42"
              height="13.7"
              transform="translate(21.71 26.2) rotate(180)"
            />
            <rect
              id="midLeftBottom"
              style={{ fill: basePairsStyle.pair1Color1 }}
              x="8.65"
              y="21.92"
              width="4.42"
              height="14.33"
              transform="translate(21.71 58.17) rotate(180)"
            />
            <rect
              id="leftTop"
              style={{ fill: basePairsStyle.pair2Color1 }}
              y="12"
              width="4.42"
              height="8.02"
              transform="translate(4.42 32.02) rotate(180)"
            />
            <rect
              id="leftBottom"
              style={{ fill: basePairsStyle.pair2Color2 }}
              y="22"
              width="4.42"
              height="8.02"
              transform="translate(4.42 52.02) rotate(180)"
            />
          </g>
        </g>
      </g> */
    </svg>}
  );
};

export default DnaInteractiveActivity;

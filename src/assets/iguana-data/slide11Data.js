export const slide11DrawAreaData = {
  correctTree:
    "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Images/IguanaSlide11Correct.png",
};

// export const slide11PhyloTreeData = {
//   iguanaNames: ["Marine Iguana", "Green Iguana", "Land Iguana"],
//   iguanaNamesPlacement: [
//     ["Green Iguana"],
//     ["Marine Iguana", "Land Iguana"],
//     ["Marine Iguana", "Land Iguana"],
//   ],
//   imgDimensions: {
//     width: 960,
//     height: 540,
//   },
//   dropTargetDimensions: {
//     width: 170,
//     height: 90,
//   },
//   dropTargets: [
//     {
//       top: 270,
//       left: 60,
//     },
//     {
//       top: 135,
//       left: 736,
//     },
//     {
//       top: 405,
//       left: 736,
//     },
//   ],

// };

export const slide11PhyloTreeData = {
  dropTargetsBounds: [
    // left mid = Green Iguana
    {
      id: "root",
      width: 200,
      height: 100,
      top: 220,
      left: 60,
    },
    // top right = Marine Iguana / Land Iguana
    {
      id: "topBranch",
      width: 200,
      height: 100,
      top: 85,
      left: 700,
    },
    // bottom right = Marine Iguana / Land Iguana
    {
      id: "bottomBranch",
      width: 200,
      height: 100,
      top: 355,
      left: 700,
    },
  ],

  dropTargets: [
    {
      currentIguana: null,
      id: "root",
      validIguanas: ["Green Iguana"],
      bounds: {
        width: 200,
        height: 100,
        top: 220,
        left: 60,
      },
    },
    {
      currentIguana: null,
      id: "topBranch",
      validIguanas: ["Marine Iguana", "Land Iguana"],
      bounds: {
        width: 200,
        height: 100,
        top: 85,
        left: 700,
      },
    },
    {
      currentIguana: null,
      id: "bottomBranch",
      validIguanas: ["Marine Iguana", "Land Iguana"],
      bounds: {
        width: 200,
        height: 100,
        top: 355,
        left: 700,
      },
    },
  ],

  iguanaNames: ["Green Iguana", "Marine Iguana", "Land Iguana"],

  imageDimensions: {
    width: 960,
    height: 540,
  },
};

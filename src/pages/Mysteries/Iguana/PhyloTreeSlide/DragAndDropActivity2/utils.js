import React from "react";

export class Box {
  constructor(validNames, placedName = null) {
    this.validNames = validNames;
    this.placedName = placedName;
  }

  isPlacedCorrectly() {
    return this.validNames.includes(this.placedName);
  }
}

// cause delay
export const delay = (time = 500) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const getBranchNames = (topRightBranch, bottomRightBranch) => {
  //prettier-ignore
  if (topRightBranch === "Marine Iguana" || bottomRightBranch === "Land Iguana"){
    bottomRightBranch = "Land Iguana";
    topRightBranch = "Marine Iguana";
  } else {
    bottomRightBranch = "Marine Iguana";
    topRightBranch = "Land Iguana";
  }

  return { topRightBranch, bottomRightBranch };
};

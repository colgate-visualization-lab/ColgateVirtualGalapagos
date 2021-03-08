import React from "react";

export const Slide12Context = React.createContext();

export class Box {
  constructor(validNames, placedName = null) {
    this.validNames = validNames;
    this.placedName = placedName;
  }

  isPlacedCorrectly() {
    return this.validNames.includes(this.placedName);
  }
}

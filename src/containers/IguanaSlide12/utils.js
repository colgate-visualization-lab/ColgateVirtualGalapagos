import React from "react";

export const Slide12Context = React.createContext();

export class Box {
  constructor(validNames, placedName = null) {
    this.correctName = validNames;
    this.placedName = placedName;
  }

  isPlacedCorrectly = () => {
    return this.correctName.includes(this.placedName);
  };
}

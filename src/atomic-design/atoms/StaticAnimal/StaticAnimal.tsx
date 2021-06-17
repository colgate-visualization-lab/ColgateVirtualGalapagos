import React from "react";
import BoobyHead from "./BoobyHead";
import LavaLizard from "./LavaLizard";
import Penguin from "./Penguin";
import SeaLion from "./SeaLion";
import Turtle from "./Turtle";

export function StaticAnimal({
  species,
  className,
}: {
  species: "penguin" | "lava lizard" | "booby head" | "turtle" | "sea lion";
  className?: string;
}) {
  const classes = className + " pointer-events-none";

  switch (species) {
    case "penguin":
      return <Penguin className={classes} />;
    case "lava lizard":
      return <LavaLizard className={classes} />;
    case "booby head":
      return <BoobyHead className={classes} />;
    case "turtle":
      return <Turtle className={classes} />;
    case "sea lion":
      return <SeaLion className={classes} />;
  }
}

export default StaticAnimal;

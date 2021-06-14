import React from "react";
import BoobyHead from "./BoobyHead";
import LavaLizard from "./LavaLizard";
import Penguin from "./Penguin";

export function StaticAnimal({
  species,
  className,
}: {
  species: "penguin" | "lava lizard" | "booby head";
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
  }
}

export default StaticAnimal;

import React from "react";
import Map from "./Map";
import FieldBook from "./FieldBook";
import Glossary from "./TravelLog";

export function BackpackContents({
    items,
    className,
  }: {
    items: "map" | "glossary" | "field book";
    className?: string;
  }) {
    const classes = className + " pointer-events-none";
  
    switch (items) {
      case "map":
        return <Map className={classes} />;
      case "glossary":
        return <Glossary className={classes} />;
      case "field book":
        return <FieldBook className={classes} />;
    }
  }
  
  export default BackpackContents;
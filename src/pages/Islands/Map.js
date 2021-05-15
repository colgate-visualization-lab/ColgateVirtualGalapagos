import React, { useState } from "react";
import { useTheme } from "@material-ui/core";

import { islands, islandNames } from "./map-and-name-details";

const Map = () => {
  const theme = useTheme();
  const [highlighted, setHighlighted] = useState();
  const [mapStyles, setMapStyles] = useState({
    fill: theme.palette.grey[300],
    stroke: theme.palette.grey[500],
    strokeMiterlimit: "10",
  });

  const islandNameStyles = {
    fontSize: 30,
    fontFamily: theme.typography.fontFamily,
    fontStyle: "italic",
  };

  const handleMouseEnter = (index) => {
    const { name } = islands[index];
    setHighlighted({
      name,
      index,
      style: {
        ...mapStyles,
        fill: theme.palette.secondary.light,
      },
    });
  };

  const handleMouseLeave = (index) => {
    setHighlighted(null);
  };

  const zoomRegionStyle = {
    fill: "none",
    stroke: theme.palette.grey[500],
    strokeWidth: 2,
  };

  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 1646.89 1024.37"
    >
      <title>homepage</title>
      <path d="M 0, 0, v 170 h 265 v -170 z" {...zoomRegionStyle} />
      <g id="Islands">
        {islands.map((island, index) => {
          const style =
            highlighted && highlighted.name === island.name
              ? highlighted.style
              : mapStyles;
          console.log(style);
          return (
            <path
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              key={island.id}
              {...island}
              {...style}
            />
          );
        })}
      </g>
      <g id="IslandNames">
        {islandNames.map(({ transform, name }, index) => (
          <text
            key={`${name}-${index}`}
            transform={transform}
            {...islandNameStyles}
          >
            {name}
          </text>
        ))}
      </g>
    </svg>
  );
};

export default Map;

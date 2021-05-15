import React, { useState } from "react";
import { useTheme } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";
import { Transition } from "react-transition-group";

import { islands, islandNames } from "./map-and-name-details";

const Map = () => {
  const theme = useTheme();
  const [highlighted, setHighlighted] = useState();

  const mapStyles = {
    fill: theme.palette.grey[300],
    stroke: theme.palette.grey[500],
    strokeMiterlimit: "10",
  };

  const islandNameStyles = {
    fontSize: 30,
    fontFamily: theme.typography.fontFamily,
    fontStyle: "italic",
  };

  const handleMouseEnter = (name, index) => {
    setHighlighted({
      name,
      index,
      style: {
        ...mapStyles,
        fill: theme.palette.secondary.light,
      },
    });
  };

  const handleMouseLeave = () => {
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
      width="960px"
      height="540px"
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
          return (
            <Link key={island.id} to={`/${island.name}`}>
              <path
                onMouseEnter={() => handleMouseEnter(island.name, index)}
                onMouseLeave={() => handleMouseLeave(index)}
                {...island}
                {...style}
              />
            </Link>
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

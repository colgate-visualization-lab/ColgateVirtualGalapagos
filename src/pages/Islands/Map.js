import React, { useState } from "react";
import { useTheme } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";
import { Transition } from "react-transition-group";
import { makeStyles } from "@material-ui/core/styles";

import { islands, islandNames } from "./map-and-name-details";
import SingleIsland from "./SingleIsland";

const useStyles = makeStyles(() => ({
  map: {
    maxWidth: "1000px",
  },
  island: {
    transition: `transform 300ms ease-in-out`,
    transformOrigin: "100% 100%",

    "&:hover": {
      transform: "scale(1.04)",
      transformOrigin: "100% 100%",
    },
  },
}));

const Map = () => {
  const classes = useStyles();
  const theme = useTheme();

  const islandNameStyles = {
    fontSize: 30,
    fontFamily: theme.typography.fontFamily,
    fontStyle: "italic",
  };

  const zoomRegionStyle = {
    fill: "none",
    stroke: theme.palette.grey[500],
    strokeWidth: 2,
  };

  return (
    <svg
      className={classes.map}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 1646.89 1024.37"
    >
      <title>homepage</title>
      <path d="M 0, 0, v 170 h 265 v -170 z" {...zoomRegionStyle} />

      <g id="Islands" transform="translate(-59.46 -25.63)">
        {islands.map((island) => (
          <SingleIsland key={island.id} island={island} />
        ))}
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

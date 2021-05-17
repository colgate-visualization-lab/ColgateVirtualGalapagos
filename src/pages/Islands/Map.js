import React, { useState } from "react";
import { useTheme } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";
import { Transition } from "react-transition-group";
import { makeStyles } from "@material-ui/core/styles";

import { islands, islandNames } from "./map-and-name-details";

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
  const [highlighted, setHighlighted] = useState();
  const duration = 200;

  const mapStyles = {
    fill: theme.palette.grey[300],
    stroke: theme.palette.grey[500],
    strokeMiterlimit: "10",
    transform: "translate(-59.46 -25.63)",
  };

  // const defaultStyles = {
  //   transition: `transform ${duration}ms ease-in-out`,
  // };

  // const transitionStyles = {
  //   entering: {
  //     transform: "translate(-59.46 -25.63) scale(1.02)",
  //     transformOrigin: "center center",
  //   },
  //   entered: {
  //     transform: "translate(-59.46 -25.63) scale(1.02)",
  //     transformOrigin: "center center",
  //   },
  //   exiting: {
  //     transform: "translate(-59.46 -25.63)",
  //     transformOrigin: "center center",
  //   },
  //   exited: {
  //     transform: "translate(-59.46 -25.63)",
  //     transformOrigin: "center center",
  //   },
  // };

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
      <g id="Islands">
        {islands.map((island, index) => {
          const mouseOver = highlighted && highlighted.name === island.name;
          const style = mouseOver ? highlighted.style : mapStyles;
          if (mouseOver) {
            console.log(mouseOver);
          }
          return (
            <Link key={island.id} to={`/${island.name}`}>
              {/* <Transition in={mouseOver} timeout={duration}>
                {(state) => ( */}
              <path
                className={classes.island}
                onMouseEnter={() => handleMouseEnter(island.name, index)}
                onMouseLeave={() => handleMouseLeave(index)}
                {...island}
                {...style}
                // style={{
                //   ...defaultStyles,
                //   ...transitionStyles[state],
                // }}
              />
              {/* )}
              </Transition> */}
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

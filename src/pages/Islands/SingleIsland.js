import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Transition } from "react-transition-group";
import clsx from "clsx";

import useScaleFromShapeCenter from "./hooks/useScaleFromShapeCenter";

const useStyles = makeStyles(() => ({
  island: {
    transform: ({ hovered, transform }) => (hovered ? transform : ""),
    // transition: "transform 200ms ease-in-out",
  },
  "island-onhover": {
    transform: ({ transform }) => transform,
    transition: "transform 200ms ease-in-out",
  },
}));

const SingleIsland = ({ island }) => {
  const islandRef = useRef();
  const theme = useTheme();
  const scaleFactor = 1.2;
  const transform = useScaleFromShapeCenter(islandRef, scaleFactor);
  const [hovered, setHovered] = useState(false);
  const classes = useStyles({ transform, hovered });

  const [style, setStyle] = useState({
    fill: theme.palette.grey[300],
    stroke: theme.palette.grey[500],
    strokeMiterlimit: "10",
  });

  const handleMouseEnter = () => {
    setHovered(true);
    setStyle({
      ...style,
      fill: theme.palette.secondary.light,
    });
  };

  const handleMouseLeave = () => {
    setHovered(false);

    setStyle({
      ...style,
      fill: theme.palette.grey[300],
    });
  };

  return (
    <Link to={`/${island.name}`}>
      <path
        ref={islandRef}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
        {...island}
        {...style}
        className={classes.island}
        // className={clsx({
        //   [classes.island]: !hovered,
        //   [classes["island-onhover"]]: hovered,
        // })}
      />
    </Link>
  );
};

export default SingleIsland;

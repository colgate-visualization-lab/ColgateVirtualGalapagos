import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import DropTargets from "./DropTargets";
import useScaledBounds from "../../hooks/useScaledBounds";
import { usePhyloTree } from "../../contexts/PhyloTreeContext";

import { MainActivityArea } from "../../components/PhyloTree";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    display: "flex",
  },
  img: {
    width: "100%",
    maxWidth: "960px",
    height: "auto",
  },
}));

const DnDMainActivity = () => {
  const classes = useStyles();

  const {
    backgroundUrl,
    phyloTreeData: { imageDimensions, dropTargetsBounds },
  } = usePhyloTree();

  const [imageRef, scaledBounds] = useScaledBounds(
    dropTargetsBounds,
    imageDimensions
  );

  return (
    <MainActivityArea>
      <div className={classes.root}>
        <img
          ref={imageRef}
          src={backgroundUrl}
          alt="phylogenetic tree"
          className={classes.img}
        />
        <DropTargets scaledBounds={scaledBounds} />
      </div>
    </MainActivityArea>
  );
};

export default DnDMainActivity;

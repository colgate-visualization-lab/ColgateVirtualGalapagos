import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import DrawArea from "../DrawArea";
import PhyloTreeDnD from "../PhyloTreeDnD";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "rgb(245,245,245)",
  },
  item: {
    padding: 0,
  },
}));

const PhyloTreeSlide = ({ content }) => {
  const classes = useStyles();
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Paper className={classes.root} id="phylo-tree-root">
      {tabIndex === 0 ? (
        <DrawArea
          id={content.id}
          tabIndex={tabIndex}
          handleTabChange={(index) => setTabIndex(index)}
        />
      ) : (
        <PhyloTreeDnD
          content={content}
          tabIndex={tabIndex}
          handleTabChange={(index) => setTabIndex(index)}
        />
      )}
    </Paper>
  );
};

export default PhyloTreeSlide;

import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import Slide12Header from "./Slide12Header";
import DrawArea from "../DrawArea";
import PhyloTreeDnD from "../PhyloTreeDnD";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  item: {
    padding: 0,
  },
}));

const IguanaSlide12 = ({ content }) => {
  const classes = useStyles();
  const [tabIndex, setTabIndex] = useState(0);
  const headerTextArray = [
    "Draw a phylogenetic tree on the canvas",
    "Create a phylogenetic tree by dragging the cards below to their correct positions",
  ];

  const header = (
    <Slide12Header
      headerText={headerTextArray[tabIndex]}
      tabIndex={tabIndex}
      handleTabChange={(index) => setTabIndex(index)}
    />
  );

  return (
    <Paper className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          {tabIndex === 0 ? (
            <DrawArea
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
        </Grid>
      </Grid>
    </Paper>
  );
};

export default IguanaSlide12;

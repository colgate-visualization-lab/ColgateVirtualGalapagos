import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import Slide12Header from "./Slide12Header";
import PlainTabs from "./PlainTabs";
import DrawArea from "../DrawArea";
import PhyloTreeTemplate from "./PhyloTreeTemplate";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "1000px",
  },
}));

const IguanaSlide12 = ({ content }) => {
  const classes = useStyles();
  const [tabIndex, setTabIndex] = useState(1);
  const headerTextArray = [
    "Draw a phylogenetic tree on the canvas",
    "Create a phylogenetic tree by dragging the cards below to their correct positions",
  ];
  return (
    <Paper className={classes.root}>
      <Slide12Header
        headerText={headerTextArray[tabIndex]}
        tabIndex={tabIndex}
        handleTabChange={(index) => setTabIndex(index)}
      />
      <Grid container spacing={1}>
        <Grid item xs={12}>
          {tabIndex === 0 ? (
            <DrawArea />
          ) : (
            <PhyloTreeTemplate content={content} />
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default IguanaSlide12;

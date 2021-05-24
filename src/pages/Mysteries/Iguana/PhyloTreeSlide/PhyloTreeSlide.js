import React, { useState, createContext } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import DrawingActivity from "./DrawingActivity";
import DnDActivity from "./DnDActivity";
import Header from "./components/Header";
import { PhyloTreeContextProvider } from "./contexts/PhyloTreeContext";
import { useProgress, useSaveProgress } from "contexts/ProgressContext";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "rgb(245,245,245)",
  },
  item: {
    padding: 0,
  },
  menu: {
    // border: "1px rgb(220,220,220)",
    background: "white",
    border: " 1px rgb(245,245,245)",
    borderRadius: `0 0 0 ${theme.shape.borderRadius}px`,
    padding: theme.spacing(2, 1),
  },
}));

const PhyloTreeSlide = ({ content }) => {
  const classes = useStyles();
  const { progress } = useProgress();

  const [tabIndex, setTabIndex] = useState(
    progress.state?.tabIndex ? progress.state.tabIndex : 0
  );

  useSaveProgress({
    state: {
      ...progress.state,
      tabIndex,
    },
  });

  const handleTabChange = (index) => setTabIndex(index);
  return (
    <PhyloTreeContextProvider content={content}>
      <Paper className={classes.root} id="phylo-tree-root">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Header tabIndex={tabIndex} handleTabChange={handleTabChange} />
          </Grid>
          <Grid item xs={12}>
            {tabIndex === 0 ? <DrawingActivity /> : <DnDActivity />}
          </Grid>
        </Grid>
      </Paper>
    </PhyloTreeContextProvider>
  );
};

export default PhyloTreeSlide;

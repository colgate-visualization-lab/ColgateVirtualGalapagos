import React, { useState, createContext } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import DrawArea from "./DrawArea";
import PhyloTreeDnD from "./PhyloTreeDnD";
import PhyloTreeHeader from "./PhyloTreeHeader";
import { Slide11Context } from "./contexts";

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
  const [tabIndex, setTabIndex] = useState(1);

  const handleTabChange = (index) => setTabIndex(index);

  return (
    <Slide11Context.Provider value={content}>
      <Paper className={classes.root} id="phylo-tree-root">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <PhyloTreeHeader
              tabIndex={tabIndex}
              handleTabChange={handleTabChange}
            />
          </Grid>
          <Grid item xs={12}>
            {tabIndex === 0 ? <DrawArea /> : <PhyloTreeDnD />}
          </Grid>
        </Grid>
      </Paper>
    </Slide11Context.Provider>
  );
};

export default PhyloTreeSlide;

import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import GeneDescription from "../GeneDescription";

const useStyles = makeStyles((theme) => ({
  foundCount: {
    color: "khaki",
  },
}));

const MutationsFound = ({ geneMutations, onClick }) => {
  const classes = useStyles();
  const geneDescription =
    "Marine iguanas have black scales, while green iguanas have bright green scales";
  return (
    <Grid container item xs={12}>
      <Grid item xs={12}>
        <Typography variant="h6" component="h4">
          Mutations Found: <span className={classes.foundCount}>4/10</span>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <GeneDescription
          geneName="Scale Color Gene"
          geneDescription={geneDescription}
        />
      </Grid>
    </Grid>
  );
};

export default MutationsFound;

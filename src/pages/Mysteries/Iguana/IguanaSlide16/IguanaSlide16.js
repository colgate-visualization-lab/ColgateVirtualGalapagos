import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import update from "immutability-helper";

import Header from "./Header";
import DnaActivity from "./DnaActivity";
import MutationDetailsPopover from "./MutationDetails";
import DnaContext from "./context";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.grey["100"],
    color: "primary",
    padding: theme.spacing(1, 2),
  },
}));

const IguanaSlide16 = ({ content }) => {
  const classes = useStyles();

  const [foundMutations, setFoundMutations] = useState({});
  const [foundIndices, setFoundIndices] = useState(new Set());

  const [showPopover, setShowPopover] = useState(false);
  const [popoverCoords, setPopoverCoords] = useState({});
  const [popoverDetails, setPopoverDetails] = useState({});

  const {
    greenIguanaSequence,
    marineIguanaSequence,
    mutationDetails,
  } = content.data;

  const numMutations = Object.keys(mutationDetails).length;

  const handleOnBaseClick = (geneIndex) => {
    if (greenIguanaSequence[geneIndex] !== marineIguanaSequence[geneIndex]) {
      setFoundMutations({
        ...foundMutations,
        [geneIndex]: mutationDetails[geneIndex],
      });
      setFoundIndices(update(foundIndices, { $add: [geneIndex] }));
    }
  };

  const handleLeaveBasePair = () => {
    setShowPopover(false);
  };

  const handleEnterBasePair = (e, geneIndex) => {
    if (foundIndices.has(geneIndex)) {
      setShowPopover(true);
      setPopoverCoords({ x: e.pageX, y: e.pageY });

      const mutation = mutationDetails[geneIndex];
      setPopoverDetails({
        geneName: mutation.name,
        geneDescription: mutation.description,
      });
    }
  };

  const handleShowMutations = () => {
    setFoundMutations({
      ...foundMutations,
      ...mutationDetails,
    });
    setFoundIndices(
      update(foundIndices, {
        $add: Object.keys(mutationDetails).map((index) => +index),
      })
    );
    console.log(mutationDetails);
    console.log(foundMutations);
    console.log(foundIndices);
  };

  return (
    <Grid container justify="center" alignItems="stretch">
      <Grid container item xs={12} spacing={2}>
        <Grid item xs={12}>
          <Paper variant="outlined" elevation={2} className={classes.paper}>
            <Header
              numFound={foundIndices.size}
              numMutations={numMutations}
              handleShowMutations={handleShowMutations}
            />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper variant="outlined" elevation={2} className={classes.paper}>
            <DnaContext.Provider
              value={{
                handleOnBaseClick,
                handleEnterBasePair,
                handleLeaveBasePair,
                foundIndices,
              }}
            >
              <DnaActivity
                label="Green Iguana"
                basePairs={greenIguanaSequence}
              />
              <DnaActivity
                label="Marine Iguana"
                basePairs={marineIguanaSequence}
              />
            </DnaContext.Provider>
            <MutationDetailsPopover
              show={showPopover}
              coords={popoverCoords}
              details={popoverDetails}
            />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default IguanaSlide16;

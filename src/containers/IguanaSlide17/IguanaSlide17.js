import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import Header from "../../components/Slide17Header";
import MutationsFound from "../../components/MutationsFound";
import Dna from "../Dna";
import { BasePairClickContext } from "./";

// import classes from "./IguanaSlide17.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.grey["900"],
    color: "white",
  },
}));

export const IguanaSlide17 = ({ content }) => {
  const classes = useStyles();
  const [selectedGene, setSelectedGene] = useState();
  const [geneMutations, setGeneMutations] = useState({});
  const [mutationsFound, setMutationsFound] = useState([]);

  const {
    mutationPositions,
    greenIguanaSequence,
    marineIguanaSequence,
    mutationDetails,
  } = content.data;

  const handleOnTabClick = (selectedGene) => {
    setSelectedGene(selectedGene);
  };

  const handleOnBaseClick = (geneIndex) => {
    if (greenIguanaSequence[geneIndex] !== marineIguanaSequence[geneIndex]) {
      let newSelectedGene = mutationPositions[geneIndex];
      let newGeneMutations = {};
      newGeneMutations[newSelectedGene] = mutationDetails[newSelectedGene];

      setGeneMutations({
        ...geneMutations,
        ...newGeneMutations,
      });

      setSelectedGene(newSelectedGene);

      setMutationsFound([...mutationsFound, geneIndex]);
    }
  };

  return (
    <Grid container justify="center" alignItems="flex-start">
      <Grid container item xs={10} spacing={2}>
        <Grid item xs={12}>
          <Paper
            variant="outlined"
            elevation={2}
            className={classes.paper}
            square
          >
            <Header />
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper
            variant="outlined"
            elevation={2}
            className={classes.paper}
            square
          >
            <BasePairClickContext.Provider
              value={{ handleOnBaseClick, mutationsFound }}
            >
              <Dna label="Green Iguana" basePairs={greenIguanaSequence} />
              <Dna label="Marine Iguana" basePairs={marineIguanaSequence} />
            </BasePairClickContext.Provider>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            variant="outlined"
            elevation={2}
            className={classes.paper}
            square
          >
            <MutationsFound />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
    // <>
    //   <div className={classes.slideTitle}>
    //     <p>Find the Mutation!</p>
    //   </div>
    //   <div className={classes.dna}>
    //     <div className={classes.dnaActivity}>
    //       <BasePairClickContext.Provider
    //         value={{ handleOnBaseClick, mutationsFound }}
    //       >
    //         <Dna label="Green Iguana" basePairs={greenIguanaSequence} />
    //         <Dna label="Marine Iguana" basePairs={marineIguanaSequence} />
    //       </BasePairClickContext.Provider>
    //     </div>
    //   </div>
    //   <div className={classes.mutationsDiv}>
    //     <div className={classes.mutationsTextbox}>
    //       <GeneMutationsTextbox
    //         geneDescription={
    //           selectedGene ? geneMutations[selectedGene].description : ""
    //         }
    //       />
    //     </div>
    //     <div className={classes.mutationsTab}>
    //       <GeneMutationsTab
    //         geneMutations={geneMutations}
    //         onClick={handleOnTabClick}
    //       />
    //     </div>
    //   </div>
    // </>
  );
};

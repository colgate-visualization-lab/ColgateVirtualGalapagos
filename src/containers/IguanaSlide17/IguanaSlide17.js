import React, { useEffect, useState } from "react";

import GeneMutationsTextbox from "../../components/GeneMutationsTextbox";
import GeneMutationsTab from "../../components/GeneMutationsTab";
import Dna from "../Dna";
import { BasePairClickContext } from "./";
import classes from "./IguanaSlide17.css";

export const IguanaSlide17 = ({ content }) => {
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
    <>
      <div className={classes.slideTitle}>
        <p>Find the Mutation!</p>
      </div>
      <div className={classes.dna}>
        <div className={classes.dnaActivity}>
          <BasePairClickContext.Provider
            value={{ handleOnBaseClick, mutationsFound }}
          >
            <Dna label="Green Iguana" basePairs={greenIguanaSequence} />
            <Dna label="Marine Iguana" basePairs={marineIguanaSequence} />
          </BasePairClickContext.Provider>
        </div>
      </div>
      <div className={classes.mutationsDiv}>
        <div className={classes.mutationsTextbox}>
          <GeneMutationsTextbox
            geneDescription={
              selectedGene ? geneMutations[selectedGene].description : ""
            }
          />
        </div>
        <div className={classes.mutationsTab}>
          <GeneMutationsTab
            geneMutations={geneMutations}
            onClick={handleOnTabClick}
          />
        </div>
      </div>
    </>
  );
};

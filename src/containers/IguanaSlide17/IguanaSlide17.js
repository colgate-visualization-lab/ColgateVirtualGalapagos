import React, { useEffect, useState } from "react";

import GeneMutationsTextbox from "../../components/GeneMutationsTextbox";
import GeneMutationsTab from "../../components/GeneMutationsTab";
import DnaMock from "../../components/DnaMock";
import DnaInteractiveActivity from "../DnaInteractiveActivity";
import { basePair1, basePair2 } from "./constants";
import DnaCanvas from "../../components/DnaCanvas";
import classes from "./IguanaSlide17.css";

export const IguanaSlide17 = ({ content }) => {
  const [selectedGene, setSelectedGene] = useState();
  const [geneMutations, setGeneMutations] = useState({});

  const handleOnClick = (selectedGene) => {
    console.log(selectedGene);
    setSelectedGene(selectedGene);
    geneMutations[selectedGene] = content.geneMutations[selectedGene];
  };

  const handleOnTabClick = (selectedGene) => {
    setSelectedGene(selectedGene);
  };

  const handleOnBasePairClick = (geneIndex) => {
    const isMutation =
      basePair2[geneIndex] !== basePair1[geneIndex] ? true : false;
    console.log(isMutation);
  };

  return (
    <div className={classes.container}>
      <div className={classes.slideTitle}>
        <p>Find the Mutation!</p>
      </div>
      <div className={classes.dna}>
        <DnaMock onClick={handleOnClick} />
        <div className={classes.dnaActivity}>
          <DnaInteractiveActivity label="Green Iguana" basePairs={basePair1} />
          <DnaInteractiveActivity
            label="Marine Iguana"
            onClick={handleOnBasePairClick}
            basePairs={basePair2}
          />
        </div>
      </div>
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
  );
};

import React, { useEffect, useState } from "react";

import GeneMutationsTextbox from "../../components/GeneMutationsTextbox";
import GeneMutationsTab from "../../components/GeneMutationsTab";
import DnaMock from "../../components/DnaMock";
import DnaInteractiveActivity from "../DnaInteractiveActivity";
import { basePair1, basePair2, mutations } from "./constants";
import { OnBaseClickContext } from "./";
import classes from "./IguanaSlide17.css";

export const IguanaSlide17 = ({ content }) => {
  const [selectedGene, setSelectedGene] = useState();
  const [geneMutations, setGeneMutations] = useState({});

  const handleOnClick = (selectedGeneX) => {
    console.log(selectedGeneX, content.geneMutations[selectedGeneX]);
    setGeneMutations({ selectedGeneX: content.geneMutations[selectedGeneX] });
    setSelectedGene(selectedGeneX);
  };

  const handleOnTabClick = (selectedGene) => {
    setSelectedGene(selectedGene);
  };

  const handleOnBaseClick = (geneIndex) => {
    if (basePair2[geneIndex] !== basePair1[geneIndex]) {
      let newSelectedGene = mutations[geneIndex];
      let newGeneMutations = {};
      newGeneMutations[newSelectedGene] =
        content.geneMutations[newSelectedGene];

      setGeneMutations({
        ...geneMutations,
        ...newGeneMutations,
      });

      setSelectedGene(newSelectedGene);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.slideTitle}>
        <p>Find the Mutation!</p>
      </div>
      <div className={classes.dna}>
        <DnaMock onClick={handleOnClick} />
        <div className={classes.dnaActivity}>
          <OnBaseClickContext.Provider value={{ handleOnBaseClick }}>
            <DnaInteractiveActivity
              label="Green Iguana"
              basePairs={basePair1}
            />
            <DnaInteractiveActivity
              label="Marine Iguana"
              basePairs={basePair2}
            />
          </OnBaseClickContext.Provider>
        </div>
      </div>
      <div className={classes.mutationsTextbox}>
        <GeneMutationsTextbox
          geneDescription={
            // ""
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

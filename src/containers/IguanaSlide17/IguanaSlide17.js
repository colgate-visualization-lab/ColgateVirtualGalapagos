import React, { useEffect, useState } from "react";

import GeneMutationsTextbox from "../../components/GeneMutationsTextbox";
import GeneMutationsTab from "../../components/GeneMutationsTab";
import DnaMock from "../../components/DnaMock";
import DnaInteractiveActivity from "../DnaInteractiveActivity";
import DnaCanvas from "../../components/DnaCanvas";
import classes from "./IguanaSlide17.css";

export const IguanaSlide17 = ({ content }) => {
  const [selectedGene, setSelectedGene] = useState();
  const [geneMutations, setGeneMutations] = useState({});

  const handleOnClick = (selectedGene) => {
    setSelectedGene(selectedGene);
    geneMutations[selectedGene] = content.geneMutations[selectedGene];
  };

  const handleOnTabClick = (selectedGene) => {
    setSelectedGene(selectedGene);
  };

  return (
    <div className={classes.container}>
      <div>
        <h1>Find the Mutation!</h1>
      </div>
      <div className={classes.dnaDiv}>
        <DnaMock onClick={handleOnClick} />
        <div className={classes.dnaActivity}>
          <DnaInteractiveActivity label="Green Iguana" />
          <DnaInteractiveActivity label="Marine Iguana" />
        </div>
      </div>
      <div style={{ alignSelf: "start" }}>
        <GeneMutationsTextbox
          className={classes.mutationsTextboxDiv}
          geneDescription={
            selectedGene ? geneMutations[selectedGene].description : ""
          }
        />
      </div>
      <div>
        <GeneMutationsTab
          className={classes.mutationsTabDiv}
          geneMutations={geneMutations}
          onClick={handleOnTabClick}
        />
      </div>
    </div>
  );
};

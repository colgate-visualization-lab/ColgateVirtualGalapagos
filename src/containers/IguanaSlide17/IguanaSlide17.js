import React, { useEffect, useState } from "react";

import GeneMutationsTextbox from "../../components/GeneMutationsTextbox";
import GeneMutationsTab from "../../components/GeneMutationsTab";
import classes from "./IguanaSlide17.css";

export const IguanaSlide17 = ({ content }) => {
  const [selectedGene, setSelectedGene] = useState();
  const [geneMutations, setGeneMutations] = useState(content.geneMutations);

  const handleOnClick = (selectedGene) => {
    setSelectedGene(selectedGene);
  };

  return (
    <div className={classes.container}>
      <div>
        <h1>Find the Mutation!</h1>
      </div>
      <div className={classes.dummyDnaDiv}>
        Placeholder for the DNA component
      </div>
      <div style={{ alignSelf: "start" }}>
        <GeneMutationsTextbox
          geneDescription={selectedGene ? selectedGene.description : ""}
        />
      </div>
      <div>
        <GeneMutationsTab
          geneMutations={geneMutations}
          onClick={(selectedGene) => {
            handleOnClick(selectedGene);
          }}
        />
      </div>
    </div>
  );
};

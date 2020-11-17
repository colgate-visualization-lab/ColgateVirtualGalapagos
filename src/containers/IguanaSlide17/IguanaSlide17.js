import React, { useEffect, useState } from "react";

import GeneMutationsTextbox from "../../components/GeneMutationsTextbox";
import GeneMutationsTab from "../../components/GeneMutationsTab";
import DnaMock from "../../components/DnaMock";
import classes from "./IguanaSlide17.css";

export const IguanaSlide17 = ({ content }) => {
  const [selectedGene, setSelectedGene] = useState();
  const [geneMutations, setGeneMutations] = useState({});

  const handleOnClick = (selectedGene) => {
    setSelectedGene(selectedGene);
  };

  return (
    <div className={classes.container}>
      <div>
        <h1>Find the Mutation!</h1>
      </div>
      <div className={classes.dummyDnaDiv}>
        <DnaMock />
      </div>
      <div style={{ alignSelf: "start" }}>
        <GeneMutationsTextbox
          className={classes.mutationsTextboxDiv}
          geneDescription={selectedGene ? selectedGene.description : ""}
        />
      </div>
      <div>
        <GeneMutationsTab
          className={classes.mutationsTabDiv}
          geneMutations={geneMutations}
          onClick={handleOnClick}
        />
      </div>
    </div>
  );
};

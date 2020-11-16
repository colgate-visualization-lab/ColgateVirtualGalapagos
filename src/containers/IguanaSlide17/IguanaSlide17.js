import React, { useEffect, useState } from "react";

import GeneTextbox from "../../components/GeneTextbox";
import classes from "./IguanaSlide17.css";

export const IguanaSlide17 = ({ content }) => {
  const [selectedGene, setSelectedGene] = useState("scaleColorGene");

  return (
    <div className={classes.container}>
      <div>
        <h1>Find the Mutation!</h1>
      </div>
      <div className={classes.dummyDnaDiv}>11234dsfgdsfgfd</div>
      <div style={{ alignSelf: "start" }}>
        <GeneTextbox geneDescription={content.geneDescriptions[selectedGene]} />
      </div>
      <div>11234dsfgdsfgfd</div>
    </div>
  );
};

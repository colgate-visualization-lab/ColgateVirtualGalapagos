import React from "react";

import GeneTextbox from "../../components/GeneTextbox";
import classes from "./IguanaSlide17.css";

export const IguanaSlide17 = ({ content }) => {
  return (
    <div className={classes.container}>
      <div>
        <h1>Find the Mutation!</h1>
      </div>
      <div className={classes.dummyDnaDiv}>11234dsfgdsfgfd</div>
      <div>
        <GeneTextbox geneDescription="This is a gene descriptor" />
      </div>
      <div>11234dsfgdsfgfd</div>
    </div>
  );
};

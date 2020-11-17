import React, { useEffect } from "react";

const GeneMutationsTextbox = ({ geneDescription }) => {
  useEffect(() => {
    console.log(geneDescription);
  });
  return <h2>{geneDescription}</h2>;
};

export default GeneMutationsTextbox;

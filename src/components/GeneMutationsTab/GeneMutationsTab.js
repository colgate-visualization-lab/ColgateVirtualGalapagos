import React, { useEffect } from "react";

import classes from "./GeneMutationsTab.css";

const GeneMutationsTab = ({ geneMutations, onClick }) => {
  useEffect(() => {
    console.log(geneMutations);
  });
  return (
    <>
      {Object.keys(geneMutations).map((mutation) => (
        <button
          onClick={() => {
            onClick(mutation);
          }}
          key={geneMutations[mutation].id}
          type="button"
          className={classes.button}
        >
          {geneMutations[mutation].name}
        </button>
      ))}
    </>
  );
};

export default GeneMutationsTab;

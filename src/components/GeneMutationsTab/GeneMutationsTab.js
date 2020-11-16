import React from "react";

import classes from "./GeneMutationsTab.css";

const GeneMutationsTab = ({ geneMutations }) => {
  return (
    <>
      {geneMutations.map((mutation, index) => (
        <button key={index} type="button" className={classes.button}>
          {mutation}
        </button>
      ))}
    </>
  );
};

export default GeneMutationsTab;

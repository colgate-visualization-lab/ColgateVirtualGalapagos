import React, { useState } from "react";
import { bool, func } from "prop-types";
interface Props {
  open: boolean;
  setOpen: boolean;
}

const Backpack = () => {
  return (
    <div>
      <img src="./images/backpack.png">
        <div />
        <div />
        <div />
      </img>
    </div>
  );
};

Backpack.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Backpack;

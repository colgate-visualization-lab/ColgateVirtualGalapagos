import React from "react";
import PropTypes from "prop-types";

import PhyloTreeMenuButton from "../../../../../components/PhyloTreeMenu/PhyloTreeMenuButton";
import PhyloTreeMenu from "../../../../../components/PhyloTreeMenu";
import CorrectTreeModal from "./CorrectTreeModal";

const DrawAreaMenu = ({
  id,
  handleClearCanvas,
  handleLoadSavedData,
  handleDone,
}) => {
  return (
    <PhyloTreeMenu>
      {id === "19" && (
        <PhyloTreeMenuButton
          handleClick={handleLoadSavedData}
          label="Load Saved Tree"
        />
      )}
      <PhyloTreeMenuButton
        handleClick={handleClearCanvas}
        label="Clear Canvas"
      />
      {/* <PhyloTreeMenuButton handleClick={handleDone} label="Done" /> */}
      <CorrectTreeModal />
    </PhyloTreeMenu>
  );
};

DrawAreaMenu.propTypes = {
  id: PropTypes.string.isRequired,
  handleClearCanvas: PropTypes.func.isRequired,
  handleLoadSavedData: PropTypes.func.isRequired,
  handleDone: PropTypes.func.isRequired,
};

export default DrawAreaMenu;

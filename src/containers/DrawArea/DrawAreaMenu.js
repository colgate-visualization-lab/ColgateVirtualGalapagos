import React from "react";
import PropTypes from "prop-types";

import PhyloTreeMenuButton from "../../components/PhyloTreeMenu/PhyloTreeMenuButton";
import PhyloTreeMenu from "../../components/PhyloTreeMenu";
import DrawAreaCorrectTreeModal from "../DrawAreaCorrectTreeModal";

const DrawAreaMenu = ({
  id,
  handleClearCanvas,
  handleLoadSlide12Data,
  handleDone,
}) => {
  return (
    <PhyloTreeMenu>
      {id === "19" && (
        <PhyloTreeMenuButton
          handleClick={handleLoadSlide12Data}
          label="Load Saved Tree"
        />
      )}
      <PhyloTreeMenuButton
        handleClick={handleClearCanvas}
        label="Clear Canvas"
      />
      {/* <PhyloTreeMenuButton handleClick={handleDone} label="Done" /> */}
      <DrawAreaCorrectTreeModal />
    </PhyloTreeMenu>
  );
};

DrawAreaMenu.propTypes = {
  id: PropTypes.string.isRequired,
  handleClearCanvas: PropTypes.func.isRequired,
  handleLoadSlide12Data: PropTypes.func.isRequired,
  handleDone: PropTypes.func.isRequired,
};

export default DrawAreaMenu;

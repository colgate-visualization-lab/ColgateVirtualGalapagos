import React from "react";
import PhyloTreeMenuButton from "../../components/PhyloTreeMenu/PhyloTreeMenuButton";
import PhyloTreeMenu from "../../components/PhyloTreeMenu";

const DrawAreaMenu = ({ id, handleClearCanvas, handleLoadSlide12Data }) => {
  return (
    <PhyloTreeMenu>
      {id === "19" && (
        <PhyloTreeMenuButton
          handleClick={handleLoadSlide12Data}
          label="Load Saved Phylo Tree"
        />
      )}
      <PhyloTreeMenuButton
        handleClick={handleClearCanvas}
        label="Clear Canvas"
      />
    </PhyloTreeMenu>
  );
};

export default DrawAreaMenu;

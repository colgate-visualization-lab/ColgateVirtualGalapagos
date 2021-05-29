import React from "react";
import PhyloTreeMenuButton from "../components/PhyloTreeMenu/PhyloTreeMenuButton";
import PhyloTreeMenu from "../components/PhyloTreeMenu";

const PhyloTreeDnDButtons = ({
  handleCheckTree,
  handleResetTree,
  handleShowTree,
  completedTreeVisible,
}) => {
  return (
    <PhyloTreeMenu>
      <PhyloTreeMenuButton
        handleClick={handleCheckTree}
        label="Check My Tree"
      />
      {completedTreeVisible ? (
        <PhyloTreeMenuButton handleClick={handleResetTree} label="Reset Tree" />
      ) : (
        <PhyloTreeMenuButton
          handleClick={handleShowTree}
          label="Show Completed Tree"
        />
      )}
    </PhyloTreeMenu>
  );
};

export default PhyloTreeDnDButtons;

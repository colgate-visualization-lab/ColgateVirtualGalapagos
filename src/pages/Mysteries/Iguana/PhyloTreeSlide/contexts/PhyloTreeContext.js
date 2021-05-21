import React, { createContext, useContext } from "react";

const PhyloTreeContext = createContext();

const usePhyloTree = () => {
  const context = useContext(PhyloTreeContext);
  if (context === undefined) {
    throw new Error("usePhyloTree must be used within a PhyloTreeContext");
  }
  return context;
};

const PhyloTreeContextProvider = ({ children, content }) => (
  <PhyloTreeContext.Provider value={content}>
    {children}
  </PhyloTreeContext.Provider>
);

export { usePhyloTree, PhyloTreeContextProvider };

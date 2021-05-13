import React from "react";

import DragSource from "../../components/DragSource";
import { useDnDActivity } from "../../contexts/DnDActivityContext";

const DragSources = () => {
  const [{ undraggedIguanas }] = useDnDActivity();
  return undraggedIguanas.map((iguana, index) => (
    <DragSource source="sidebar" key={index} iguana={iguana} />
  ));
};

export default DragSources;

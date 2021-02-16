import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import PlainTabs from "./PlainTabs";
import DrawArea from "../DrawArea";
import PhyloTreeTemplate from "./PhyloTreeTemplate";
import { Slide12Context, Box } from "./utils";

const useStyles = makeStyles((theme) => ({}));

const IguanaSlide12 = ({ content }) => {
  const [tabIndex, setTabIndex] = useState(1);

  return (
    <>
      <PlainTabs
        tabIndex={tabIndex}
        handleChangeTab={(index) => setTabIndex(index)}
      />

      {tabIndex === 0 ? <DrawArea /> : <PhyloTreeTemplate content={content} />}
    </>
  );
};

export default IguanaSlide12;

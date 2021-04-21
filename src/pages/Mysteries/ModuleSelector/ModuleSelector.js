import React from "react";
import VolcanoSlides from "../../../components/VolcanoSlides/VolcanoSlides";
import IguanaSlides from "../../../components/IguanaSlides";

export default function ModuleSelector(props) {
  if (props.module == "volcano") return <VolcanoSlides data={props.content} />;
  else if (props.module == "iguana")
    return <IguanaSlides content={props.content} />;
}

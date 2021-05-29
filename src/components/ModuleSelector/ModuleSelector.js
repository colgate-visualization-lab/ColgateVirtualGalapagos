import React from "react";
import VolcanoSlides from "pages/Mysteries/Volcano/VolcanoSlides";
import IguanaSlides from "pages/Mysteries/Iguana/IguanaSlides";

export default function ModuleSelector(props) {
  if (props.module == "volcano")
    return (
      <VolcanoSlides data={props.content} changeSlide={props.changeSlide} />
    );
  else if (props.module == "iguana") {
    return <IguanaSlides content={props.content} />;
  }
}

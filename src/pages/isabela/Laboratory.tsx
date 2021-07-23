import React, { useState } from "react";
import { useHistory } from "react-router";
import Page from "../../atomic-design/templates/Page";
import useCanvas from "../../test/useCanvas";
import { drawCanvasBackgroundImage } from "../../utils";
import { AnimationVideo } from "../../atomic-design/atoms";

const backgroundImage = new window.Image();
backgroundImage.src = "/images/Isabela_lab.jpg";

export default function Volcano() {
  const history = useHistory();

  const backgroundRef = useCanvas(
    (ctx: CanvasRenderingContext2D) =>
      drawCanvasBackgroundImage(ctx, backgroundImage),
    { isFullScreen: true }
  );
  return (
    <Page transition="animate-fade-in" color="bg-primary">
      <canvas
        ref={backgroundRef}
        className="h-full w-full fixed left-0 top-0"
      />
      <div className="bg-white fixed left-20 top-16 w-1/2 h-1/2" >
        {/* <iframe className="absolute inset-0 w-full h-full" src="https://drive.google.com/file/d/11Zlp-LyNF4tbe4d9uXF56FL6pj_oe2xl/preview" allow="autoplay"></iframe> */}
        <AnimationVideo
        // autoPlay
        src="https://virtualgalapagos.colgate.edu/assets/VolcanoModule/VolcanoModuleIntro.mp4"
        type="video/mp4"
        controls
        // onEnded={() => history.push("/menu")}
      />
      </div>
    </Page>
  );
}

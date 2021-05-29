import React from "react";
import AnimationVideo from "../atomic-design/atoms/AnimationVideo";
import Page from "../atomic-design/templates/Page";

export default function Home() {
  return (
    <Page color="black">
      <AnimationVideo
        autoPlay
        loop
        muted
        src="https://virtualgalapagos.colgate.edu/assets/misc/splashvideo.mp4"
        type="video/mp4"
      />
    </Page>
  );
}

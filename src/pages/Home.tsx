import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import AnimationVideo from "../atomic-design/atoms/AnimationVideo/AnimationVideo";
import Page from "../atomic-design/templates/Page";
import Loading from "./Loading";

export default function Home() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.replace("/menu");
    }, 4000);
  }, []);

  return (
    <Page transition="none" color="bg-black">
      {/* <AnimationVideo
        playbackRate={5}
        autoPlay
        muted
        src="https://virtualgalapagos.colgate.edu/assets/misc/splashvideo.mp4"
        type="video/mp4"
        onEnded={() => history.push("/menu")}
      /> */}
      <Loading />
    </Page>
  );
}

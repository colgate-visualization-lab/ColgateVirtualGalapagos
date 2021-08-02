import React from "react";
import { useHistory } from "react-router";
import AnimationVideo from "../atomic-design/atoms/AnimationVideo/AnimationVideo";
import Page from "../atomic-design/templates/Page";

export default function Home() {
  const history = useHistory();
  return (
    <Page transition="none" color="bg-black">
      <AnimationVideo
        playbackRate={3}
        autoPlay
        muted
        src="/videos/intro.mp4"
        type="video/mp4"
        onEnded={() => history.push("/menu")}
      />
    </Page>
  );
}

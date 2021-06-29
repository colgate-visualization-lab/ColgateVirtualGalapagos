import React from "react";
import Page from "../atomic-design/templates/Page";
import Compass from "../atomic-design/atoms/Compass/Compass";

export default function Loading() {
  return (
    <Page>
      <div className="w-40 h-40">
        <Compass />
      </div>
    </Page>
  );
}

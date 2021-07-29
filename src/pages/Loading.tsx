import React from "react";
import Page from "../atomic-design/templates/Page";
import Compass from "../atomic-design/atoms/Compass/Compass";

export default function Loading() {
  return (
    <div className="fixed inset-0 w-screen h-screen z-50 bg-primary flex items-center justify-center">
      <div className="w-40 h-40">
        <Compass />
      </div>
    </div>
  );
}

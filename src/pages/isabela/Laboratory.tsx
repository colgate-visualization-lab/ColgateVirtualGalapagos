import React, { useState } from "react";
import { AnimationVideo } from "../../atomic-design/atoms";
import Lab from "../../atomic-design/templates/Lab";

export default function Volcano() {
  
  return (
      <Lab><div className="bg-white fixed left-20 top-16 w-1/2 h-1/2" >
        <AnimationVideo
          src="https://virtualgalapagos.colgate.edu/assets/VolcanoModule/VolcanoModuleIntro.mp4"
          type="video/mp4"
          controls
        />
        </div>
      </Lab>    
  );
}

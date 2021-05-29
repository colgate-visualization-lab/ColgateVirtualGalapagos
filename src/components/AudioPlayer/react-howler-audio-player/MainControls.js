import React from "react";
import IconButton from "@material-ui/core/IconButton";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import Forward5Icon from "@material-ui/icons/Forward5";
import Replay5Icon from "@material-ui/icons/Replay5";

const MainControls = ({ playing, handleToggle, handleSeekFive }) => {
  return (
    <>
      {/* <div>
        <IconButton onClick={() => handleSeekFive(-5)} color="primary">
          <Replay5Icon />
        </IconButton> 
      </div> */}
      <div>
        <IconButton color="primary" onClick={handleToggle}>
          {playing ? <PauseCircleOutlineIcon /> : <PlayCircleOutlineIcon />}
        </IconButton>
      </div>
      {/* <div>
        <IconButton onClick={() => handleSeekFive(5)} color="primary">
          <Forward5Icon />
        </IconButton>
      </div> */}
    </>
  );
};

export default MainControls;

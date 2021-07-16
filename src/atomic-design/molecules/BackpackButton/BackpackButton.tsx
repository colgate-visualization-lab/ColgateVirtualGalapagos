import React, { useState } from "react";
import Backpack from "../../atoms/Backpack/Backpack";

function BackpackButton() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Backpack open={open} setOpen={setOpen} />
      <img src="./images/backpack.png" />
    </div>
  );
}

BackpackButton.defaultProps = {
  onClick: () => {},
};

export default BackpackButton;

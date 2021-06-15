import React, { useState } from "react";
import { StaticAnimal } from "../../atoms";
import Button, { ButtonProps } from "../../atoms/Button/Button";

const LavaButton = (props: ButtonProps) => {
  const [hoverClasses, setHoverClasses] = useState("");
  return (
    <div className="relative">
      <Button
        {...props}
        size="lg"
        onMouseEnter={() => setHoverClasses("translate-x-1")}
        onMouseLeave={() => setHoverClasses("")}
      />
      <StaticAnimal
        species="lava lizard"
        className={
          "absolute top-0 z-30 -left-6 h-auto transition-normal transform -translate-y-14 xl:-translate-y-10 w-40 " +
          hoverClasses
        }
      />
    </div>
  );
};

LavaButton.defaultProps = {
  onClick: () => {},
};

export default LavaButton;

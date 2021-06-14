import React, { useState } from "react";
import { StaticAnimal } from "../../atoms";
import Button, { ButtonProps } from "../../atoms/Button/Button";

const PenguinButton = (props: ButtonProps) => {
  const [hoverClasses, setHoverClasses] = useState("");
  return (
    <div className="relative">
      <Button
        {...props}
        size="lg"
        onMouseEnter={() => setHoverClasses("rotate-3")}
        onMouseLeave={() => setHoverClasses("")}
      />
      <StaticAnimal
        species="penguin"
        className={
          "absolute top-0 -right-8 h-auto transition-normal transform -translate-y-16 w-32 " +
          hoverClasses
        }
      />
    </div>
  );
};

PenguinButton.defaultProps = {
  onClick: () => {},
};

export default PenguinButton;

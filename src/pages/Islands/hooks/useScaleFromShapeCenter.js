import { useState, useEffect } from "react";

const useScaleFromShapeCenter = (ref, scaleFactor, type = "CSS") => {
  const [scale, setScale] = useState("");

  useEffect(() => {
    if (ref.current) {
      setScale(getOnHoverTransform());
    }
  }, [ref]);

  const getCenterCoords = (bBox) => ({
    cx: bBox.x + bBox.width / 2,
    cy: bBox.y + bBox.height / 2,
  });

  const getOnHoverTransform = () => {
    if (ref.current === undefined) return "";
    const bBox = ref.current.getBBox();
    const { cx, cy } = getCenterCoords(bBox);

    const transform =
      type === "CSS"
        ? `translate(${cx}px, ${cy}px) scale(${scaleFactor}) translate(${-cx}px, ${-cy}px)`
        : `translate(${cx}, ${cy}) scale(${scaleFactor}) translate(${-cx}, ${-cy})`;

    return transform;
  };

  return scale;
};

export default useScaleFromShapeCenter;

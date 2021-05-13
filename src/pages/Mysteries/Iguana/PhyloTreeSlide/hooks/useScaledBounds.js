import { useEffect, useState, useRef } from "react";

import useWindowResize from "./useWindowResize";

const useScaledBounds = (originalBounds, imageDimensions) => {
  const imageRef = useRef();
  const windowDimensions = useWindowResize();
  const [scaledBounds, setScaledBounds] = useState(originalBounds);

  useEffect(() => {
    const { width } = imageRef.current.getBoundingClientRect();
    const ratio = width / imageDimensions.width;
    const newBounds = originalBounds.map((bound) => ({
      width: bound.width * ratio,
      height: bound.height * ratio,
      top: bound.top * ratio,
      left: bound.left * ratio,
    }));
    setScaledBounds(newBounds);
  }, [imageDimensions.width, imageRef, originalBounds, windowDimensions]);

  return [imageRef, scaledBounds];
};

export default useScaledBounds;

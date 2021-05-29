import { useState, useEffect } from "react";

const useWindowResize = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const resizeWindow = () => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeigth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", resizeWindow);
    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  }, []);

  return windowDimensions;
};

export default useWindowResize;

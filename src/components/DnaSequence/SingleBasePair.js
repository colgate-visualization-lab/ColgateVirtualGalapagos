import React, { useContext } from "react";
import { OnBaseClickContext } from "../../containers/IguanaSlide17";

const SingeBasePair = ({ topBase, bottomBase, classes, geneIndex }) => {
  const { handleOnBaseClick } = useContext(OnBaseClickContext);
  return (
    <g
      className={classes.basePair}
      //   style={{ opacity: 0.6 }}
      onClick={() => {
        handleOnBaseClick(geneIndex);
      }}
    >
      {/* Top Base */}
      <rect
        // onClick={() => {
        //   handleOnBaseClick(geneIndex);
        // }}
        className={classes["base" + topBase.fillClass]}
        x={topBase.x}
        y={topBase.y}
        width={topBase.width}
        height={topBase.height}
      />

      {/* Bottom Base */}
      <rect
        // onClick={() => {
        //   handleOnBaseClick(geneIndex);
        // }}
        className={classes["base" + bottomBase.fillClass]}
        x={bottomBase.x}
        y={bottomBase.y}
        width={bottomBase.width}
        height={bottomBase.height}
      />
    </g>
  );
};

export default SingeBasePair;

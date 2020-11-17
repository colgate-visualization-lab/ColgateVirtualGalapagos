import React from "react";

const DnaMock = ({ onClick }) => {
  return (
    <>
      <button
        onClick={() => {
          onClick("scaleColorGene");
        }}
      >
        Scale Color Gene
      </button>
      <button
        onClick={() => {
          onClick("tailShapeGene");
        }}
      >
        Tail Shape Gene
      </button>
      <button
        onClick={() => {
          onClick("saltSpoutGene");
        }}
      >
        Salt Spout Gene
      </button>
      <button
        onClick={() => {
          onClick("faceShapeGene");
        }}
      >
        Face Shape Gene
      </button>
      <button
        onClick={() => {
          onClick("backSpikesGene");
        }}
      >
        Back Spikes Gene
      </button>
    </>
  );
};

export default DnaMock;

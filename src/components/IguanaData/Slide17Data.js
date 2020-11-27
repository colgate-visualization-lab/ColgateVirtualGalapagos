const BASE = {
  ADENINE: { name: "adenine", color: 1, complement: 2 },
  THYMINE: { name: "thymine", color: 2, complement: 1 },
  GUANINE: { name: "guanine", color: 3, complement: 4 },
  CYTOSINE: { name: "cytosine", color: 4, complement: 3 },
};

export const mutationPositions = {
  3: "scaleColorGene",
  5: "tailShapeGene",
  15: "saltSpoutGene",
  18: "faceShapeGene",
  28: "backSpikesGene",
};

// specify only top half of the base pair, in groups of 5
//prettier-ignore
export const greenIguanaSequence = [
    BASE.ADENINE, BASE.THYMINE, BASE.GUANINE, BASE.ADENINE, BASE.CYTOSINE,
    BASE.CYTOSINE, BASE.CYTOSINE, BASE.GUANINE, BASE.ADENINE, BASE.GUANINE,
    BASE.ADENINE, BASE.THYMINE, BASE.GUANINE, BASE.ADENINE, BASE.CYTOSINE,
    BASE.ADENINE, BASE.THYMINE, BASE.GUANINE, BASE.ADENINE, BASE.CYTOSINE,
    BASE.ADENINE, BASE.THYMINE, BASE.GUANINE, BASE.ADENINE, BASE.CYTOSINE,
    BASE.ADENINE, BASE.THYMINE, BASE.GUANINE, BASE.ADENINE, BASE.CYTOSINE,
  ];

//prettier-ignore
export const marineIguanaSequence = [
    BASE.ADENINE, BASE.THYMINE, BASE.GUANINE, BASE.THYMINE, BASE.CYTOSINE,
    BASE.ADENINE, BASE.CYTOSINE, BASE.GUANINE, BASE.ADENINE, BASE.GUANINE,
    BASE.ADENINE, BASE.THYMINE, BASE.GUANINE, BASE.ADENINE, BASE.CYTOSINE,
    BASE.GUANINE, BASE.THYMINE, BASE.GUANINE, BASE.THYMINE, BASE.CYTOSINE,
    BASE.ADENINE, BASE.THYMINE, BASE.GUANINE, BASE.ADENINE, BASE.CYTOSINE,
    BASE.ADENINE, BASE.THYMINE, BASE.GUANINE, BASE.CYTOSINE, BASE.CYTOSINE,
    ];

export const mutationDetails = {
  scaleColorGene: {
    id: "scaleColorGene",
    name: "Scale Color Gene",
    description:
      "Marine iguanas have black scales, while green iguanas have bright green scales",
  },
  tailShapeGene: {
    id: "tailShapeGene",
    name: "Tail Shape Gene",
    description:
      "Marine iguanas have flatter tails than green iguanas, which helps them swim more efficiently",
  },
  saltSpoutGene: {
    id: "saltSpoutGene",
    name: "Salt Spout Gene",
    description:
      "Marine iguanas have a salt spout on their head to get rid of excess salt that has accumulated in their bodies after swimming in the ocean",
  },
  faceShapeGene: {
    id: "faceShapeGene",
    name: "Face Shape Gene",
    description:
      "Marine iguanas have flatter faces than green iguanas, which allows them to scrape algae and vegetation off of rocks",
  },
  backSpikesGene: {
    id: "backSpikesGene",
    name: "Back Spikes Gene",
    description:
      "The marine iguanas have back spikes which shrink or grow in proportion to how much food is available. This helps them conserve energy when food is scarce",
  },
};

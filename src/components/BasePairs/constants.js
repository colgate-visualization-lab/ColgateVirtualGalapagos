export const BASE = {
  ADENINE: { name: "adenine", color: "#601A4A", complement: "#EE442F" },
  THYMINE: { name: "thymine", color: "#EE442F", complement: "#601A4A" },
  GUANINE: { name: "guanine", color: "#63ACBE", complement: "#F9F4EC" },
  CYTOSINE: { name: "cytosine", color: "#F9F4EC", complement: "#63ACBE" },
};

// specify only top half of the base pair, in groups of 5
export const BASE_PAIRS = [
  [BASE.ADENINE, BASE.THYMINE, BASE.GUANINE, BASE.ADENINE, BASE.CYTOSINE],
  [BASE.ADENINE, BASE.THYMINE, BASE.GUANINE, BASE.ADENINE, BASE.CYTOSINE],
  [BASE.ADENINE, BASE.THYMINE, BASE.GUANINE, BASE.ADENINE, BASE.CYTOSINE],
  [BASE.ADENINE, BASE.THYMINE, BASE.GUANINE, BASE.ADENINE, BASE.CYTOSINE],
  [BASE.ADENINE, BASE.THYMINE, BASE.GUANINE, BASE.ADENINE, BASE.CYTOSINE],
  [BASE.ADENINE, BASE.THYMINE, BASE.GUANINE, BASE.ADENINE, BASE.CYTOSINE],
];

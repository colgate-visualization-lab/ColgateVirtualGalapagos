export const unpackElementDetails = (element) => {
  return {
    x1: element.get("x1"),
    y1: element.get("y1"),
    x2: element.get("x2"),
    y2: element.get("y2"),
    type: element.get("type"),
    selected: element.get("selected"),
    focused: element.get("focused"),
    position: element.get("position"),
    options: element.get("options"),
  };
};

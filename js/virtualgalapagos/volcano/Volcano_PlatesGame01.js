var ddDict = {
  "convergent1": ["img_convergent1", "img_convergent2"],
  "convergent2": ["img_convergent1", "img_convergent2"],
  "divergent1": ["img_divergent1"],
  "transform1": ["img_transform1"],
};


dragdrop = new DragDrop(ddDict);
dragdrop.initDrops();
dragdrop.initDrags();
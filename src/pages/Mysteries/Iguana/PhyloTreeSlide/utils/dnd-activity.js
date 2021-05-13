import produce from "immer";

export const updateStateProps = produce((draft, newStyle) => {
  for (const prop in newStyle) {
    draft[prop] = newStyle[prop];
  }
});

export const getNewDraggedIguanas = produce(
  (draft, id, newIguanaName, source) => {
    if (source !== "sidebar") {
      const sourceIndex = draft.findIndex((item) => item.id === source);
      draft[sourceIndex].currentIguana = null;
    }

    const destinationIndex = draft.findIndex((item) => item.id === id);
    draft[destinationIndex].currentIguana = newIguanaName;
  }
);

export const getNewUndraggedIguanas = (
  undraggedIguanas,
  previousItem,
  droppedItem
) => {
  let newUndragged = [...undraggedIguanas];

  if (previousItem) {
    newUndragged.push(previousItem);
  }

  newUndragged = newUndragged.filter((iguana) => iguana !== droppedItem);
  return newUndragged;
};

export const getCompletedTree = produce((draft) => {
  const placedIguanas = [];
  draft.forEach((iguanaDetails, index) => {
    const { currentIguana, validIguanas } = iguanaDetails;
    if (!validIguanas.includes(currentIguana)) {
      const unplacedIguanaIndex = validIguanas.findIndex(
        (iguana) => !placedIguanas.includes(iguana)
      );
      draft[index].currentIguana = validIguanas[unplacedIguanaIndex];
      placedIguanas.push(validIguanas[unplacedIguanaIndex]);
    } else {
      placedIguanas.push(currentIguana);
    }
  });
});

export const getTreeCorrectnessMarkers = (draggedIguanas) => {
  const alreadyFoundIguanas = [];
  const correctnessMarkers = [];
  draggedIguanas.forEach((iguana) => {
    const { currentIguana, validIguanas } = iguana;
    if (
      validIguanas.includes(currentIguana) &&
      !alreadyFoundIguanas.includes(currentIguana)
    ) {
      correctnessMarkers.push(true);
    } else {
      correctnessMarkers.push(false);
    }
  });

  return correctnessMarkers;
};

export const noop = () => {};

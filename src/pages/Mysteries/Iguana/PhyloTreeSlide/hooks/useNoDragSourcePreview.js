import { useEffect } from "react";

import { getEmptyImage } from "react-dnd-html5-backend";

const useNoDragSourcePreview = (preview) => {
  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);
};

export default useNoDragSourcePreview;

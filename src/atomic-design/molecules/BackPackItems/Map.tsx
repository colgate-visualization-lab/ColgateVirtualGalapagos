import React from "react";
import { Text } from "../../atoms";
import Islands from "../../atoms/islands/Islands";

export default function Map() {
  return (
    <div>
      <div className="mt-3">
        <Text text="Map of the Galapagos" color="text-dark" type="title" />
      </div>
      <Islands className="object-contain justify-center h-full w-full pr-4 pb-14 mb-5 border-black border-3" />
    </div>
  );
}

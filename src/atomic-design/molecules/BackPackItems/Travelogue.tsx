import React from "react";
import { Text } from "../../atoms";

export default function Travelogue() {
  return (
    <div>
      <Text
        className="m-2"
        text="Look at all your progress!"
        color="text-dark"
        type="title"
      />
      <div className="rounded-lg bg-gray-100 w-10/12 h-1/3 mt-8 ml-20"></div>

      <div className="rounded-lg bg-gray-100 w-10/12 h-1/3 mt-12 ml-20"></div>
    </div>
  );
}

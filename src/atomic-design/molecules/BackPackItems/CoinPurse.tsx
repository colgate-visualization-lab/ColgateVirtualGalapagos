import React from "react";
import { useGameContext } from "../../../contexts/GameContext";
import { Image, Text } from "../../atoms";

export default function CoinPurse() {
  const { doubloons } = useGameContext();

  return (
    <div className="mt-5">
      <Text text="Doubloon information" color="text-dark" type="title" />
      <div className="flex">
        <div className="h-1/2 w-1/2 mt-20 ml-10 bg-yellow-200 rounded border-4 border-black">
          <div className="justify-center object-middle p-2">
            <Image src="/images/safe.png" />
          </div>
          <Text
            text={`Current Doubloon Count: ${doubloons}`}
            color="text-dark"
            type="heading"
          />
        </div>
        <div className="h-20 w-20 mt-36 ml-24">
          <div className="flex">
            <Image
              className="object-contain"
              src="/images/message_in_bottle.png"
            />
            <Text
              className="ml-6 mt-20"
              text="Find bottles to earn more doubloons!"
              color="text-dark"
              type="body"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

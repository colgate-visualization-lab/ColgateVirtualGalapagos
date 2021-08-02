import React from "react";
import { useState } from "react";
import DrawingPanel from "../../../test/DrawingPanel";
import { Modal, Text } from "../../atoms";
import Button from "../../atoms/Button/Button";

export default function Fieldbook() {
  const [isDrawingPanelVisible, setDrawingPanel] = useState(false);

  return (
    <div className="bg-yellow-300 h-full rounded">
      <div className="flex-row pt-3 space-x-4">
        <button className="bg-yellow-100 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded border-2 border-black">
          Table of Contents
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-black font-bold py-2 px-4 rounded border-2 border-black">
          Volcano
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded border-2 border-black">
          Iguana
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded border-2 border-black">
          Currents
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded border-2 border-black">
          Island Life Cycle
        </button>
        <button className="bg-purple-400 hover:bg-purple-700 text-black font-bold py-2 px-4 rounded border-2 border-black">
          Eruption
        </button>

        <div className="m-3 ml-30">
          <Button
            onClick={() => setDrawingPanel((o) => !o)}
            size="lg"
            variant="wooden"
          >
            <Text text="Start Drawing" color="text-dark" />
          </Button>
          {isDrawingPanelVisible && (
            <Modal onDiscard={() => setDrawingPanel(false)}>
              <DrawingPanel />
            </Modal>
          )}
        </div>
      </div>

      <div className="flex flex-row h-full object-contain">
        <div className="bg-gray-100 rounded w-1/2 h-3/4 m-4 mb-3">
          {/* observations will be recorded on the left side */}
          <Text
            text="Write down observations here:"
            color="text-dark"
            className="border-black bg-gray-400"
          />
          <form>
            <input className="h-full w-4/5" />
          </form>
        </div>
        {/* Was thinking this right side would be a gallery of the user's drawings, but need backend */}
        <div className="bg-gray-100 rounded w-1/2 h-3/4 m-4 mb-3" />
      </div>
    </div>
  );
}

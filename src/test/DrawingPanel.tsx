import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import { Image, Text } from "../atomic-design/atoms";
import Button from "../atomic-design/atoms/Button/Button";
import Page from "../atomic-design/templates/Page";
import { BiPencil, BiEraser } from "react-icons/bi";
import { MdClear } from "react-icons/md";
import ReactTooltip from "react-tooltip";
const ToolBox = ({
  currentColor,
  setColor,
  clearCanvas,
  eraserSelected,
  setEraser,
}: {
  currentColor: string;
  setColor: Function;
  clearCanvas: MouseEventHandler<HTMLButtonElement>;
  eraserSelected: boolean;
  setEraser: Function;
}) => {
  const gridCellClasses =
    "w-10 border border-gray-500 flex justify-center items-center h-10";
  const colors = ["red", "green", "blue", "black", "purple"];
  return (
    <div role="grid" className="flex cursor-pointer flex-col">
      <Button
        data-tip="Clear Canvas"
        className={gridCellClasses}
        onClick={clearCanvas}
        variant="icon"
      >
        <MdClear className="text-xl" />
      </Button>

      <Button
        data-tip="Toggle Pencil/Eraser"
        className={gridCellClasses}
        onClick={() => setEraser(!eraserSelected)}
        variant="icon"
      >
        {eraserSelected ? (
          <BiEraser className="text-xl" />
        ) : (
          <BiPencil className="text-xl" />
        )}
      </Button>
      {colors.map((color) => (
        <button
          role="checkbox"
          aria-selected={currentColor === color}
          key={color}
          onClick={() => setColor(color)}
          style={
            currentColor === color
              ? { borderColor: "white", backgroundColor: color }
              : { backgroundColor: color }
          }
          className={
            (currentColor === color ? "border border-gray-200 " : "") +
            gridCellClasses
          }
        />
      ))}
    </div>
  );
};

export default function DrawingPanel() {
  const [strokeColor, setStrokeColor] = useState("black");
  const [previewImage, setPreviewImage] = useState("");
  const [eraserSelected, setEraser] = useState(false);

  const sketchRef = useRef<any>(null);

  useEffect(() => {
    if (sketchRef.current) {
      sketchRef.current.eraseMode(eraserSelected);
    }
  }, [eraserSelected]);

  const handleSave = async () => {
    if (sketchRef.current) {
      const image = await sketchRef.current?.exportImage("jpg");
      setPreviewImage(image);
    }
  };
  const handleClear = async () => {
    if (sketchRef.current) {
      sketchRef.current.clearCanvas();
    }
  };
  return (
    <Page>
    <div>
      <ReactTooltip />
      <div className="w-40 h-40">
        <Image src={previewImage} />
      </div>

      <div className="w-2/3 mt-5 h-1/2 flex flex-col justify-center items-center">
        <div className="flex w-full h-full items-center">
          <ReactSketchCanvas
            ref={sketchRef}
            strokeColor={strokeColor}
            className="w-full mb-5 mr-2 h-full"
            strokeWidth={3}
            eraserWidth={10}
          />
          <ToolBox
            currentColor={strokeColor}
            setColor={setStrokeColor}
            clearCanvas={handleClear}
            eraserSelected={eraserSelected}
            setEraser={setEraser}
          />
        </div>

        <Button onClick={handleSave} size="lg" variant="wooden">
          <Text text="Save Drawing" color="text-dark" />
        </Button>
      </div>
      </div>
    </Page>
  );
}

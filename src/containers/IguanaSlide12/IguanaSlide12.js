import React, { useEffect, useRef, useState } from "react";
import IguanaSlide12Buttons from "./IguanaSlide12Buttons";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DrawPhyloTree from "./DrawPhyloTree";

export default function Slide12({ content }) {
  useEffect(() => {
    console.log(imgRef.current.clientHeight, imgRef.current.clientWidth);
    setPos(getTargetBoxPos());
    console.log(pos);
  }, []);
  const [premade, setPremade] = useState(false);
  const [draw, setDraw] = useState(true);
  const [src, setSrc] = useState(content.data[0]);
  const [slide, setSlide] = useState();

  const changepremade = () => {
    setPremade(true);
    setDraw(false);
    setSrc(content.data[0]);
  };

  const changedraw = () => {
    setDraw(true);
    setPremade(false);
    setSrc(content.data[1]);
  };

  // here we calculate coordinates of the textboxes
  const imgRef = useRef(null);
  const imgSize = { height: 502, width: 1518 };
  const [pos, setPos] = useState({});

  const getImagePosition = () => {
    let el = imgRef.current;
    const imgPos = { x: 0, y: 0 };

    for (imgPos; el; el = el.offsetParent) {
      // console.log(el.offsetLeft, el.offsetTop);
      imgPos.x += el.offsetLeft;
      imgPos.y += el.offsetTop;
    }
    // console.log(imgPos);
    return imgPos;
  };

  const getTargetBoxPos = () => {
    const imgPos = getImagePosition();

    const targetPos = [
      // iguanaBoxPos
      {
        offset: true,
        top: imgRef.current.clientHeight / 1.8785,
        left: imgRef.current.clientWidth / 2.735,
      },
      // mutatedIguanaPosTop
      {
        offset: false,
        top: imgRef.current.clientHeight / 4.902,
        left: imgRef.current.clientWidth / 1.499,
      },
      // mutatedIguanaPosBottom
      {
        offset: false,
        top: imgRef.current.clientHeight / 1.248,
        left: imgRef.current.clientWidth / 1.499,
      },
    ];
    return targetPos;
  };

  const slidedata = src[slide];
  return (
    <div>
      <img
        ref={imgRef}
        src={src.imgsrc}
        style={{
          width: "100%",
          zIndex: 0,
          // paddingLeft: "100px",
          // paddingTop: "100px",
          // paddingRight: "100px",
          // paddingBottom: "100px",
          position: "absolute",
        }}
      />
      <IguanaSlide12Buttons
        changepremade={changepremade}
        changedraw={changedraw}
      />

      {draw ? (
        <DndProvider backend={HTML5Backend}>
          <DrawPhyloTree pos={pos} />
        </DndProvider>
      ) : null}
    </div>
  );
}

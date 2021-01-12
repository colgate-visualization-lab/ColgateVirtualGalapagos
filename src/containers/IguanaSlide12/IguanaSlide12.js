import React, { useEffect, useRef, useState } from "react";
import IguanaSlide12Buttons from "./IguanaSlide12Buttons";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DrawPhyloTree from "./DrawPhyloTree";

export default function Slide12({ content }) {
  const [premade, setPremade] = useState(false);
  const [draw, setDraw] = useState(false);
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

  // OVERLAYING THE TARGET TEXTBOXES
  // 1. Create a ref to pass to our image: it'll allow us to get
  //    image dimensions as well as position
  const imgRef = useRef(null);

  // 2. pos will eventually hold the dimensions of the
  //    3 target textboxes
  const [pos, setPos] = useState([]);

  // 3. Calculate initial position of the target textboxes
  useEffect(() => {
    getTargetBoxPos();
  }, []);

  // 4. Now we add an event listener to the window to make sure that
  //    the textbox positions are recalculated if the window resizes
  useEffect(() => {
    window.addEventListener("resize", getTargetBoxPos);
    return () => {
      window.removeEventListener("resize", getTargetBoxPos);
    };
  }, [window.innerWidth]);

  // 5. We calculate the target textbox positions.
  //    Basically I'm dividing the image height and width with
  //    those ratios specified.
  // 6. Got those ratios by dividing the original image height and width
  //    by the (x, y) coordinates of where I'd place those textboxes on the original image
  const getTargetBoxPos = () => {
    const targetPos = [
      // greenIguanaBoxPos
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
    setPos(targetPos);
  };

  // 7. This gets the image x and y coordinates on screen - basically (0,0) plus
  //     whatever other offset there is - like margins or other elements above the image, etc
  //    Placing the textboxes and the image inside the same div eliminates
  //    the need for this(probably)
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

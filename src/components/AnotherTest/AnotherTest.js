import React, {useState} from 'react'
import classes from "./AnotherTest.css"
import DndDragTest from "../DndDragTest/DndDragTest.js"
import DndDropTest from "../DndDropTest/DndDropTest.js"
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

export default function AnotherTest() {

      //Drag and drop State.
      const [dragIndex, setDragIndex] = useState(0)
      const [canDrag, setCanDrag] = useState(true)
      const [drop1, setDrop1] = useState(false); const [drop2, setDrop2] = useState(false)
      const [drop3, setDrop3] = useState(false); const [drop4, setDrop4] = useState(false);
      const [drop5, setDrop5] = useState(false); const [drop6, setDrop6] = useState(false);

    return (
    <DndProvider backend={HTML5Backend}>
        <div className={classes.wordBank}>
            <DndDragTest className={drop1? classes.invisible : classes.drag} onDrag={() => {setDragIndex(1); console.log("fuck this")}} canDrag={canDrag}>1.7 Million Years</DndDragTest>
            <DndDragTest className={drop2? classes.invisible : classes.drag} onDrag={() => setDragIndex(2)} canDrag={canDrag}>2.3 Million Years</DndDragTest>
            <DndDragTest className={drop3? classes.invisible : classes.drag} onDrag={() => setDragIndex(3)} canDrag={canDrag}>4 Million Years</DndDragTest>
            <DndDragTest className={drop4? classes.invisible : classes.drag} onDrag={() => setDragIndex(4)} canDrag={canDrag}>3.3 Million Years</DndDragTest>
            <DndDragTest className={drop5? classes.invisible : classes.drag} onDrag={() => setDragIndex(5)} canDrag={canDrag}>700,000 Years</DndDragTest>
            <DndDragTest className={drop6? classes.invisible : classes.drag} onDrag={() => setDragIndex(5)} canDrag={canDrag}>700,000 Years</DndDragTest>
        </div>
        <DndDropTest className={drop1? classes.invisible : classes.drop1} dragIndex={dragIndex} dropIndex={1} correctDrop={() => setDrop1(true)}>1.7 Million Years</DndDropTest>
        <DndDropTest className={drop2? classes.invisible : classes.drop2} dragIndex={dragIndex} dropIndex={2} correctDrop={() => setDrop2(true)}>2.3 Million Years</DndDropTest>
        <DndDropTest className={drop3? classes.invisible : classes.drop3} dragIndex={dragIndex} dropIndex={3} correctDrop={() => setDrop3(true)}>4 Million Years</DndDropTest>
        <DndDropTest className={drop4? classes.invisible : classes.drop4} dragIndex={dragIndex} dropIndex={4} correctDrop={() => setDrop4(true)}>3.3 Million Years</DndDropTest>
        <DndDropTest className={drop5? classes.invisible : classes.drop5} dragIndex={dragIndex} dropIndex={5} correctDrop={() => setDrop5(true)}>700,000 Years</DndDropTest>
        <DndDropTest className={drop6? classes.invisible : classes.drop6} dragIndex={dragIndex} dropIndex={5} correctDrop={() => setDrop6(true)}>700,000 Years</DndDropTest>
</DndProvider>
    )
}

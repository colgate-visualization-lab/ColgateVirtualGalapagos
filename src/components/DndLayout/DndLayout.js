import React, {useState, useEffect} from 'react'
import classes from "./DndLayout.css"
import DndDragTest from "../DndDragTest/DndDragTest.js"
import DndDropTest from "../DndDropTest/DndDropTest.js"
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

export default function DndLayout(props) {

    //Drag and drop State.
    const [dragIndex, setDragIndex] = useState(0)
    const [canDrag, setCanDrag] = useState(true)
    const [drop1, setDrop1] = useState(false); const [drop2, setDrop2] = useState(false)
    const [drop3, setDrop3] = useState(false); const [drop4, setDrop4] = useState(false);
    const [drop5, setDrop5] = useState(false); const [drop6, setDrop6] = useState(false);

   //Methods
   const handleDrop = (drop) => {
        if ( drop1 && drop2 && drop3 && drop4 && drop5 ||
             drop1 && drop2 && drop3 && drop4 && drop6 ||
             drop1 && drop2 && drop3 && drop4 && drop6 || 
             drop1 && drop2 && drop4 && drop5 && drop6 || 
             drop1 && drop3 && drop4 && drop5 && drop6 ||
             drop2 && drop3 && drop4 && drop5 && drop6) {
             } 
        () => drop
   } 

    if (props.volcano10 == true) {
        return (
        <DndProvider backend={HTML5Backend}>
            <div className={classes.wordBankHeader}>Wordbank</div>
            <div className={classes.wordBank}>
                <DndDragTest className={classes.drag} onDrag={() => setDragIndex(1)} canDrag={canDrag} dropped={drop1}>1.7 Million Years</DndDragTest>
                <DndDragTest className={classes.drag} onDrag={() => setDragIndex(2)} canDrag={canDrag} dropped={drop2}>2.3 Million Years</DndDragTest>
                <DndDragTest className={classes.drag} onDrag={() => setDragIndex(3)} canDrag={canDrag} dropped={drop3}>4 Million Years  </DndDragTest>
                <DndDragTest className={classes.drag} onDrag={() => setDragIndex(4)} canDrag={canDrag} dropped={drop4}>3.3 Million Years</DndDragTest>
                <DndDragTest className={classes.drag} onDrag={() => setDragIndex(5)} canDrag={canDrag} dropped={drop5}>700,000 Years    </DndDragTest>
                <DndDragTest className={classes.drag} onDrag={() => setDragIndex(5)} canDrag={canDrag} dropped={drop6}>700,000 Years    </DndDragTest>
            </div>
            <DndDropTest className={drop1? `${classes.drop} ${classes.dropCorrect} ${classes.drop1}` : `${classes.drop} ${classes.drop1}`} dragIndex={dragIndex} dropIndex={1} correctDrop={() => handleDrop(setDrop1(true))} text={drop1? "1.7 Million Years" : "Drop Location"} />
            <DndDropTest className={drop2? `${classes.drop} ${classes.dropCorrect} ${classes.drop2}` : `${classes.drop} ${classes.drop2}`} dragIndex={dragIndex} dropIndex={2} correctDrop={() => handleDrop(setDrop2(true))} text={drop2? "2.3 Million Years" : "Drop Location"} />
            <DndDropTest className={drop3? `${classes.drop} ${classes.dropCorrect} ${classes.drop3}` : `${classes.drop} ${classes.drop3}`} dragIndex={dragIndex} dropIndex={3} correctDrop={() => handleDrop(setDrop3(true))} text={drop3? "4 Million Years"   : "Drop Location"} />
            <DndDropTest className={drop4? `${classes.drop} ${classes.dropCorrect} ${classes.drop4}` : `${classes.drop} ${classes.drop4}`} dragIndex={dragIndex} dropIndex={4} correctDrop={() => handleDrop(setDrop4(true))} text={drop4? "3.3 Million Years" : "Drop Location"} />
            <DndDropTest className={drop5? `${classes.drop} ${classes.dropCorrect} ${classes.drop5}` : `${classes.drop} ${classes.drop5}`} dragIndex={dragIndex} dropIndex={5} correctDrop={() => handleDrop(setDrop5(true))} text={drop5? "700,00 Years"      : "Drop Location"} />
            <DndDropTest className={drop6? `${classes.drop} ${classes.dropCorrect} ${classes.drop6}` : `${classes.drop} ${classes.drop6}`} dragIndex={dragIndex} dropIndex={5} correctDrop={() => handleDrop(setDrop6(true))} text={drop6? "700,00 Years"      : "Drop Location"} />
        </DndProvider>
        )
    }
}

import React, { useEffect, useRef, useState } from "react"
import IguanaSlide12Buttons from "./IguanaSlide12Buttons"
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DrawPhyloTree from "./DrawPhyloTree"

export default function Slide12 ({content}){
    useEffect(()=>{console.log()})
    const [premade, setPremade] = useState(false);
    const [draw, setDraw] = useState(false);
    const [src, setSrc] = useState(content.data[0]);
    const [slide, setSlide] = useState();
    const changepremade = () => {
        setPremade(true);
        setDraw(false);
        setSrc(content.data[0]);
    }
    const changedraw = () => {
        setDraw(true);
        setPremade(false);
        setSrc(content.data[1]);
    }
    const slidedata = src[slide];
    return (
        <div>
            <img src={src.imgsrc}
            style={{width:"100%", paddingLeft: "100px", paddingTop: "100px",paddingRight: "100px",paddingBottom: "100px", position: "absolute"}}/>
        <IguanaSlide12Buttons
        changepremade={changepremade}
        changedraw={changedraw}
        />
        
        {draw?(
            <DndProvider backend={HTML5Backend}><DrawPhyloTree /></DndProvider>
        ):null}
        
        </div>
        
    )
    
    
}
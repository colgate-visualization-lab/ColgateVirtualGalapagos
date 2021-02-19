import React, {Fragment, useState} from 'react'
import {Link} from "react-router-dom"
import classes from "./VolcanoSlides.css"
import Popup from "reactjs-popup";
import ImageSlider from "react-image-comparison-slider";
import DndDragTest from "../DndDragTest/DndDragTest.js"
import DndDropTest from "../DndDragTest/DndDragTest.js"
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import {
    introVideo, summaryVolcano, plateTectonics, mantlePlumes, Back, Next, TerrainMap, 
    magnifyingGlass, Ferd, santaCruz, VolcanoCompare, tectonicPlatesMap, convergent, 
    convergent2, convergent2fix, divergent, transform, seaMounts, eruptionDates, TerrainOval, 
    TerrainOvalCorrect, TerrainOvalWrong, XImage, DnDAnswers, DnD, terrainMap2, volcanoSlider1, 
    eruptionAudio, volcanoCompare360, terrainMap3, fernandina1, santaCruz1, terrainMap4, 
    terrainMapAges1, terrainMapAges2, otherVolcanoes1, tectonicPlates1, platesGame1, 
    tectonicPlates2, southAmerica1, terrainMap6, plumePlacement1, plumeYes1, plumeNo1, 
    whereNext1, Exploration01, Exploration02, Exploration03, Exploration04, Exploration05,
    Vista, Vista2, Vista3, Vista4, Vista5,
  } from "../../assets/VolcanoModule";
import IframeCompoment from "../../components/IframeComponent/IframeComponent"

export default function VolcanoSlides(props) {

    const [dragIndex, setDragIndex] = useState(0)
    const [canDrag, setCanDrag] = useState(true)
    const [drop1, setDrop1] = useState(true); const [drop2, setDrop2] = useState(false)
    const [drop3, setDrop3] = useState(false); const [drop4, setDrop4] = useState(false);
    const [drop5, setDrop5] = useState(false); const [drop6, setDrop6] = useState(false);

    const popup = {margin: "auto", padding: "20px", background: "rgba(0, 0, 0, 0.762)", borderRadius: "5px", zIndex: "2", width: "auto", position: "absolute"}

    if (props.id == 0) {
        return (
                <video className={classes.center} src={introVideo} autoPlay muted controls controlsList="nodownload" type="video/mp4"/> 
        )
    }
    else if (props.id == 1) {
        return (
            <IframeCompoment class={classes.vista} src={Vista}/>
        )
    }
    else if (props.id == 2) {
        return (
            <IframeCompoment class={classes.vista} src={Vista2}/>
        )
    }
    else if (props.id == 3) {
        return (
            <IframeCompoment class={classes.vista} src={Vista3}/>
        )
    }
    else if (props.id == 4) {
        return (
            <IframeCompoment class={classes.vista} src={Vista4}/>
        )
    }
    else if (props.id == 5) {
        return (
            <IframeCompoment class={classes.vista} src={Vista5}/>
        )
    }
    else if (props.id == 6) {
        return (
            <Fragment>
                <img className={classes.center} src={TerrainMap}/>
                <Link to="./6optional">
                    <img className={classes.magnifying} src={magnifyingGlass}/>
                </Link>
            </Fragment>
        )
    }
    else if (props.id == "6optional") {
        return (
            <div className={classes.sliderDiv}>
                <ImageSlider image1={santaCruz} image2={Ferd} leftLabelText="Fernandina" rightLabelText="Santa Cruz"/>
            </div>
        )
    }
    else if (props.id == 7) {
        return (
            <Fragment>
                <IframeCompoment class={classes.leftVista} src={Vista} />
                <IframeCompoment class={classes.rightVista} src={Vista4} />
            </Fragment>
        )
    }
    else if (props.id == 8) {
        return (
            <Fragment>
                <img className={classes.center} src={TerrainMap}/>
                <Link to="./8optional1">
                    <img className={classes.magnifying} src={magnifyingGlass}/>
                </Link>
            </Fragment>
        )
    }
    else if (props.id == "8optional1") {
        return (
            <Fragment>
                <img className={classes.center} src={Ferd}/>
                <Popup trigger={<button className={`${classes.dot} ${classes.dot4}`}></button>} 
                contentStyle={popup} arrow={false} position="right center">
                    <div>
                        The sides of a volcano are called the flanks of the volcano. Lava erupts from the volcano and hardens into black basalt.
                    </div>
                </Popup>
                <Popup trigger={<button className={`${classes.dot} ${classes.dot5}`}></button>}
                contentStyle={popup} arrow={false} position="right center">
                    <div>
                        Fernandina's caldera is in the middle of the island. This formed when the ground above the magma chamber collapsed after an eruption.
                    </div>
                </Popup>
                <Popup trigger={<button className={`${classes.dot} ${classes.dot6}`}></button>}
                contentStyle={popup} arrow={false} position="right center">
                    <div>
                        There is very little vegetation on the island as plants have not had time to develop after the eruptions.
                    </div>
                </Popup>
                <Link to="./8optional2">
                    <button className={classes.magnifying}>Click my plssss</button>
                </Link>
            </Fragment>
        )
    }
    else if (props.id == "8optional2") {
        return (
            <Fragment>
                <img className={classes.center} src={santaCruz}/>
                    <Popup trigger={<button className={`${classes.dot} ${classes.dot7}`}></button>}
                    contentStyle={popup} arrow={false} position="right center">
                        <div>
                            When basalt has been exposed to the elements for a long time it becomes oxidized and turns red.
                        </div>
                    </Popup>
                    <Popup trigger={<button className={`${classes.dot} ${classes.dot8}`}></button>}
                    contentStyle={popup} arrow={false} position="right center">
                        <div>
                            Since there has not been an eruption in recent history, plants have been able to develop and grow to cover most of the island.
                        </div>
                    </Popup>
                    <Popup trigger={<button className={`${classes.dot} ${classes.dot9}`}></button>}
                    contentStyle={popup}arrow={false} position="right center">
                        <div>
                            Humans have been able to move into the island and develop communities. Farming and developments take up most of the southern part of the island.
                        </div>
                    </Popup>
            </Fragment>
        )
    }
    else if (props.id == 9) {
        return (
            <Fragment>
                <button className={classes.magnifying}>What's a hypothesis?</button>
                <img className={classes.center} src={TerrainMap}/>
            </Fragment>
        )
    }
    else if (props.id == 10) {
        return (
            <DndProvider backend={HTML5Backend}>
                <div className={classes.wordBank}>
                    <DndDragTest className={drop1? classes.invisible : classes.drag} onDrag={() => setDragIndex(1)} canDrag={canDrag}>1.7 Million Years</DndDragTest>
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
            <img className={classes.center} src={TerrainMap}/>
        </DndProvider>
        )
    }
}

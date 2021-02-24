import React, {Fragment, useState, useRef} from 'react'
import {Link} from "react-router-dom"
import classes from "./VolcanoSlides.css"
import Popup from "reactjs-popup";
import ImageSlider from "react-image-comparison-slider";
import DndLayout from "../../components/DndLayout/DndLayout.js"
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
import { CSSTransition } from 'react-transition-group';
import './VolcanoSlides.css';

export default function VolcanoSlides(props) {

    //State
    const [test, setTest] = useState(false)

    //Refs

    //Styles
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
            <div className={classes.imgContainer}>
                <img className={classes.imgFill} src={TerrainMap}/>
                <img className={classes.magnifying} onClick={() => props.setSlideChange("./6optional")} src={magnifyingGlass}/>
            </div>
        )
    }
    else if (props.id == "6optional") {
        return ( //Width of this needs to get fixed eventually
            <div className={classes.sliderDiv}>
                <ImageSlider image1={santaCruz} image2={Ferd} leftLabelText="Fernandina"/>
            </div>
        )
    }
    else if (props.id == 7) {
        return (
            <div>
                <IframeCompoment class={classes.leftVista} src={Vista} />
                <IframeCompoment class={classes.rightVista} src={Vista4} />
            </div>
        )
    }
    else if (props.id == 8) {
        return (
            <div className={classes.imgContainer}>
                <img className={classes.imgFill} src={TerrainMap}/>
                    <img className={classes.magnifying} onClick={() => props.setSlideChange("./8optional1")} src={magnifyingGlass}/>
            </div>
        )
    }
    else if (props.id == "8optional1") {
        return (
            <div className={classes.imgContainer}>
                <img className={classes.imgFill} src={Ferd}/>
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
            </div>
        )
    }
    else if (props.id == "8optional2") {
        return (
            <div className={classes.imgContainer}>
                <img className={classes.imgFill} src={santaCruz}/>
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
            </div>
        )
    }
    else if (props.id == 9) {
        return (
            <div className={classes.imgContainer}>
                <img className={classes.imgFill} src={TerrainMap}/>
                <button className={classes.magnifying}>What's a hypothesis?</button>
            </div>
        )
    }
    else if (props.id == 10) {
        return (
            <div className={classes.imgContainer}>
                <img className={classes.imgFill} src={TerrainMap} />
                <DndLayout volcano10={true} />
            </div>
        )
    }
    else if (props.id == 11) {
        return (
            <Fragment>
                <button className={classes.magnifying}>What's a hypothesis?</button>
                <img className={classes.center} src={TerrainMap}/>
            </Fragment>
        )
    }
    else if (props.id == 12) {
        return (
            <div className={classes.imgContainer}>
                    <img className={classes.imgFill} src={VolcanoCompare}/>
                    <Popup trigger={<button className={`${classes.dot} ${classes.dot10}`}></button>}
                    contentStyle={popup} arrow={false} position="right center">
                        <div>
                            The volcanoes in western Hawaii and have been dormant for
                            hundreds of years.
                        </div>
                    </Popup>
                    <Popup trigger={<button className={`${classes.dot} ${classes.dot11}`}></button>}
                    contentStyle={popup} arrow={false} position="right center">
                        <div>
                            The Hawaiian islands get progressively older as you move west
                            along the archipelago.
                        </div>
                    </Popup>
                    <Popup trigger={<button className={`${classes.dot} ${classes.dot12}`}></button>}
                    contentStyle={popup} arrow={false} position="right center">
                        <div>
                            Hawaii's youngest volcanoes (and some of the largest volcanoes
                            in the world) are in the east of the archipelago!
                        </div>
                    </Popup>
                    <Popup trigger={<button className={`${classes.dot} ${classes.dot13}`}></button>}
                    contentStyle={popup} arrow={false} position="right center">
                        <div>
                            There is a large trench, or subduction zone, off the coast of
                            Japan.
                        </div>
                    </Popup>
                    <Popup trigger={<button className={`${classes.dot} ${classes.dot14}`}></button>}
                    contentStyle={popup} arrow={false} position="right center">
                        <div>
                            Volcanoes rise high in Japan and erupt often all along the
                            island.
                        </div>
                    </Popup>
                    <Popup trigger={<button className={`${classes.dot} ${classes.dot15}`}></button>}
                    contentStyle={popup} arrow={false} position="right center">
                        <div>
                            There is a subduction zone off the coast of Central America.
                        </div>
                    </Popup>
                    <Popup trigger={<button className={`${classes.dot} ${classes.dot16}`}></button>}
                    contentStyle={popup} arrow={false} position="right center">
                        <div>
                            Central Americas Volcanoes are located on the western coast. All
                            along the coast volcanoes erupt regularly!
                        </div>
                    </Popup>
                </div>
        )
    }
    else if (props.id == 13) {
        return (
            <Fragment>
                <button className={classes.magnifying}>What's a hypothesis?</button>
                <img className={classes.center} src={TerrainMap}/>
            </Fragment>
        )
    }
    else if (props.id == 14) {
        return (
            <Fragment>
                <button className={classes.magnifying}>What's a hypothesis?</button>
                <img className={classes.center} src={TerrainMap}/>
            </Fragment>
        )
    }
    else if (props.id == 15) {
        return (
            <Fragment>
                <button className={classes.magnifying}>What's a hypothesis?</button>
                <img className={classes.center} src={TerrainMap}/>
            </Fragment>
        )
    }
    else {
        return ( 
        <div>
            Oopsie Woopsie there's been an error! ;)
        </div>
        )
    }
}

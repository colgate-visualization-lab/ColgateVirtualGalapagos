import React, {Fragment} from 'react'
import {Link} from "react-router-dom"
import classes from "./VolcanoSlides.css"
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

    if (props.id == 0) {
        return (
            <Fragment>
                <video className={classes.center} src={introVideo} autoPlay muted controls controlsList="nodownload" type="video/mp4"/> 
            </Fragment>
        )
    }
    else if (props.id == 1) {
        return (
            <IframeCompoment class={classes.vista} src={Vista}/>
        )
    }
    else if (props.id == 2) {
        return (
            <Link to="./0">slide 2</Link>
        )
    }
    else if (props.id == 3) {
        return (
            <Link to="./0">slide 3</Link>
        )
    }
    else if (props.id == 4) {
        return (
            <Link to="./0">slide 4</Link>
        )
    }
    else if (props.id == 5) {
        return (
            <Link to="./0">slide 5</Link>
        )
    }
}

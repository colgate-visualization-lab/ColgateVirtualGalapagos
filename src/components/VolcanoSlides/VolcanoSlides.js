import React, {Fragment, useState, useRef, useEffect} from 'react'
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
import ImageMapper from "react-image-mapper";
import MAP from "../../containers/VolcanoModule/ImageMap.js";
import Button from '@material-ui/core/Button';
import { SettingsEthernet } from '@material-ui/icons';
import { Divider } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import AudioPlayer from "../../containers/AudioPlayer";

export default function VolcanoSlides(props) {

    //Styles
    const popup = {margin: "auto", padding: "20px", background: "rgba(0, 0, 0, 0.762)", borderRadius: "5px", zIndex: "2", width: "auto", position: "absolute", color: "white"}
    //more custom styles
    const useStyles = makeStyles((theme) => ({
        //  CONTENT CONTAINER STYLING  - container that surrounds
        //   main content of the page - basically whatever's above the
        //   PREV and NEXT buttons
        contentContainer: {
          position: "relative",
          width: "100%",
      
          // height is 100% of parent container minus the total height of the PREV and NEXT buttons (plus a little space)
          height: `calc(100%  -  ${theme.typography.pxToRem(40)})`,
          // backgroundColor: "lavender",
        },
      
        // VIDEO STYLING
        video: {
          minHeight: "400px",
          minWidth: "400px",
          width: "100%",
          maxHeight: "100%",
        },
      
        // IMAGE STYLING
        img: {
          objectFit: "contain",
          maxHeight: "100%",
          maxWidth: "100%",
          minWidth: "360px",
        },
      
        // 360 VIDEO STYLING
        iframe360: {
          width: "100%",
          height: "100%",
        },
      }));
    const MUIclasses = useStyles();
    //Lifecycle

    if (props.data.id == 1) {
        return (
                <video className={classes.img} src={props.data.videoSrc} autoPlay controls controlsList="nodownload" type="video/mp4"/> 
        )
    }
    else if (props.data.id == 2) {
        return (
            <Fragment>
                <IframeCompoment class={classes.img} src={props.data.videoSrc}/>
                <AudioPlayer src={props.data.audioSrc} />
            </Fragment>
        )
    }
    else if (props.data.id == 3) {
        return (
            <Fragment>
                <IframeCompoment class={classes.img} src={props.data.videoSrc}/>
                <AudioPlayer src={props.data.audioSrc} />
            </Fragment>
        )
    }
    else if (props.data.id == 4) {
        return (
            <Fragment>
                <IframeCompoment class={classes.img} src={props.data.videoSrc}/>
                <AudioPlayer src={props.data.audioSrc} />
            </Fragment>
        )
    }
    else if (props.data.id == 5) {
        return (
            <Fragment>
                <IframeCompoment class={classes.img} src={props.data.videoSrc}/>
                <AudioPlayer src={props.data.audioSrc} />
            </Fragment>
        )
    }
    else if (props.data.id == 6) {
        return (
            <Fragment>
                <IframeCompoment class={classes.img} src={props.data.videoSrc}/>
                <AudioPlayer src={props.data.audioSrc} />
            </Fragment>
        )
    }
    else if (props.data.id == 7) {
        return (
            <Fragment>
                <div className={classes.divContainer}>
                    <img className={classes.img} src={props.data.imageSrc1}/>
                    <div className={classes.hypothesis} >Click on the magnifying glass!</div>
                    <img className={classes.magnifying} src={props.data.imageSrc2} onClick={() => props.changeSlide("/volcano/8")} />
                </div>
                <AudioPlayer src={props.data.audioSrc} />
            </Fragment>
        )
    }
    else if (props.data.id == 8) {
        return ( 
            <Fragment>
                <ImageSlider image1={props.data.imageSrc1} image2={props.data.imageSrc2} leftLabelText="Fernandina" rightLabelText="Santa Cruz"/>
                <AudioPlayer src={props.data.audioSrc} /> 
            </Fragment> 
        )
    }
    else if (props.data.id == 9) {
        return (
            <Fragment>
                <IframeCompoment class={classes.leftVista} src={props.data.videoSrc1} />
                <IframeCompoment class={classes.rightVista} src={props.data.videoSrc2} />
                <AudioPlayer src={props.data.audioSrc} />
            </Fragment>
        )
    }
    else if (props.data.id == 10) {
        const button = {position: "absolute", zIndex: "1", top: "55%", left: "7%",}
        return (
            <Fragment>
                <div className={classes.divContainer}>
                    <img className={classes.img} src={props.data.imageSrc}/>
                    <div className={classes.hypothesis}>
                        <Button 
                            style={button}
                            variant="contained" 
                            color="secondary"
                            onClick={() => props.changeSlide("/volcano/11")}
                            >Compare Observations</Button>
                    </div>
                </div>
            <AudioPlayer src={props.data.audioSrc} />
            </Fragment>
        )
    }
    else if (props.data.id == 11) {
        return (
            <Fragment>
            <div className={classes.divContainer}>
                <img className={classes.img} src={props.data.imageSrc}/>
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
            <AudioPlayer src={props.data.audioSrc} />
            </Fragment>
        )
    }
    else if (props.data.id == 12) {
        return (
            <Fragment>
            <div className={classes.divContainer}>
                <img className={classes.img} src={props.data.imageSrc}/>
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
            <AudioPlayer src={props.data.audioSrc} />
            </Fragment>
        )
    }
    else if (props.data.id == 13) {
        return (
            <Fragment>
            <div className={classes.divContainer}>
                <img className={classes.img} src={props.data.imageSrc}/>
                <div className={classes.hypothesis}>What's a hypothesis? (click the circle) </div>
                <Popup trigger={<button className={`${classes.dot} ${classes.dothypothesis}`}></button>}
                contentStyle={popup} arrow={false} position="right center"> 
                    <div>
                        A <i>Hypothesis</i> is a statement that explains why something
                        happens. It is usually backed up by evidence or data that you have
                        observed or collected beforehand. If the data and experiments
                        agree with your idea, it supports you hypthesis. If the results of
                        the tests disagree with your idea, then it refutes your hypohtesis
                        indicating that it isn't quite right. Then your hypothesis needs
                        to be adjusted. Part of science is testing to see what doesn't
                        work, fixing it, and then retesting.
                    </div>
                </Popup>
            </div>
            <AudioPlayer src={props.data.audioSrc} />
            </Fragment>
        )
    }
    else if (props.data.id == 14) {
        return (
            <Fragment>
                <div className={classes.divContainer}>
                    <img className={classes.imgFill} src={props.data.imageSrc} />
                    <DndLayout volcano10={true} />
                </div>
            <AudioPlayer src={props.data.audioSrc} />
            </Fragment>
        )
    }
    else if (props.data.id == 15) {
        return (
            <Fragment>
                <div className={classes.divContainer}>
                    <img className={classes.img} src={props.data.imageSrc}/>
                </div>
                <AudioPlayer src={props.data.audioSrc} />
            </Fragment>
        )
    }
    else if (props.data.id == 16) {
        return (
            <Fragment>
            <div className={classes.divContainer}>
                    <img className={classes.img} src={props.data.imageSrc}/>
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
            <AudioPlayer src={props.data.audioSrc} />
            </Fragment>
        )
    }
    else if (props.data.id == 17) {
        return (
            <video className={classes.center} src={plateTectonics} autoPlay controls controlsList="nodownload"  type="video/mp4"/> 
        )
    }
    else if (props.data.id == 18) {
        return (
            // <Fragment>
                <img className={classes.center} src={props.data.imageSrc}/>
            //     <AudioPlayer src={props.data.audioSrc} />
            // </Fragment>
        )
    }
    else if (props.data.id == 19) {
        return (
            <div>
                This slide is not completed yet! You can listen to the audio tho :D
                I lied no audio for now sorry!
            </div>
        )
    }
    else if (props.data.id == 20) {
        return (
            <div className={classes.divContainer}>
                <img className={classes.img} src={props.data.imageSrc}/>
                <AudioPlayer src={props.data.audioSrc} />
            </div> 
        )
    }
    else if (props.data.id == 21) {
        return (
            <video className={classes.center} src={props.data.videoSrc} autoPlay controls controlsList="nodownload"  type="video/mp4"/> 
        )
    }
    else if (props.data.id == 22) {
        return (
            // <Fragment>
            //     <div className={classes.imgContainer}>
                    <img className={classes.img} src={props.data.imageSrc}/>
            //     </div>
            // <AudioPlayer src={props.data.audioSrc} />
            // </Fragment>
        )
    }
    else if (props.data.id == 23) {
        const button = {position: "absolute", zIndex: "1", top: "55%", left: "7%",}
        return (
            <Fragment>
                <div className={classes.imgContainer}>
                    <img className={classes.imgFill} src={props.data.imageSrc}/>
                    <Button 
                        style={button}
                        variant="contained" 
                        color="secondary"
                        onClick={() => props.setSlideChange(20)}
                        >Eruption Dates</Button>
                </div>
            <AudioPlayer src={props.data.audioSrc} />
            </Fragment>
        )
    }
    else if (props.data.id == 24) {
        return (
            <Fragment>
                    <img className={MUIclasses.img} src={props.data.imageSrc}/>
                <AudioPlayer src={props.data.audioSrc} />
            </Fragment>
        )
    }
    else if (props.data.id == 25) {
        return (
            <Fragment>
                <img ref={slide21ref} src={props.data.imageSrc} className={classes.center} style={{visibility: "hidden"}} />
                <div className={classes.imageMapper}>   
                    <ImageMapper src={props.data.imageSrc} width={slide21state + 15} imgWidth={2117} map={MAP} fillColor={"rgba(0, 246, 255, 0.33)"} 
                    onClick={(area) => slide21Handler(area)}/>
                </div>
                <AudioPlayer src={props.data.audioSrc} />
            </Fragment>
        )
    }
    else if (props.data.id == 26) {
        const button = {flexGrow: "1"}
        return (
            <Fragment>
            <div className={classes.imgContainer}>
                <div style={{display: "flex", position: "absolute", left: "0", bottom: "20px", height: "20%", flexDirection: "column"}}>
                    <Button 
                    style={button}
                    variant="contained" 
                    color="secondary"
                    onClick={() => props.setSlideChange(20)}> 
                    Eruption Dates</Button>
                    <Button 
                    style={button}
                    variant="contained" 
                    color="secondary"
                    onClick={() => props.setSlideChange(11)}> 
                    Island Ages</Button>
                </div>
                <img className={classes.imgFill} src={TerrainOvalWrong}/>
            </div>
            <AudioPlayer src={props.data.audioSrc} />
            </Fragment>
        )
    }
    else if (props.data.id == 27) {
        return (
            <Fragment>
                <div className={classes.imgContainer}>
                    <img className={classes.imgFill} src={props.data.imageSrc}/>
                </div>
                <AudioPlayer src={props.data.audioSrc} />
            </Fragment>
        )
    }
    else if (props.data.id == 28) {
        return (
            <Fragment>
                <div className={classes.imgContainer}>
                    This is the end!
                    <img className={classes.imgFill} src={TerrainMap}/>
                </div>
            <AudioPlayer src={props.data.audioSrc} />
            </Fragment>
        )
    }
    else if (props.data.id == 29) {
        return (
            <video className={classes.img} src={props.data.videoSrc} autoPlay controls controlsList="nodownload"  type="video/mp4" />
        )
    }
    else {
        return ( 
        <div>
            Error. Actually nah this an Easter egg :)
        </div>
        )
    }
}

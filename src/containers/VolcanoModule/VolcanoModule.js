import React, { Component, Fragment } from 'react'
import { Back, Next, TerrainMap, magnifyingGlass, Ferd, santaCruz, VolcanoCompare, tectonicPlatesMap, convergent, convergent2, convergent2fix, divergent, transform, seaMounts, eruptionDates, TerrainOval, TerrainOvalCorrect, TerrainOvalWrong, XImage, DnDAnswers, DnD} from "../../assets/VolcanoModule/Images"
import { terrainMap2, volcanoSlider1, eruptionAudio, volcanoCompare360, terrainMap3, fernandina1, santaCruz1, terrainMap4, terrainMapAges1, terrainMapAges2, otherVolcanoes1, tectonicPlates1, platesGame1, tectonicPlates2, southAmerica1, terrainMap6, plumePlacement1, plumeYes1, plumeNo1, whereNext1, Exploration01, Exploration02, Exploration03, Exploration04, Exploration05 } from "../../assets/VolcanoModule/Audio"
import classes from "./VolcanoModule.css"
import mantlePlumes from "../../assets/VolcanoModule/Videos/VolcanoMantlePlumes.mp4"
import tectonicPlates from "../../assets/VolcanoModule/Videos/VolcanoPlateTectonics.mp4"
import MAP from "./ImageMap.js"
import ImageMapper from "react-image-mapper"
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import DndDraggables from "../../components/DndDraggables/DndDraggables"
import DndDroppables from "../../components/DndDroppables/DndDroppables"
import ResizePanel from "react-resize-panel";
import IntroVideo from "../../assets/VolcanoModule/Videos/VolcanoModuleIntro.mp4"
import VolcanoeIframe from "../../components/VolcanoeIframe/VolcanoeIframe"
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer"
import MapComponent from "../../components/MapComponent/MapComponent"

class VolcanoeModule extends Component {
    constructor(props) {
        super(props)
        this.headerRef2 = React.createRef();
        this.randomRef = React.createRef();
        this.yoloRef = React.createRef();
        this.state = {
             slideIndex: 0,
             progressIndex: 0,
             optional1: false,
             optional2: false,
             optional2Next: false,
             optional3: false,
             height: 0,
             revealHidden: {visibility: "hidden"},
             imageChange: TerrainOvalWrong,
             draggable: false,
             slide15_dnd1: false, slide15_dnd2: false, slide15_dnd3: false, slide15_dnd4: false,
             dndIndex: 0,
             width: 2000,
             dragIndex: 1,
             yolo: 500,
             slide10_dnd1: false, slide10_dnd2: false, slide10_dnd3: false, slide10_dnd4: false, slide10_dnd5: false, slide10_dnd6: false,
             draggable1: false,
             randomState: {visibility: "hidden"},
             slideDone: false,
             audioPlaying: true,
             audioIsDone: false
        }
    }
nextSlide() {
    if (this.state.progressIndex == 0) {
        this.setState({audioPlaying: false});
        setTimeout(() => this.setState({slideIndex: 1, progressIndex: 1, audioIsDone: false, audioPlaying: true}), 1)
    }
    else if (this.state.progressIndex > this.state.slideIndex) {
        this.setState({audioPlaying: false})
        setTimeout(() => this.setState((prevState) => ({slideIndex: prevState.slideIndex +1})), 1)
    }
    else {
        this.setState({audioPlaying: false});
        setTimeout(() => this.setState((prevState) => ({slideIndex: prevState.slideIndex +1, progressIndex: this.state.slideIndex + 1, audioIsDone: false, audioPlaying: true})), 1)
    }
}
onEnded() {
    this.setState({audioIsDone: true})
}
toggleAudio() {
    if (this.state.audioPlaying) {
        this.setState({audioPlaying: false})
    }
    else {
        this.setState({audioPlaying: true})
    }
}
prevSlide()  {
    this.setState({audioPlaying: false});
    setTimeout(() => this.setState((prevState) => ({slideIndex: prevState.slideIndex -1,})), 1)
}
optionalOne() {                                             
    if (this.state.optional1) {
        this.setState({audioPlaying: false});
        setTimeout(() => this.setState({slideIndex: 100}),1)   
    }
    else {
        this.setState({audioPlaying: false});
        setTimeout(() => this.setState({optional1: true, slideIndex: 100, audioIsDone: false, audioPlaying: true}), 1);
    }
}
optionalTwo() {
    if (this.state.optional2) {
        this.setState({audioPlaying: false});
        setTimeout(() => this.setState({slideIndex: 101}),1)    
    }
    else {
        this.setState({audioPlaying: false});
        setTimeout(() => this.setState({optional2: true, slideIndex: 101, audioIsDone: false, audioPlaying: true}), 1);
    }
}
optionalTwoNext() {
    if (this.state.optional2Next) {
        this.setState({audioPlaying: false});
        setTimeout(() => this.setState({slideIndex: 102}),1)    
    }
    else {
        this.setState({audioPlaying: false});
        setTimeout(() => this.setState({optional2Next: true, slideIndex: 102, audioIsDone: false, audioPlaying: true}), 1);
    }
}
optionalThree() {
    if (this.state.optional3) {
        this.setState({audioPlaying: false});
        this.setState({slideIndex: 103})   
    }
    else {
        this.setState({audioPlaying: false});
        this.setState({optional3: true, slideIndex: 103, audioIsDone: false, audioPlaying: true});
    }
}
updateDimensions = () => {
    this.setState({height: this.headerRef2.current.clientWidth })
}
updateDimensions2 = () => {
    this.setState({width: this.randomRef.current.clientWidth +30})
}
eventListener100 = () => {
    this.setState({yolo: this.yoloRef.current.clientWidth })
}
function() {
    window.addEventListener("resize", this.updateDimensions2)
}
function2() {
    window.addEventListener("resize", this.eventListener100)
}
imageFunction(area) {
    let decision = `${area.id}`
    if (decision > 1) {
        setTimeout(() => this.nextSlide(),1);
        window.removeEventListener("resize", this.updateDimensions)
    }
    else {
        setTimeout(() => this.optionalThree(),1);
        window.removeEventListener("resize", this.updateDimensions)
    }
}
renderHidden() {
    this.setState({revealHidden: {visibility: "visible"}})
}
hideHidden() {
    this.setState({revealHidden: {visibility: "hidden"}})
}
dnd1() {
    if (this.state.dndIndex == 3) {
        this.setState({audioIsDone: true});
        this.setState({slide15_dnd1: true})
    }
    this.setState((prevState) => ({dndIndex: prevState.dndIndex +1, slide15_dnd1: true}))
}
dnd2() {
    if (this.state.dndIndex == 3) {
        this.setState({audioIsDone: true});
        this.setState({slide15_dnd2: true})
    }
    this.setState((prevState) => ({dndIndex: prevState.dndIndex +1, slide15_dnd2: true}))
}
dnd3() {
    if (this.state.dndIndex == 3) {
        this.setState({audioIsDone: true});
        this.setState({slide15_dnd3: true})
    }
    this.setState((prevState) => ({dndIndex: prevState.dndIndex +1, slide15_dnd3: true}))
}
dnd4() {
    if (this.state.dndIndex == 3) {
        this.setState({audioIsDone: true});
        this.setState({slide15_dnd4: true})
    }
    this.setState((prevState) => ({dndIndex: prevState.dndIndex +1, slide15_dnd4: true}))
}
slide10dnd1() {
    if (this.state.dndIndex == 5) {
        this.setState({audioIsDone: true});
        this.setState({slide10_dnd1: true})
    }
    this.setState((prevState) => ({dndIndex: prevState.dndIndex +1, slide10_dnd1: true}))
}
slide10dnd2() {
    if (this.state.dndIndex == 5) {
        this.setState({audioIsDone: true});
        this.setState({slide10_dnd2: true})
    }
    this.setState((prevState) => ({dndIndex: prevState.dndIndex +1, slide10_dnd2: true}))
}
slide10dnd3() {
    if (this.state.dndIndex == 5) {
        this.setState({audioIsDone: true});
        this.setState({slide10_dnd3: true})
    }
    this.setState((prevState) => ({dndIndex: prevState.dndIndex +1, slide10_dnd3: true}))
}
slide10dnd4() {
    if (this.state.dndIndex == 5) {
        this.setState({audioIsDone: true});
        this.setState({slide10_dnd4: true})
    }
    this.setState((prevState) => ({dndIndex: prevState.dndIndex +1, slide10_dnd4: true}))
}
slide10dnd5() {
    if (this.state.dndIndex == 5) {
        this.setState({audioIsDone: true});
        this.setState({slide10_dnd5: true})
    }
    this.setState((prevState) => ({dndIndex: prevState.dndIndex +1, slide10_dnd5: true}))
}
slide10dnd6() {
    if (this.state.dndIndex == 5) {
        this.setState({audioIsDone: true});
        this.setState({slide10_dnd6: true})
    }
    this.setState((prevState) => ({dndIndex: prevState.dndIndex +1, slide10_dnd6: true}))
}
    render() {
        const {audioPlaying, audioIsDone, randomState, slideIndex, height, revealHidden, imageChange, draggable, slide15_dnd1, slide15_dnd2, slide15_dnd3, slide15_dnd4, dragIndex, slide10_dnd1, slide10_dnd2, slide10_dnd3, slide10_dnd4, slide10_dnd5, slide10_dnd6, draggable1} = this.state
        const buttonStyle = {pointerEvents: "none", opacity: "0.3"} 
        const animation = "animated slideInRight";
        if (slideIndex == 0) {
            return (
                <Fragment>
                    <div className={classes.leftDiv}>
                        {/* <button className={classes.button4} onClick={() => this.setState({slideIndex: 19, progressIndex: 19})}>Dev Button</button> */}
                        <h1 className={classes.slideName}>Slide {this.state.slideIndex + 1}</h1>
                    </div>
                    <div className={classes.mainDiv}>
                        <video controls controlsList="nodownload" autoPlay className={classes.mainContent} onEnded={() => this.onEnded()}>
                            <source src={IntroVideo} type="video/mp4"/>
                        </video>
                    </div>
                    <div className={classes.rightDiv}>
                        <img style={audioIsDone? {} : buttonStyle} src={Next} className={classes.imgNext} onClick={() => this.nextSlide()} />
                    </div>
                </Fragment>
            )
        }
        else if (slideIndex == 1) {
            const Vista = "https://virtualgalapagos.colgate.edu/360Videos/VolcanoModule/Caldara_Endtrail/index.htm"
            return (
                <Fragment>
                    <VolcanoeIframe src={Vista} />
                    <MapComponent />
                    <AudioPlayer src={Exploration01} onEnded={() => {this.onEnded(); this.setState({audioPlaying: false})}} toggleAudio={() => this.toggleAudio()} playing={audioPlaying} />
                    <img style={audioIsDone? {} : buttonStyle} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()} />
                    <img style={audioIsDone? {} : buttonStyle} src={Next} className={classes.imgNext} onClick={() => this.nextSlide()} />
                    <h1 style={{position: "absolute", left: "4%", bottom: "2%", width: "10%", textAlign: "center", fontSize: "16px"}}>Slide {this.state.slideIndex + 1}</h1>
                </Fragment>
            )
        }
        else if (slideIndex == 2) {
            const Vista = "https://virtualgalapagos.colgate.edu/360Videos/VolcanoModule/Caldara_Shotfive/index.htm"
            return (
                <Fragment>
                    <VolcanoeIframe src={Vista} />
                    <MapComponent />
                    <AudioPlayer src={Exploration02} onEnded={() => {this.onEnded(); this.setState({audioPlaying: false})}} toggleAudio={() => this.toggleAudio()} playing={audioPlaying} />
                    <img style={audioIsDone? {} : buttonStyle} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()} />
                    <img style={audioIsDone? {} : buttonStyle} src={Next} className={classes.imgNext} onClick={() => this.nextSlide()} />
                    <h1 style={{position: "absolute", left: "4%", bottom: "2%", width: "10%", textAlign: "center", fontSize: "16px"}}>Slide {this.state.slideIndex + 1}</h1>
                </Fragment>
            )
        }
        else if (slideIndex == 3) {
            const Vista = "https://virtualgalapagos.colgate.edu/360Videos/VolcanoModule/Stillwater/index.htm"
            return (
                <Fragment>
                    <VolcanoeIframe src={Vista} />
                    <MapComponent />
                    <AudioPlayer src={Exploration03} onEnded={() => {this.onEnded(); this.setState({audioPlaying: false})}} toggleAudio={() => this.toggleAudio()} playing={audioPlaying} />
                    <img style={audioIsDone? {} : buttonStyle} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()} />
                    <img style={audioIsDone? {} : buttonStyle} src={Next} className={classes.imgNext} onClick={() => this.nextSlide()} />
                    <h1 style={{position: "absolute", left: "4%", bottom: "2%", width: "10%", textAlign: "center", fontSize: "16px"}}>Slide {this.state.slideIndex + 1}</h1>
                </Fragment>
            )
        }
        else if (slideIndex == 4) {
            const Vista = "https://virtualgalapagos.colgate.edu/360Videos/VolcanoModule/Cactus_Final/index.htm"
            return (
                <Fragment>
                    <VolcanoeIframe src={Vista} />
                    <MapComponent />
                    <AudioPlayer src={Exploration04} onEnded={() => {this.onEnded(); this.setState({audioPlaying: false})}} stopAudio={() => this.setState({audioPlaying: false})} toggleAudio={() => this.toggleAudio()} playing={audioPlaying} />
                    <img style={audioIsDone? {} : buttonStyle} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()} />
                    <img style={audioIsDone? {} : buttonStyle} src={Next} className={classes.imgNext} onClick={() => this.nextSlide()} />
                    <h1 style={{position: "absolute", left: "4%", bottom: "2%", width: "10%", textAlign: "center", fontSize: "16px"}}>Slide {this.state.slideIndex + 1}</h1>
                </Fragment>
            )
        }
        else if (slideIndex == 5) {
            const Vista = "https://virtualgalapagos.colgate.edu/360Videos/VolcanoModule/PlazaCliff/index.htm"
            return (
                <Fragment>
                    <VolcanoeIframe src={Vista} />
                    <MapComponent />
                    <AudioPlayer src={Exploration05} onEnded={() => {this.onEnded(); this.setState({audioPlaying: false})}} stopAudio={() => this.setState({audioPlaying: false})} toggleAudio={() => this.toggleAudio()} playing={audioPlaying} />
                    <img style={audioIsDone? {} : buttonStyle} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()} />
                    <img style={audioIsDone? {} : buttonStyle} src={Next} className={classes.imgNext} onClick={() => this.nextSlide()} />
                    <h1 style={{position: "absolute", left: "4%", bottom: "2%", width: "10%", textAlign: "center", fontSize: "16px"}}>Slide {this.state.slideIndex + 1}</h1>
                </Fragment>
            )
        }
        else if (slideIndex == 6) {
            return (
                <Fragment>
                    <div className={classes.leftDiv}>
                        <AudioPlayer src={terrainMap2} onEnded={() => {this.onEnded(); this.setState({audioPlaying: false})}} stopAudio={() => this.setState({audioPlaying: false})} toggleAudio={() => this.toggleAudio()} playing={audioPlaying} />
                        <img style={audioIsDone? {} : buttonStyle} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()}/>
                        <h1 className={classes.slideName}>Slide {this.state.slideIndex + 1}</h1>
                    </div>
                    <div className={classes.mainDiv}>
                        <img src={TerrainMap} className={classes.mainContent} />
                        <img style={audioIsDone? {} : buttonStyle} src={magnifyingGlass} className={classes.Magnifying} onClick={() => {this.optionalOne(); window.addEventListener("resize", this.eventListener100); setTimeout(() => this.eventListener100(), 1)}} />
                    </div>
                    <div className={classes.rightDiv}>
                        <img style={audioIsDone? {} : buttonStyle} src={Next} className={classes.imgNext} onClick={() => this.nextSlide()} />
                    </div>
                </Fragment>
            )
        }
        else if (slideIndex == 100) {
            return (
                <Fragment>
                    <div className={classes.leftDiv}>
                        <AudioPlayer src={volcanoSlider1} onEnded={() => {this.onEnded(); this.setState({audioPlaying: false})}} stopAudio={() => this.setState({audioPlaying: false})} toggleAudio={() => this.toggleAudio()} playing={audioPlaying} />
                        <img style={audioIsDone? {} : buttonStyle} src={Back} className={classes.imgBack} onClick={() => {this.setState({audioPlaying: false}); window.removeEventListener("resize", this.eventListener100); setTimeout(() => this.setState({slideIndex: 6}), 1)}}/>
                        <h1 className={classes.slideName}>Optional Slide 1</h1>
                    </div>
                    <div className={classes.mainDiv}>
                        <img style={{zIndex: "-1"}} className={classes.mainContent} ref={this.yoloRef} src={Ferd} />
                        <div style={{width: `${this.state.yolo}px`}} className={classes.container}>
                            <div className={classes.body} >
                                <ResizePanel direction="e" style={{ flexGrow: '1' }} handleClass={classes.customHandle} borderClass={classes.customResizeBorder}>
                                    <div className={`${classes.sidebar} ${classes.withMargin} ${classes.panel}`}>
                                        <div className={classes.duck3} />
                                    </div>
                                </ResizePanel>
                            </div>
                         </div>
                    </div>
                    <div className={classes.rightDiv} />
                </Fragment>
            )
        }
        else if (slideIndex == 7) {
            const Vista1 = "https://virtualgalapagos.colgate.edu/360Videos/VolcanoModule/Caldara_Endtrail/index.htm"
            const Vista2 = "https://virtualgalapagos.colgate.edu/360Videos/VolcanoModule/Cactus_Final/index.htm"
            return (
                <Fragment>
                    <AudioPlayer src={volcanoCompare360} onEnded={() => {this.onEnded(); this.setState({audioPlaying: false})}} stopAudio={() => this.setState({audioPlaying: false})} toggleAudio={() => this.toggleAudio()} playing={audioPlaying} />
                    <div style={{position: "absolute", height: "100%", width: "50%", left: "0"}}>
                        <VolcanoeIframe src={Vista1} />
                        <h1 style={{position: "absolute", left: "4%", bottom: "2%", width: "10%", textAlign: "center", fontSize: "16px"}}>Slide {this.state.slideIndex + 1}</h1>
                     </div>
                     <div style={{position: "absolute", height: "100%", width: "50%", right: "0"}}>
                         <VolcanoeIframe src={Vista2} />
                     </div>
                    <img style={audioIsDone? {} : buttonStyle} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()} />
                    <img style={audioIsDone? {} : buttonStyle} src={Next} className={classes.imgNext} onClick={() => this.nextSlide()} />
                </Fragment>
            )
        }
        else if (slideIndex == 8) {
            return (
                <Fragment>
                    <div className={classes.leftDiv}>
                        <AudioPlayer src={terrainMap3} onEnded={() => {this.onEnded(); this.setState({audioPlaying: false})}} stopAudio={() => this.setState({audioPlaying: false})} toggleAudio={() => this.toggleAudio()} playing={audioPlaying} />
                        <img style={audioIsDone? {} : buttonStyle} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()}/>
                        <h1 className={classes.slideName}>Slide {this.state.slideIndex + 1}</h1>
                    </div>
                    <div className={classes.mainDiv}>
                        <img src={TerrainMap} className={classes.mainContent} />
                        <button style={audioIsDone? {} : buttonStyle} className={`${classes.buttonClass} ${classes.slide8Button}`} onClick={() => this.optionalTwo()}>Compare Observations</button>
                    </div>
                    <div className={classes.rightDiv}>
                        <img style={audioIsDone? {} : buttonStyle} src={Next} className={classes.imgNext} onClick={() => this.nextSlide()} />
                    </div>
                </Fragment>
            )
        }
        else if (slideIndex == 101) {
            return (
                <Fragment>
                    <div className={classes.leftDiv}>
                        <AudioPlayer src={fernandina1} onEnded={() => {this.onEnded(); this.setState({audioPlaying: false})}} stopAudio={() => this.setState({audioPlaying: false})} toggleAudio={() => this.toggleAudio()} playing={audioPlaying} />
                        <img style={audioIsDone? {} : buttonStyle} src={Back} className={classes.imgBack} onClick={() => { this.setState({audioPlaying: false}); setTimeout(() => this.setState({slideIndex: 8}), 1) }}/>
                        <h1 className={classes.slideName}>Optional Slide 2</h1>
                    </div>
                    <div className={classes.mainDiv}>
                        <img src={Ferd} className={classes.mainContent} />
                    </div>
                    <div className={classes.rightDiv}>
                        <img style={audioIsDone? {} : buttonStyle} src={Next} className={classes.imgNext} onClick={() => this.optionalTwoNext()} />
                    </div>
                </Fragment>
            )
        }
        else if (slideIndex == 102) {
            return (
                <Fragment>
                    <div className={classes.leftDiv}>
                        <AudioPlayer src={santaCruz1} onEnded={() => {this.onEnded(); this.setState({audioPlaying: false})}} stopAudio={() => this.setState({audioPlaying: false})} toggleAudio={() => this.toggleAudio()} playing={audioPlaying} />
                        <img style={audioIsDone? {} : buttonStyle} src={Back} className={classes.imgBack} onClick={() => { this.setState({audioPlaying: false}); setTimeout(() => this.setState({slideIndex: 101}), 1) } }/>
                        <h1 className={classes.slideName}>Optional Slide 3</h1>
                    </div>
                    <div className={classes.mainDiv}>
                        <img src={santaCruz} className={classes.mainContent} />
                    </div>
                    <div className={classes.rightDiv}>
                        <img style={audioIsDone? {} : buttonStyle} src={Next} className={classes.imgNext} onClick={() => { this.setState({audioPlaying: false}); setTimeout(() => this.setState({slideIndex: 8}), 1) }} />
                    </div>
                </Fragment>
            )
        }
        else if (slideIndex == 9) {
            return (
                <Fragment>
                    <div className={classes.leftDiv}>
                        <AudioPlayer src={terrainMap4} onEnded={() => {this.onEnded(); this.setState({audioPlaying: false})}} stopAudio={() => this.setState({audioPlaying: false})} toggleAudio={() => this.toggleAudio()} playing={audioPlaying} />
                        <img style={audioIsDone? {} : buttonStyle} src={Back} className={classes.imgBack} onClick={() => {this.prevSlide(); this.hideHidden()}}/>
                        <h1 className={classes.slideName}>Slide {this.state.slideIndex + 1}</h1>
                    </div>
                    <div className={classes.mainDiv}>
                        <img src={TerrainMap} className={classes.mainContent} />
                        <button style={audioIsDone? {} : buttonStyle} className={`${classes.buttonClass} ${classes.slide9Button}`} onClick={() => this.renderHidden()}>What's A Hypothesis?</button>
                        <div style={revealHidden} className={classes.popUp}> A <i>Hypothesis</i> is a statement that explains why something happens. It is usually backed up by evidence or data that you have observed or collected beforehand. If the data and experiments agree with your idea, it supports you hypthesis. If the results of the tests disagree with your idea, then it refutes your hypohtesis indicating that it isn't quite right. Then your hypothesis needs to be adjusted. Part of science is testing to see what doesn't work, fixing it, and then retesting.
                            <img src={XImage} className={classes.XImage} onClick={() => this.hideHidden()}/>
                        </div> 
                    </div>
                    <div className={classes.rightDiv}>
                        <img style={audioIsDone? {} : buttonStyle} src={Next} className={classes.imgNext} onClick={() => {this.nextSlide(); this.hideHidden(); this.function(); setTimeout(() => this.updateDimensions2(), 1)}} />
                    </div>
                </Fragment>
            )
        }
        else if (slideIndex == 10) {
            const dnd1 = () => this.slide10dnd1(); const dnd2 = () => this.slide10dnd2(); const dnd3 = () => this.slide10dnd3()
            const dnd4 = () => this.slide10dnd4(); const dnd5 = () => this.slide10dnd5(); const dnd6 = () => this.slide10dnd6()
            const UpdateDrag1 = () => this.setState({dragIndex: 1}); const UpdateDrag2 = () => this.setState({dragIndex: 2})
            const UpdateDrag3 = () => this.setState({dragIndex: 3}); const UpdateDrag4 = () => this.setState({dragIndex: 4})
            const UpdateDrag5 = () => this.setState({dragIndex: 5}); const UpdateDrag6 = () => this.setState({dragIndex: 6})
            return (
                <DndProvider backend={HTML5Backend}>
                    <div className={classes.dndSidebar}>
                        <h1 className={classes.slideName}>Slide {this.state.slideIndex + 1}</h1>
                        <AudioPlayer src={terrainMapAges1} onEnded={() => {this.setState({draggable1: true}); this.setState({audioPlaying: false})}} stopAudio={() => this.setState({audioPlaying: false})} toggleAudio={() => this.toggleAudio()} playing={audioPlaying} />
                        <img style={audioIsDone? {} : buttonStyle} src={Back} className={classes.imgBackslide10} onClick={() => { window.removeEventListener("resize", this.updateDimensions2); this.setState({dndIndex:0, slide10_dnd1: false, slide10_dnd2: false, slide10_dnd3: false, slide10_dnd4: false, slide10_dnd5: false, slide10_dnd6: false,}); this.prevSlide()}} />
                        <img style={audioIsDone? {} : buttonStyle} src={Next} className={classes.imgNextslide10} onClick={() => { window.removeEventListener("resize", this.updateDimensions2); this.setState({dndIndex:0, slide10_dnd1: false, slide10_dnd2: false, slide10_dnd3: false, slide10_dnd4: false, slide10_dnd5: false, slide10_dnd6: false,}); this.nextSlide()}} />
                        <div className={classes.wordbank}>
                            <h1 className={classes.wordbankheader}>Wordbank</h1>
                            <DndDraggables updateDragIndex={UpdateDrag1} answered={slide10_dnd1} isReady={draggable1} readyClass={classes.slide10_dnd} class={classes.slide10dragclass} text={"1.7 Million Years"} />
                            <DndDraggables updateDragIndex={UpdateDrag2} answered={slide10_dnd2} isReady={draggable1} readyClass={classes.slide10_dnd} class={classes.slide10dragclass} text={"2.3 Million Years"}  />
                            <DndDraggables updateDragIndex={UpdateDrag3} answered={slide10_dnd3} isReady={draggable1} readyClass={classes.slide10_dnd} class={classes.slide10dragclass} text={"4 Million Years"} />
                            <DndDraggables updateDragIndex={UpdateDrag4} answered={slide10_dnd4} isReady={draggable1} readyClass={classes.slide10_dnd} class={classes.slide10dragclass} text={"3.3 Million Years"}  />
                            <DndDraggables updateDragIndex={UpdateDrag5} answered={slide10_dnd5} isReady={draggable1} readyClass={classes.slide10_dnd} class={classes.slide10dragclass} text={"700,000 Years"} />
                            <DndDraggables updateDragIndex={UpdateDrag5} answered={slide10_dnd6} isReady={draggable1} readyClass={classes.slide10_dnd} class={classes.slide10dragclass} text={"700,000 Years"}  />
                        </div>
                    </div>
                    <div className={classes.dndMain}>
                        <div className={classes.test} style={{width: `${this.state.width}px`}}>
                            <img ref={this.randomRef} className={classes.mainContent} src={DnD} /> 
                            <div className={classes.test2}>
                                <h1 style={draggable1? {visibility: "visible"}: {visibility: "hidden"}} className={classes.slide10bigh1}>Drag and drop items from the wordbank onto the islands.</h1>
                                <DndDroppables slide10={true} answerClass={classes.yo1} class={classes.dnd1} answered1={slide10_dnd1} dragIndex={dragIndex} dropIndex={1} unlock={dnd1} text={"1.7 Million Years"}/>
                                <DndDroppables slide10={true} answerClass={classes.yo2} class={classes.dnd2} answered1={slide10_dnd2} dragIndex={dragIndex} dropIndex={2} unlock={dnd2} text={"2.3 Million Years"}/>
                                <DndDroppables slide10={true} answerClass={classes.yo3} class={classes.dnd3} answered1={slide10_dnd3} dragIndex={dragIndex} dropIndex={3} unlock={dnd3} text={"4 Million Years"}/>
                                <DndDroppables slide10={true} answerClass={classes.yo4} class={classes.dnd4} answered1={slide10_dnd4} dragIndex={dragIndex} dropIndex={4} unlock={dnd4} text={"3.3 Million Years"}/>
                                <DndDroppables slide10={true} answerClass={classes.yo5} class={classes.dnd5} answered1={slide10_dnd5} dragIndex={dragIndex} dropIndex={5} unlock={dnd5} text={"700,000 Years"}/>
                                <DndDroppables slide10={true} answerClass={classes.yo6} class={classes.dnd6} answered1={slide10_dnd6} dragIndex={dragIndex} dropIndex={5} unlock={dnd6} text={"700,000 Years"}/>
                            </div>
                        </div>
                    </div>
                </DndProvider>
            )
        }
        else if (slideIndex == 11) {
            return (
                <Fragment>
                    <div className={classes.leftDiv}>
                        <AudioPlayer src={terrainMapAges2} onEnded={() => {this.onEnded(); this.setState({audioPlaying: false})}} stopAudio={() => this.setState({audioPlaying: false})} toggleAudio={() => this.toggleAudio()} playing={audioPlaying} />
                        <img style={audioIsDone? {} : buttonStyle} src={Back} className={classes.imgBack} onClick={() => {this.prevSlide(); this.function(); setTimeout(() => this.updateDimensions2(), 1)}}/>
                        <h1 className={classes.slideName}>Slide {this.state.slideIndex + 1}</h1>
                    </div>
                    <div className={classes.mainDiv}>
                        <img src={DnDAnswers} className={classes.mainContent} />
                    </div>
                    <div className={classes.rightDiv}>
                        <img style={audioIsDone? {} : buttonStyle} src={Next} className={classes.imgNext} onClick={() => this.nextSlide()} />
                    </div>
                </Fragment>
            )
        }
        else if (slideIndex == 12) {
            return (
                <Fragment>
                    <div className={classes.leftDiv}>
                        <AudioPlayer src={otherVolcanoes1} onEnded={() => {this.onEnded(); this.setState({audioPlaying: false})}} stopAudio={() => this.setState({audioPlaying: false})} toggleAudio={() => this.toggleAudio()} playing={audioPlaying} />
                        <img style={audioIsDone? {} : buttonStyle} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()} />
                        <h1 className={classes.slideName}>Slide {this.state.slideIndex + 1}</h1>
                    </div>
                    <div className={classes.mainDiv}>
                        <img src={VolcanoCompare} className={classes.wideMainContent} />
                    </div>
                    <div className={classes.rightDiv}>
                        <img style={audioIsDone? {} : buttonStyle} src={Next} className={classes.imgNext} onClick={() => this.nextSlide()} />
                    </div>
                </Fragment>
            )
        }
        else if (slideIndex == 13) {
            return (
                <Fragment>
                    <div className={classes.leftDiv}>
                        <img style={audioIsDone? {} : buttonStyle} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()} />
                        <h1 className={classes.slideName}>Slide {this.state.slideIndex + 1}</h1>
                    </div>
                    <div className={classes.mainDiv}>
                        <video controls controlsList="nodownload" autoPlay className={classes.mainContent} onEnded={() => this.onEnded()}>
                            <source src={tectonicPlates} type="video/mp4"/>
                        </video>
                    </div>
                    <div className={classes.rightDiv}>
                        <img style={audioIsDone? {} : buttonStyle} src={Next} className={classes.imgNext} onClick={() => this.nextSlide()} />
                    </div>
                </Fragment>
            )
        }
        else if (slideIndex == 14) {
            return (
                <Fragment>
                    <div className={classes.leftDiv}>
                        <AudioPlayer src={tectonicPlates1} onEnded={() => {this.onEnded(); this.setState({audioPlaying: false})}} stopAudio={() => this.setState({audioPlaying: false})} toggleAudio={() => this.toggleAudio()} playing={audioPlaying} />
                        <img style={audioIsDone? {} : buttonStyle} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()}/>
                        <h1 className={classes.slideName}>Slide {this.state.slideIndex + 1}</h1>
                    </div>
                    <div className={classes.mainDiv}>
                        <img src={tectonicPlatesMap} className={classes.mainContent} />
                    </div>
                    <div className={classes.rightDiv}>
                        <img style={audioIsDone? {} : buttonStyle} src={Next} className={classes.imgNext} onClick={() => this.nextSlide()} />
                    </div>
                </Fragment>
            )
        }
        else if (slideIndex == 15) {
            const dnd1 = () => this.dnd1()
            const dnd2 = () => this.dnd2() 
            const dnd3 = () => this.dnd3() 
            const dnd4 = () => this.dnd4()
            const UpdateDrag1 = () => this.setState({dragIndex: 1})
            const UpdateDrag2 = () => this.setState({dragIndex: 2})
            const UpdateDrag3 = () => this.setState({dragIndex: 3})
            const UpdateDrag4 = () => this.setState({dragIndex: 4})
            return (
                <DndProvider backend={HTML5Backend}>
                <div className={classes.divClass}>
                <h1 className={classes.slideName}>Slide {this.state.slideIndex + 1}</h1>
                <AudioPlayer src={platesGame1} onEnded={() => {this.setState({draggable: true}); this.setState({audioPlaying: false})}} stopAudio={() => this.setState({audioPlaying: false})} toggleAudio={() => this.toggleAudio()} playing={audioPlaying} />
                    <DndDraggables updateDragIndex={UpdateDrag1} answered={slide15_dnd1} isReady={draggable} readyClass={classes.slide15_drag1_ready} text={"Divergent"} class={classes.slide15_drag1} />
                        <DndDroppables dragIndex={dragIndex} dropIndex={1} answered={slide15_dnd1} text={"Divergent"} unlock={dnd1} src={divergent} class={classes.slide15_drop1} divClass={classes.slide15_drop1_div} answerClass={classes.slide15_drop1_h1} />
                    <DndDraggables updateDragIndex={UpdateDrag2} answered={slide15_dnd2} isReady={draggable} readyClass={classes.slide15_drag2_ready} text={"Ocean-Continent Convergence"} class={classes.slide15_drag2} />
                        <DndDroppables dragIndex={dragIndex} dropIndex={2} answered={slide15_dnd2} text={"Ocean-Continent Convergence"}  unlock={dnd2} src={convergent} class={classes.slide15_drop2} divClass={classes.slide15_drop2_div} answerClass={classes.slide15_drop2_h1} />
                    <DndDraggables updateDragIndex={UpdateDrag3} answered={slide15_dnd3} isReady={draggable} readyClass={classes.slide15_drag3_ready} text={"Transform"} class={classes.slide15_drag3} />
                        <DndDroppables dragIndex={dragIndex} dropIndex={3} answered={slide15_dnd3} text={"Transform"} unlock={dnd3} src={transform} class={classes.slide15_drop3} divClass={classes.slide15_drop3_div} answerClass={classes.slide15_drop3_h1} />
                    <DndDraggables updateDragIndex={UpdateDrag4} answered={slide15_dnd4} isReady={draggable} readyClass={classes.slide15_drag4_ready} text={"Continent-Continent Convergence"} class={classes.slide15_drag4} />
                        <DndDroppables dragIndex={dragIndex} dropIndex={4} answered={slide15_dnd4} text={"Continent-Continent Convergence"} unlock={dnd4} src={convergent2fix} class={classes.slide15_drop4} divClass={classes.slide15_drop4_div} answerClass={classes.slide15_drop4_h1} />
                    <button className={`${classes.buttonClass} ${classes.button4}`} onClick={() => this.renderHidden()}>Tectonic Plate Movements </button>
                    <div style={revealHidden} className={classes.popUp}><b>Divergent:</b> two plates move away from each other causing magma to rise up and form volcanoes. <br /> <b>Continent-Continent Convergence:</b> to pieces of continental crust collide causing a mountain chain to form. <br /><b>Ocean-Continent Convergence:</b> a piece of ocean crust collides with continental crust forming a subduction zone and volcanoes. <br /> <b>Transform:</b> two plates slide against each other as they move in opposite directions. 
                        <img src={XImage} className={classes.XImage} onClick={() => this.hideHidden()}/>
                    </div> 
                    <img style={audioIsDone? {} : buttonStyle} src={Next} className={classes.imgNext} onClick={() => {this.nextSlide(); this.hideHidden(); this.setState({slide15_dnd1: false, slide15_dnd2: false, slide15_dnd3: false, slide15_dnd4: false, dndIndex: 0})}} />
                    <img style={audioIsDone? {} : buttonStyle} src={Back} className={classes.imgBack} onClick={() => {this.prevSlide(); this.hideHidden(); this.setState({slide15_dnd1: false, slide15_dnd2: false, slide15_dnd3: false, slide15_dnd4: false, dndIndex: 0})}} />
                </div>
                </DndProvider>
            )
        }
        else if (slideIndex == 16) {
            return (
                <Fragment>
                    <div className={classes.leftDiv}>
                        <AudioPlayer src={tectonicPlates2} onEnded={() => {this.onEnded(); this.setState({audioPlaying: false})}} stopAudio={() => this.setState({audioPlaying: false})} toggleAudio={() => this.toggleAudio()} playing={audioPlaying} />
                        <img style={audioIsDone? {} : buttonStyle} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()}/>
                        <h1 className={classes.slideName}>Slide {this.state.slideIndex + 1}</h1>
                    </div>
                    <div className={classes.mainDiv}>
                        <img src={tectonicPlatesMap} className={classes.mainContent} />
                    </div>
                    <div className={classes.rightDiv}>
                        <img style={audioIsDone? {} : buttonStyle} src={Next} className={classes.imgNext} onClick={() => this.nextSlide()} />
                    </div>
                </Fragment>
            )
        }
        else if (slideIndex == 17) {
            return (
                <Fragment>
                    <div className={classes.leftDiv}>
                        <img style={audioIsDone? {} : buttonStyle} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()} />
                        <h1 className={classes.slideName}>Slide {this.state.slideIndex + 1}</h1>
                    </div>
                    <div className={classes.mainDiv}>
                        <video controls controlsList="nodownload" autoPlay className={classes.mainContent} onEnded={() => this.onEnded()}>
                            <source src={mantlePlumes} type="video/mp4"/>
                        </video>
                    </div>
                    <div className={classes.rightDiv}>
                        <img style={audioIsDone? {} : buttonStyle} src={Next} className={classes.imgNext} onClick={() => this.nextSlide()} />
                    </div>
                </Fragment>
            )
        }
        else if (slideIndex == 18) {
            return (
                <Fragment>
                    <div className={classes.leftDiv}>
                        <AudioPlayer src={southAmerica1} onEnded={() => {this.onEnded(); this.setState({audioPlaying: false})}} stopAudio={() => this.setState({audioPlaying: false})} toggleAudio={() => this.toggleAudio()} playing={audioPlaying} />
                        <img style={audioIsDone? {} : buttonStyle} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()}/>
                        <h1 className={classes.slideName}>Slide {this.state.slideIndex + 1}</h1>
                    </div>
                    <div className={classes.mainDiv}>
                        <img src={seaMounts} className={classes.mainContent} />
                    </div>
                    <div className={classes.rightDiv}>
                        <img style={audioIsDone? {} : buttonStyle} src={Next} className={classes.imgNext} onClick={() => this.nextSlide()} />
                    </div>
                </Fragment>
            )
        }
        else if (slideIndex == 19) {
            return (
                <Fragment>
                    <div className={classes.leftDiv}>
                        <AudioPlayer src={terrainMap6} onEnded={() => {this.onEnded(); this.setState({audioPlaying: false})}} stopAudio={() => this.setState({audioPlaying: false})} toggleAudio={() => this.toggleAudio()} playing={audioPlaying} />
                        <img style={audioIsDone? {} : buttonStyle} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()}/>
                        <h1 className={classes.slideName}>Slide {this.state.slideIndex + 1}</h1>
                    </div>
                    <div className={classes.mainDiv}>
                        <img src={TerrainMap} className={classes.mainContent} />
                        <button style={audioIsDone? {} : buttonStyle} className={`${classes.buttonClass} ${classes.button4}`} onClick={() => this.nextSlide()}>Eruption Dates</button>
                    </div>
                    <div className={classes.rightDiv}>
                    </div>
                </Fragment>
            )
        }
        else if (slideIndex == 20) {
            return (
                <Fragment>
                    <div className={classes.leftDiv}>
                        <AudioPlayer src={eruptionAudio} onEnded={() => {this.onEnded(); this.setState({audioPlaying: false})}} stopAudio={() => this.setState({audioPlaying: false})} toggleAudio={() => this.toggleAudio()} playing={audioPlaying} />
                        <img style={audioIsDone? {} : buttonStyle} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()}/>
                        <h1 className={classes.slideName}>Slide {this.state.slideIndex + 1}</h1>
                    </div>
                    <div className={classes.mainDiv}>
                        <img src={eruptionDates} className={classes.mainContent} />
                    </div>
                    <div className={classes.rightDiv}>
                        <img style={audioIsDone? {} : buttonStyle} src={Next} className={classes.imgNext} onClick={() => {this.nextSlide(); window.addEventListener("resize", this.updateDimensions)}} />
                    </div>
                </Fragment>
            )
        }
        else if (slideIndex == 21) {
            return (
                <Fragment>
                    <div className={classes.leftDiv}>
                        <AudioPlayer src={plumePlacement1} onEnded={() => {this.updateDimensions(); this.onEnded(); this.setState({audioPlaying: false})}} stopAudio={() => this.setState({audioPlaying: false})} toggleAudio={() => this.toggleAudio()} playing={audioPlaying} />
                        <img style={audioIsDone? {} : buttonStyle} src={Back} className={classes.imgBack} onClick={() => { this.prevSlide();  window.removeEventListener("resize", this.updateDimensions)} }/>
                        <h1 className={classes.slideName}>Slide {this.state.slideIndex + 1}</h1>
                    </div>
                    <div className={classes.mainDiv} ref={this.headerRef}>
                        <img className={classes.mainContent} src={TerrainMap} ref={this.headerRef2}/>
                        <div className={classes.imageMapperDivClass} style={audioIsDone? {} :{visibility: "hidden"}}>
                            <ImageMapper 
                                src = { TerrainOval }
    					        width = { height }
    					        imgWidth = { 2117 }
    					        map = { MAP }
    					        fillColor = { "rgba(0, 246, 255, 0.33)" }
    					        onClick = {(area) => this.imageFunction(area)}
    				        /> 
                        </div>
                        <img style={randomState} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()} />
                    </div>
                    <div className={classes.rightDiv}>
                    </div>
                </Fragment>
            )
        }
        else if (slideIndex == 103) {
            return (
                <Fragment>
                <div className={classes.leftDiv}>
                    <AudioPlayer src={plumeNo1} onEnded={() => {this.onEnded(); this.setState({audioPlaying: false})}} stopAudio={() => this.setState({audioPlaying: false})} toggleAudio={() => this.toggleAudio()} playing={audioPlaying} />
                    <button style={audioIsDone? {} : buttonStyle} className={`${classes.buttonClass} ${classes.slide103one}`} onClick={() => { this.setState({audioPlaying: false, imageChange: TerrainOvalWrong}); window.addEventListener("resize", this.updateDimensions); setTimeout(() =>  this.setState({slideIndex: 21}), 1 ); setTimeout(() =>  this.updateDimensions(), 1 )  }}>Try Again</button>
                    <button style={audioIsDone? {} : buttonStyle} className={`${classes.buttonClass} ${classes.slide103two}`} onClick={() => this.setState({imageChange: eruptionDates})}>Eruption Dates</button>
                    <button style={audioIsDone? {} : buttonStyle} className={`${classes.buttonClass} ${classes.slide103three}`} onClick={() => this.setState({imageChange: DnDAnswers})}>Island Ages</button>
                    <h1 className={classes.slideName}>Optional Slide 4</h1>
                </div>
                <div className={classes.mainDiv}>
                    <img src={imageChange} className={classes.mainContent} />
                </div>
                <div className={classes.rightDiv}>
                </div>
            </Fragment>
            )
        }
        else if (slideIndex == 22) {
            return (
                <Fragment>
                    <div className={classes.leftDiv}>
                        <AudioPlayer src={plumeYes1} onEnded={() => {this.onEnded(); this.setState({audioPlaying: false})}} stopAudio={() => this.setState({audioPlaying: false})} toggleAudio={() => this.toggleAudio()} playing={audioPlaying} />
                        <img style={audioIsDone? {} : buttonStyle} src={Back} className={classes.imgBack} onClick={() => { this.prevSlide(); window.addEventListener("resize", this.updateDimensions); setTimeout(() => this.updateDimensions(),1) }}/>
                        <h1 className={classes.slideName}>Slide {this.state.slideIndex + 1}</h1>
                    </div>
                    <div className={classes.mainDiv}>
                        <img src={TerrainOvalCorrect} className={classes.mainContent} />
                    </div>
                    <div className={classes.rightDiv}>
                        <img style={audioIsDone? {} : buttonStyle} src={Next} className={classes.imgNext} onClick={() => this.nextSlide()} />
                    </div>
                </Fragment>
            )
        }
        else if (slideIndex == 23) {
            return (
                <Fragment>
                <div className={classes.leftDiv}>
                    <AudioPlayer src={whereNext1} onEnded={() => {this.onEnded(); this.setState({audioPlaying: false})}} stopAudio={() => this.setState({audioPlaying: false})} toggleAudio={() => this.toggleAudio()} playing={audioPlaying} />
                    <img style={audioIsDone? {} : buttonStyle} src={Back} className={classes.imgBack} onClick={() => { this.prevSlide(); window.addEventListener("resize", this.updateDimensions); setTimeout(() => this.updateDimensions(),1) }}/>
                    <h1 className={classes.slideName}>Slide {this.state.slideIndex + 1}</h1>
                </div>
                <div className={classes.mainDiv}>
                    <h1 className={classes.lastSlide} >This is the end! Thanks for testing!</h1>
                    <img src={TerrainMap} className={classes.mainContent} />
                </div>
                <div className={classes.rightDiv}>
                </div>
            </Fragment>
            )
        }
    }
}

export default VolcanoeModule

